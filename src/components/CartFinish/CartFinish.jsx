import { Productos } from '../../mock';
import './CartFinish.css';
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
  writeBatch,
} from 'firebase/firestore';

const CartFinish = () => {
  const order = {
    buyer: {
      name: 'Susana',
      phone: '11385948',
      email: 'susan@gmail.com',
    },
    items: [
      {
        name: 'Six',
        price: 350,
      },
    ],
    total: 350,
  };
  const sendOrder = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order).then(({ id }) => alert(id));
  };

  const updateOrder = () => {
    const db = getFirestore();
    const orderDoc = doc(db, 'orders', 'm68KF0gcgTerw0E5EXQV');
    updateDoc(orderDoc, {
      buyer: { email: 'prueba2', name: 'roberto', phone: '5555' },
      total: 2500,
    }).then((res) => alert('se actualizo amigo'));
  };

  const batchOrder = () => {
    const db = getFirestore();
    const batch = writeBatch(db);
    const doc1 = doc(db, 'orders', 'm68KF0gcgTerw0E5EXQV');
    const doc2 = doc(db, 'orders', 'ZEgCOBy2cdSGPcHszWmY');

    batch.update(doc1, { total: 450 });
    batch.set(doc2, order);

    batch.commit().then((res) => alert('todo batch'));
  };

  return (
    <div>
      <h1>Finaliza tu compra</h1>
      <div className="product_buyer">
        <div>
          <label>Nombre</label>
          <input type="text" />
        </div>
        <div>
          <label>Dirección</label>
          <input type="text" />
        </div>
        <div>
          <label>Numero telefonico</label>
          <input type="text" />
        </div>
        <div>
          <label>Gmail</label>
          <input type="text" />
        </div>
      </div>
      {Productos.map((producto) => {
        return (
          <div className="product_compra">
            <img src={producto.img} width={50} height={50} />
            <p>{producto.name}</p>
            <p>{producto.price}</p>
          </div>
        );
      })}
      <div>
        <button onClick={() => sendOrder()}>Generar orden</button>
      </div>
      <div>
        <button onClick={() => updateOrder()}>Actualizar orden</button>
      </div>
      <div>
        <button onClick={() => batchOrder()}>Batch orden</button>
      </div>
    </div>
  );
};

export default CartFinish;
