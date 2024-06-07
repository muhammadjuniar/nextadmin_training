import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

const EditUserPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="name"
          name="name"
          required
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          required
        />
        <input
          type="text"
          placeholder="mobile"
          name="mobile"
          required
        />
        <input
          type="course"
          placeholder="course"
          name="course"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditUserPage;
