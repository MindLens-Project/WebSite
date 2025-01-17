const Footer = () => {
    return (
        <footer className="w-full bg-blue-950 text-gray-300 py-8 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Section À propos */}
                <div>
                    <h4 className="text-xl font-semibold text-white mb-4 text-center">À propos</h4>
                    <p className="text-sm">
                        <strong>MindLens</strong> est un projet personnel visant à repousser
                        les limites des IA interactives dans des environnements virtuels.
                    </p>
                </div>

                {/* Section Contact */}
                <div className="flex justify-center">
                    <div>
                        <h4 className="text-xl font-semibold text-white mb-4 text-center">Contact</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <span className="font-semibold">Email :</span>{" "}
                                <a
                                    href="mailto:contact@mindlens.fr"
                                    className="text-blue-400 hover:text-blue-500 underline"
                                >
                                    contact@mindlens.fr
                                </a>
                            </li>
                            <li>
                                <span className="font-semibold">GitHub :</span>{" "}
                                <a
                                    href="http://github.com/Mindlens-Project"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-500 underline"
                                >
                                    MindLens-Project
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Section Copyright */}
                <div className="text-sm md:items-end flex flex-col justify-center items-center">
                    <p>&copy; 2025 MindLens Project. Tous droits réservés.</p>
                    <p>Conçu avec ❤️ pour l'apprentissage et la recherche.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;