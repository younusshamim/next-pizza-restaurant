import styles from "../styles/Add.module.css";

const AddButton = ({ setIsModalOpen }) => {
  return (
    <div onClick={() => setIsModalOpen(true)} className={styles.mainAddButton}>
      Add New Pizza
    </div>
  );
};

export default AddButton;
