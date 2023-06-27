const PrecoEtanol = 5.79;

const PrecoGasolina = 6.66;

const KmPorLitros = 10;

const DistanciaEmKm= 100;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = DistanciaEmKm / KmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * PrecoEtanol;
    console.log(valorGasto);
}
else {
    const valorGasto =litrosConsumidos * PrecoGasolina;
    console.log(valorGasto);
}

