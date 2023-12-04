import { useState } from 'react';
import React from 'react';
import BoutonActif from '../components/BoutonActif';
import BoutonActif1 from '../components/BoutonActif1';

const Home = () => {
    const [showTextAFPA, setShowTextAFPA] = useState(false);
    const [showTextINCO, setShowTextINCO] = useState(false);

    const toggleTextAFPA = () => {
        setShowTextAFPA(!showTextAFPA);
    };

    const toggleTextINCO = () => {
        setShowTextINCO(!showTextINCO);
    };
    return (
        <div>

            <div className="titreEtInfoPerso">
                <h1 className="titre">STAGIAIRE
                    <br />Developpeur Web et Web Mobile Junior
                </h1>
                <header className="infoPerso">
                    <h1>Rémond Ricardo</h1>
                    <p>Email : ricardo.remond.pro@gmail.com</p>
                    <p>Téléphone : 0652128524</p>
                </header>
            </div>

            <div className="experiencesProEtCompetencesTechniques">
                <section className="experiencesPro">
                    <h2>Expériences Professionnelle</h2>
                    <p> Actuellement en recherche d'un stage de fin de formation d'une durée de 2 Mois </p>
                </section>
                <section className="competencesTechniques">
                    <h2>Compétences Techniques</h2>
                    <p>HTML5, CSS3, JavaScript, React, Angular, Node.js, etc.</p>
                </section>
            </div>

            <div className="formationAFPA" id="formationAFPA">
                <h2>Formation</h2>
                <h3>Developpeur web et web Mobile </h3>
                <p>Etablissement : AFPA St-Etienne du Rouvray </p>
                <p>Date : 04/09/23 au (En cours)</p>
                <ul>
                    <h5>
                        Objectifs de la formation :
                    </h5>
                    {showTextAFPA && (
                        <li>
                            développer la partie front-end d’une application web ou web mobile sécurisée :
                            <ul>
                                <li>installer et configurer son environnement de travail en fonction du projet web ou web mobile</li>
                                <li>maquetter des interfaces utilisateur web ou web mobile</li>
                                <li>réaliser des interfaces utilisateur statiques web ou web mobile</li>
                                <li>développer la partie dynamique des interfaces utilisateur web ou web mobile</li>
                            </ul>
                        </li>
                    )}

                    <BoutonActif id="btnAfpa" onClick={toggleTextAFPA} />

                </ul>

            </div>
            <div className="formationINCO">
                <h2>Formation</h2>
                <h3>Get Into Tech</h3>
                <p>Diplome : Attestation de suivi de formation</p>
                <p>Etablissement : Inco Academy</p>
                <p>Date: 29/03/21 au 29/04/21</p>
                <ul>
                    <h5>
                        Objectifs de la formation
                    </h5>



                    {showTextINCO && (
                        <ul>
                            <li>
                                Savoir comment créer des sites Web WordPress de base
                            </li>
                            <li>
                                Utiliser le langage HTML / CSS pour créer des pages Web
                            </li>
                            <li>
                                Faire un audit SEO basique pour proposer des recommandations
                            </li>
                            <li>
                                Extraire les informations clients grâce à des études de marché
                            </li>

                        </ul>
                    )}
                    <BoutonActif1 onClick={toggleTextINCO} />
                </ul>

            </div>




            <section className="competencesProEtPerso">
                <h2>Compétences Professionnelles et Personnelles</h2>
                <p>HTML5, CSS3, JavaScript, React, Angular, Node.js, etc.</p>
            </section>

            <section className="centreInteret">
                <h2>Centre d'interets </h2>
                <p>A Remplir</p>
            </section>


            <footer>
                <p>CECI EST MON CV REACT</p>
            </footer>

        </div>
    );
};

export default Home;