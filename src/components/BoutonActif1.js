import React, { useState } from 'react';

function BoutonActif1({ onClick }) {
    const [actif, setActif] = useState(false);

    const toggleActif = () => {
        setActif(!actif);
        if (onClick) {
            onClick();
        }
    };

    return (
        <button
            className={actif ? 'voirPlus actif' : 'voirPlus'}
            id="btnAfficherAFPA"
            onClick={toggleActif}
        >
            {actif ? 'Cacher' : 'Afficher'}
        </button>
    );
}

export default BoutonActif1;
