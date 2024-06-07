import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill className={styles.userImage} />
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
      <form className={styles.form}>
          <label>Name</label>
          <input type="text" name="username" placeholder="John Doe" />

          <label>Email</label>
          <input type="email" name="email" placeholder="JohnDoe@gmail.com" />

          <label>Mobile</label>
          <input type="text" name="mobile" placeholder="+628000..." />

          <label>Course</label>
          <input type="text" name="course" placeholder="course" />

          <label>Status</label>
          <input type="text" name="status" placeholder="status" />
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
