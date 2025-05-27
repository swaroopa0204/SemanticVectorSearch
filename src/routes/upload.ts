import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { handleFileUpload } from '../controllers/uploadController';

const uploadDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Multer storage setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });
const router = express.Router();

router.post('/', upload.single('file'), handleFileUpload);

export default router;