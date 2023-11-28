import { useState } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({
    nome: '',
    data: '',
    horario: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados da reserva:', formData);
  };

  return (
    <div className="booking">
      <div className="booking__form">
        <h3>Reserva avançada</h3>
        <h2>Preencha e reserve</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="data">Data</label>
            <input
              type="date"
              id="data"
              name="data"
              value={formData.data}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="horario">Horário</label>
            <input
              type="time"
              id="horario"
              name="horario"
              value={formData.horario}
              onChange={handleChange}
            />
          </div>
        </form>
        <button type="submit">Reserve!</button>
      </div>
    </div>
  );
};

export default Booking;
