
import { OrganismoModel } from "../models/OrganismoModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


export const getOrganismos = async (req, res) => {
  try {
    const organismos = await OrganismoModel.find();
    res.status(200).json(organismos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOrganismo = async (req, res) => {
  try {
    const { id } = req.params;
    const organismo = await OrganismoModel.findById(id);
    if (!organismo) {
      return res.status(404).json(`Organismo con ID: ${id} no encontrado`);
    }
    res.status(200).json(organismo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createOrganismo = async (req, res) => {
  try {
    const { nombre, password, direccion, poblacion, codigo_postal, telefono } = req.body;

    // Hash de la contraseña antes de almacenarla
    const hashedPassword = await bcrypt.hash(password, 10);

    const organismo = await OrganismoModel.create({
      nombre,
      password: hashedPassword,
      direccion,
      poblacion,
      codigo_postal,
      telefono,
    });

    res.status(201).json(organismo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const updateOrganismo = async (req, res) => {
  try {
    const { id } = req.params;
    const organismo = await OrganismoModel.findByIdAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    res.status(200).json(organismo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteOrganismo = async (req, res) => {
  try {
    const { id } = req.params;
    const organismo = await OrganismoModel.findByIdAndDelete(id);
    if (!organismo) {
      return res.status(404).json(`Organismo con ID: ${id} no encontrado`);
    }
    res.status(200).json("Organismo eliminado exitosamente");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginOrganismo = async (req, res) => {
  try {
    const { nombre, password } = req.body;
    const organismo = await OrganismoModel.findOne({ nombre });

    if (!organismo || !bcrypt.compareSync(password, organismo.password)) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const token = jwt.sign({ id: organismo._id, role: 'organismo' }, 'your-secret-key');
    
    const updatedOrganismo = await OrganismoModel.findOneAndUpdate(
      { _id: organismo._id },
      { token },
      { new: true }
    );

    if (!updatedOrganismo) {
      console.error('Error al actualizar el token en la base de datos');
      return res.status(500).json({ message: 'Error al actualizar el token en la base de datos' });
    }

    console.log('Organismo actualizado en la base de datos:', updatedOrganismo);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};