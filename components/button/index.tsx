import { FC } from 'react';
import { ButtonProps } from '@/types';
import styles from '@/assets/scss/Button.module.scss';

const Button: FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <button className={styles.btnPrimary} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button