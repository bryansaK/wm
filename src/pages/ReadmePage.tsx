import React from "react";

const Section = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  return (
    <div
      className="opacity-0 translate-y-6 animate-fadeInUp"
      style={{ animationDelay: `${delay}s`, animationFillMode: "forwards" }}
    >
      {children}
    </div>
  );
};

const ReadmePage = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-12 pb-20">
      <h1
        className="text-4xl font-bold text-center text-red-600 mb-4 opacity-0 animate-fadeInUp"
        style={{ animationFillMode: "forwards", animationDelay: "0s" }}
      >
        ReadMe
      </h1>

      <Section delay={0.3}>
        <p className="text-lg leading-relaxed">
          Ce projet a été réalisé avec{" "}
          <a
            href="https://react.dev/"
            className="text-blue-600 underline"
            target="_blank"
          >
            React
          </a>
          ,{" "}
          <a
            href="https://www.typescriptlang.org/"
            className="text-blue-600 underline"
            target="_blank"
          >
            TypeScript
          </a>{" "}
          et{" "}
          <a
            href="https://mui.com/"
            className="text-blue-600 underline"
            target="_blank"
          >
            MUI
          </a>{" "}
          pour les composants, avec une petite touche de Tailwind CSS pour le
          style.
        </p>
      </Section>

      <Section delay={0.6}>
        <h2 className="text-2xl font-semibold mb-2">TypeScript ?</h2>
        <p className="text-lg leading-relaxed">
          Types clairs, erreurs à compilation, meilleure autocomplétion meilleur
          scabalité quand ton projet grossit et surtout quand de nouveaux dev
          arrivent.
        </p>
      </Section>

      <Section delay={0.9}>
        <h2 className="text-2xl font-semibold mb-2">📁 Structure du projet</h2>
        <ul className="list-disc ml-6 text-lg">
          <li>
            <code>/components</code> : composants réutilisables
          </li>
          <li>
            <code>/pages</code> : chaque pages
          </li>
          <li>
            <code>/interfaces</code> : enums, interfaces ect...
          </li>
          <li>
            <code>/utils</code> : fonction utils comme date..
          </li>
          <li>
            <code>/json</code> : fichiers json
          </li>
          <li>
            <code>/assets</code> : images, sons, etc.
          </li>
        </ul>
      </Section>

      <Section delay={1.4}>
        <h2 className="text-2xl font-semibold mb-2">
          Fonctionnement du projet
        </h2>

        <h3 className="text-xl font-semibold mb-2">
          <strong>
            <a
              href="https://react.dev/learn/passing-data-deeply-with-context"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Context :
            </a>
          </strong>
        </h3>
        <p className="text-lg leading-relaxed">
          Dès que l’appli démarre, je charge le JSON et je le mets dans un{" "}
          <strong>Context</strong>. Ça permet de le rendre accessible à tous les
          composants sans devoir le passer à chaque fois à la main de parent en
          enfant (en cascade).
        </p>
        <h3 className="text-xl font-semibold mb-2 mt-2">
          <strong>
            <a
              href="https://dev.to/sumankalia/web-workers-in-reactjs-4bc7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Web worker :
            </a>
          </strong>
        </h3>
        <p className="text-lg leading-relaxed mt-4">
          Ensuite, pour filtrer la data stocker dans le context sans bloquer
          l’interface j’utilise un <strong>Web Worker</strong>. Ce qui créer un
          deuxieme threat permettant d'éviter le blockage de l'app pendant le
          calcul
        </p>
        <h3 className="text-xl font-semibold mb-2 mt-2">
          <strong>
            <a
              href="https://tailwindcss.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Tailwind CSS :
            </a>
          </strong>
        </h3>
        <p className="text-lg leading-relaxed mt-4">
          Pour le style, j’utilise <strong>Tailwind CSS</strong>. C’est un
          framework utilitaire qui te permet d’écrire directement le style dans
          les classes, comme
          <code className="bg-gray-100 px-1 mx-1">p-4</code> pour du padding ou
          <code className="bg-gray-100 px-1 mx-1">text-center</code> pour
          centrer du texte. Super rapide à mettre en place et pas besoin de
          créer 36 fichiers CSS.
        </p>
        <h3 className="text-xl font-semibold mb-2 mt-2">
          <strong>
            <a
              href="https://www.framer.com/motion/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Framer Motion :
            </a>
          </strong>
        </h3>
        <p className="text-lg leading-relaxed mt-4">
          Pour les animations, j’utilise <strong>Framer Motion</strong>. C’est
          une librairie super simple pour animer tes composants React. Par
          exemple, faire apparaître un élément avec un petit effet de fade ou de
          slide quand tu scrolles. C’est fluide, moderne, et très facile à
          écrire.
        </p>
      </Section>

      <Section>
        <h3 className="text-xl font-semibold mb-2">
          <strong>
            <a
              href="https://developer.mozilla.org/fr/docs/Web/API/Web_Workers_API/Using_web_workers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Web Worker – Algo de filtrage :
            </a>
          </strong>
        </h3>
        <p className="text-lg leading-relaxed mt-4">
          Cet algo tourne dans un <strong>Web Worker</strong> (donc en
          parallèle, sans bloquer l’UI) et sert à filtrer toutes les
          combinaisons possibles de
          <strong>3 matchs différents</strong> dans une liste.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Pour chaque trio de matchs, il teste toutes les cotes possibles entre
          eux, calcule leur produit (coteA × coteB × coteC), et garde celles
          dont la valeur est comprise entre{" "}
          <code className="bg-gray-100 px-1">min</code> et
          <code className="bg-gray-100 px-1">max</code>. Ensuite, il trie les
          résultats (de la plus petite à la plus grande cote finale) et retourne
          une pagination avec seulement les{" "}
          <strong>20 premiers résultats</strong> (ou plus selon
          <code className="bg-gray-100 px-1">limit</code>).
        </p>
      </Section>
      <Section delay={1.6}>
        <h2 className="text-2xl font-semibold mb-2">Bonus</h2>
        <ul className="list-disc ml-6 text-lg space-y-2">
          <li>
            Ajout d'une{" "}
            <strong>popup pour les détails des paris composés</strong>, avec une
            animation de <strong>scale fluide</strong> pour rendre l’affichage
            dynamique et agréable.
          </li>
          <li>
            <strong>Animation d’apparition des drapeaux</strong> (flags) lors
            d’un clic sur une cote pour enrichir l’expérience utilisateur.
          </li>
          <li>
            <strong>Animation des résultats en live</strong> en fonction des
            filtres appliqués : quand tu modifies les valeurs de filtres, les
            résultats s’actualisent de manière fluide.
          </li>
          <li>
            <strong>Ajout d’une pagination</strong> pour afficher les résultats
            par lots, sans surcharger l’écran.
          </li>
          <li>
            <strong>Ajout d’élément par défault </strong> si aucune information trouvé dans le json
          </li>
        </ul>
        <p>Pour les devs: {"j\'ai laisser des commentaires dans la plupart des fichiers pour la compréhension"}</p>
      </Section>

      <Section delay={1.2}>
        <h2 className="text-2xl font-semibold mb-2">Résumer</h2>
        <p className="text-lg leading-relaxed">
          Un projet modulaire, avec des animations, une navigation
          fluide, et un code qui se maintient facilement et scalable.
        </p>
      </Section>
    </div>
  );
};

export default ReadmePage;
