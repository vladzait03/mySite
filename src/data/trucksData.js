import volvoFh16 from '../assets/trucks/volvo-fh16.jpg';
import scaniaR500 from '../assets/trucks/scania-r500.jpg';
import kamaz54901 from '../assets/trucks/kamaz-54901.jpg';
import manTgx from '../assets/trucks/man-tgx.jpg';
import mercedesActros from '../assets/trucks/mercedes-actros.jpg';
import dafXg from '../assets/trucks/daf-xg.jpg';
import renaultT from '../assets/trucks/renault-t.jpg';
import volvoFmx from '../assets/trucks/volvo-fmx.jpg';
import scaniaG410 from '../assets/trucks/scania-g410.jpg';
import kamaz6520 from '../assets/trucks/kamaz-6520.jpg';

export const trucks = [
  {
    id: 1,
    brand: 'Volvo',
    model: 'FH16',
    type: 'Седельный тягач',
    engine: 'D16K Euro 6',
    power: 750,
    torque: 3550,
    fuelTank: 1480,
    consumption: 32,
    payload: 25,
    image: volvoFh16
  },
  {
    id: 2,
    brand: 'Scania',
    model: 'R500',
    type: 'Седельный тягач',
    engine: 'DC13 Euro 6',
    power: 500,
    torque: 2550,
    fuelTank: 1000,
    consumption: 28,
    payload: 24,
    image: scaniaR500
  },
  {
    id: 3,
    brand: 'KAMAZ',
    model: '54901',
    type: 'Седельный тягач',
    engine: 'P6 Euro 5',
    power: 450,
    torque: 2200,
    fuelTank: 700,
    consumption: 30,
    payload: 20,
    image: kamaz54901
  },
  {
    id: 4,
    brand: 'MAN',
    model: 'TGX',
    type: 'Седельный тягач',
    engine: 'D2676 Euro 6',
    power: 640,
    torque: 3000,
    fuelTank: 1200,
    consumption: 29,
    payload: 25,
    image: manTgx
  },
  {
    id: 5,
    brand: 'Mercedes-Benz',
    model: 'Actros',
    type: 'Седельный тягач',
    engine: 'OM 473 Euro 6',
    power: 625,
    torque: 3000,
    fuelTank: 1100,
    consumption: 28,
    payload: 25,
    image: mercedesActros
  },
  {
    id: 6,
    brand: 'DAF',
    model: 'XG+',
    type: 'Седельный тягач',
    engine: 'PACCAR MX-13 Euro 6',
    power: 530,
    torque: 2600,
    fuelTank: 1500,
    consumption: 26,
    payload: 24,
    image: dafXg
  },
  {
    id: 7,
    brand: 'Renault Trucks',
    model: 'T High',
    type: 'Седельный тягач',
    engine: 'DE13 Euro 6',
    power: 520,
    torque: 2550,
    fuelTank: 1100,
    consumption: 27,
    payload: 24,
    image: renaultT
  },
  {
    id: 8,
    brand: 'Volvo',
    model: 'FMX',
    type: 'Самосвал',
    engine: 'D13K Euro 6',
    power: 540,
    torque: 2600,
    fuelTank: 600,
    consumption: 38,
    payload: 20,
    image: volvoFmx
  },
  {
    id: 9,
    brand: 'Scania',
    model: 'G410',
    type: 'Седельный тягач',
    engine: 'DC13 Euro 6',
    power: 410,
    torque: 2150,
    fuelTank: 1000,
    consumption: 25,
    payload: 22,
    image: scaniaG410
  },
  {
    id: 10,
    brand: 'KAMAZ',
    model: '6520',
    type: 'Самосвал',
    engine: 'KAMAZ-740 Euro 4',
    power: 400,
    torque: 1900,
    fuelTank: 500,
    consumption: 42,
    payload: 25,
    image: kamaz6520
  }
];