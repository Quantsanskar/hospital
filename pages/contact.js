import React, { useState } from 'react';
import styles from '../styles/contact.module.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        PhoneNumber: '',
        Message: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const response = await fetch('http://127.0.0.1:8000/queries', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Message sent successfully');
                setFormData({
                    FirstName: '',
                    LastName: '',
                    Email: '',
                    PhoneNumber: '',
                    Message: '',
                });
            } else {
                setStatus('Error sending message');
            }
        } catch (error) {
            setStatus(`Error: ${error.message}`);
        }
    };

    return (
        <div className={styles.contact_us}>
            <div className={`${styles.responsiveContainerBlock} container`}>
                <form className={styles.formBox} onSubmit={handleSubmit}>
                    <p className={`${styles.textBlk} ${styles.contactHead}`}>
                        Get in touch
                    </p>
                    <p className={`${styles.textBlk} ${styles.contactSubhead}`}>
                        Want to book an appointment or have any issues contact us.
                    </p>
                    <div className={`${styles.containerBlock} ${styles.formWrapper}`}>
                        <div className={styles.responsiveContainerBlock}>
                            <div className={`${styles.responsiveCellBlock} wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6`} id="i10mt-4">
                                <p className={`${styles.textBlk} ${styles.inputTitle}`}>
                                    First Name
                                </p>
                                <input
                                    className={styles.input}
                                    id="ijowk-4"
                                    name="FirstName"
                                    type="text"
                                    value={formData.FirstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={`${styles.responsiveCellBlock} wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12`}>
                                <p className={`${styles.textBlk} ${styles.inputTitle}`}>
                                    Last Name
                                </p>
                                <input
                                    className={styles.input}
                                    id="indfi-3"
                                    name="LastName"
                                    type="text"
                                    value={formData.LastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={`${styles.responsiveCellBlock} wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12`}>
                                <p className={`${styles.textBlk} ${styles.inputTitle}`}>
                                    Email
                                </p>
                                <input
                                    className={styles.input}
                                    id="ipmgh-4"
                                    name="Email"
                                    type="email"
                                    value={formData.Email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={`${styles.responsiveCellBlock} wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12`}>
                                <p className={`${styles.textBlk} ${styles.inputTitle}`}>
                                    Phone No.
                                </p>
                                <input
                                    className={styles.input}
                                    id="imgis-4"
                                    name="PhoneNumber"
                                    type="tel"
                                    value={formData.PhoneNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={`${styles.responsiveCellBlock} wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12`} id="i634i-4">
                                <p className={`${styles.textBlk} ${styles.inputTitle}`}>
                                    Message
                                </p>
                                <textarea
                                    className={styles.textinput}
                                    id="i5vyy-4"
                                    name="Message"
                                    placeholder="Write your message..."
                                    value={formData.Message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <button className={styles.submitBtn} type="submit">
                            Send Message
                        </button>
                    </div>
                </form>
                {status && <p>{status}</p>}
            </div>
        </div>
    );
};

export default Contact;
