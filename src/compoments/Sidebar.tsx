import styles from './Sidebar.module.css';
import coverImg from '../assets/coverImg.jpg';
import { Pencil } from "@phosphor-icons/react";
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src={coverImg}
            />

            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/116949403?v=4" />
            
                <strong> Erica Pereira</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <Pencil size={20} />
                    Edit Profile
                </a>
            </footer>

        </aside>

    );
}
