/**
 * Template Generator — Produces accurate, topic-specific assignment content.
 * Contains a knowledge base of 35+ common topics with real facts.
 */

class TemplateGenerator {

    /* ======== TOPIC KNOWLEDGE BASE ======== */
    static TOPICS = {
        'photosynthesis': {
            def: 'Photosynthesis is the biological process by which green plants, algae, and certain bacteria convert light energy into chemical energy stored in glucose.',
            keyFacts: [
                'The overall equation is: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂.',
                'Chlorophyll, the green pigment in chloroplasts, absorbs sunlight primarily in the red and blue wavelengths.',
                'Photosynthesis occurs in two stages: the light-dependent reactions (in thylakoid membranes) and the Calvin cycle (in the stroma).',
                'The light reactions produce ATP and NADPH, while the Calvin cycle uses these to fix carbon dioxide into glucose.',
                'Plants absorb carbon dioxide through tiny pores called stomata on the underside of leaves.',
                'Approximately 70% of Earth\'s oxygen is produced by marine phytoplankton through photosynthesis.',
                'C4 plants like maize and sugarcane have evolved a more efficient form of carbon fixation suited to hot climates.',
            ],
            history: 'Jan Ingenhousz discovered in 1779 that plants produce oxygen in the presence of sunlight. Melvin Calvin mapped the carbon fixation cycle in the 1950s, winning the Nobel Prize in Chemistry in 1961.',
            applications: 'Understanding photosynthesis helps improve crop yields, develop artificial photosynthesis for clean energy, and design better biofuels.',
            challenges: 'Climate change affects photosynthetic efficiency. Deforestation reduces global photosynthetic capacity. Scientists are working on enhancing RuBisCO enzyme efficiency.',
            keyFigures: 'Jan Ingenhousz, Joseph Priestley, Melvin Calvin, Daniel Arnon',
        },
        'global warming': {
            def: 'Global warming refers to the long-term increase in Earth\'s average surface temperature due to rising levels of greenhouse gases in the atmosphere, primarily from human activities.',
            keyFacts: [
                'Earth\'s average temperature has risen by approximately 1.1°C since the pre-industrial era (1850–1900).',
                'Carbon dioxide levels have increased from 280 ppm (pre-industrial) to over 420 ppm in 2024.',
                'The greenhouse effect is caused primarily by CO₂, methane (CH₄), nitrous oxide (N₂O), and fluorinated gases.',
                'The burning of fossil fuels (coal, oil, natural gas) accounts for about 75% of global greenhouse gas emissions.',
                'Sea levels have risen approximately 20 cm since 1900 and are accelerating due to thermal expansion and ice sheet melting.',
                'The Paris Agreement (2015) aims to limit warming to 1.5°C above pre-industrial levels.',
                'The Arctic is warming at nearly four times the global average rate.',
            ],
            history: 'Svante Arrhenius first predicted in 1896 that CO₂ emissions could cause global warming. The Keeling Curve, started by Charles David Keeling in 1958, provides continuous CO₂ measurements at Mauna Loa Observatory.',
            applications: 'Understanding global warming drives policy decisions on carbon taxes, renewable energy adoption, electric vehicles, and international climate agreements.',
            challenges: 'Major challenges include reducing dependence on fossil fuels, adapting to unavoidable climate impacts, and ensuring climate justice for developing nations.',
            keyFigures: 'Svante Arrhenius, Charles David Keeling, James Hansen, Greta Thunberg',
        },
        'artificial intelligence': {
            def: 'Artificial Intelligence (AI) is a branch of computer science focused on building systems capable of performing tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and language understanding.',
            keyFacts: [
                'The term "Artificial Intelligence" was coined by John McCarthy in 1956 at the Dartmouth Conference.',
                'Machine Learning (ML) is a subset of AI where systems learn from data without being explicitly programmed.',
                'Deep Learning uses artificial neural networks with multiple layers, inspired by the human brain\'s structure.',
                'GPT (Generative Pre-trained Transformer) models by OpenAI demonstrated breakthrough natural language capabilities.',
                'AI applications include image recognition (achieving 99%+ accuracy), natural language processing, autonomous vehicles, and medical diagnosis.',
                'The Turing Test, proposed by Alan Turing in 1950, measures a machine\'s ability to exhibit intelligent behavior indistinguishable from humans.',
                'AI raises ethical concerns including bias in algorithms, job displacement, privacy, and autonomous weapons.',
            ],
            history: 'Alan Turing published "Computing Machinery and Intelligence" in 1950. The field experienced "AI winters" in the 1970s and 1990s due to unfulfilled expectations. The modern AI boom began around 2012 with deep learning breakthroughs by Geoffrey Hinton.',
            applications: 'AI is used in healthcare (disease diagnosis), finance (fraud detection), transportation (self-driving cars), education (personalized learning), and entertainment (recommendation systems).',
            challenges: 'Key challenges include ensuring AI safety and alignment, addressing algorithmic bias, managing job displacement, establishing regulatory frameworks, and achieving Artificial General Intelligence (AGI).',
            keyFigures: 'Alan Turing, John McCarthy, Geoffrey Hinton, Yann LeCun, Andrew Ng, Demis Hassabis',
        },
        'indian independence': {
            def: 'Indian Independence refers to India\'s freedom from British colonial rule, achieved on August 15, 1947, after nearly 200 years of British control and decades of organized freedom struggle.',
            keyFacts: [
                'The Indian National Congress was founded in 1885 by Allan Octavian Hume, Dadabhai Naoroji, and Dinshaw Wacha.',
                'Mahatma Gandhi launched the Non-Cooperation Movement (1920), Civil Disobedience Movement (1930), and Quit India Movement (1942).',
                'The Jallianwala Bagh massacre on April 13, 1919, killed approximately 379 people when General Dyer ordered troops to fire on a peaceful gathering in Amritsar.',
                'Subhas Chandra Bose formed the Indian National Army (INA) and gave the rallying cry "Give me blood and I will give you freedom."',
                'The Salt March (Dandi March) of 1930 covered 388 km from Sabarmati Ashram to Dandi over 24 days.',
                'India was partitioned into India and Pakistan at independence, causing one of the largest mass migrations in history (approximately 15 million people).',
                'The Indian Independence Act was passed by the British Parliament on July 18, 1947.',
            ],
            history: 'The Revolt of 1857 (First War of Independence) was the first major organized resistance against British rule. The struggle intensified through the Swadeshi Movement (1905), Rowlatt Act protests (1919), and culminated in the Quit India Movement (1942).',
            applications: 'The independence movement established democratic principles, secularism, and fundamental rights that form the foundation of modern India\'s Constitution.',
            challenges: 'Post-independence challenges included partition violence, integration of 562 princely states, establishing democratic institutions, addressing poverty, and nation-building.',
            keyFigures: 'Mahatma Gandhi, Jawaharlal Nehru, Sardar Vallabhbhai Patel, Subhas Chandra Bose, Bhagat Singh, B.R. Ambedkar, Dadabhai Naoroji',
        },
        'indian constitution': {
            def: 'The Indian Constitution is the supreme law of India, adopted on November 26, 1949, and enacted on January 26, 1950. It is the longest written constitution of any sovereign country in the world.',
            keyFacts: [
                'The Constitution was drafted by a Constituent Assembly of 299 members, with Dr. B.R. Ambedkar as the Chairman of the Drafting Committee.',
                'It originally had 395 Articles, 8 Schedules, and 22 Parts. As of 2024, it has 470+ Articles, 12 Schedules, and 25 Parts.',
                'The Preamble declares India a "Sovereign Socialist Secular Democratic Republic" (the words Socialist and Secular were added by the 42nd Amendment in 1976).',
                'Fundamental Rights (Articles 12–35) guarantee six categories of rights: Equality, Freedom, Against Exploitation, Freedom of Religion, Cultural and Educational, and Constitutional Remedies.',
                'Directive Principles of State Policy (Articles 36–51) provide guidelines for governance but are not enforceable in court.',
                'The Constitution establishes a federal system with a strong central government, an independent judiciary, and a parliamentary form of democracy.',
                'It took 2 years, 11 months, and 18 days to draft the Constitution.',
            ],
            history: 'The Constituent Assembly first met on December 9, 1946. The Constitution drew inspiration from the Government of India Act 1935, the US Constitution (Fundamental Rights), the British Constitution (Parliamentary system), and the Irish Constitution (Directive Principles).',
            applications: 'The Constitution provides the framework for governance, protects citizens\' rights, establishes the judiciary, and defines the relationship between states and the central government.',
            challenges: 'Ongoing challenges include ensuring effective implementation of fundamental rights, addressing regional disparities, maintaining the balance between state and central powers, and adapting to contemporary issues through amendments.',
            keyFigures: 'Dr. B.R. Ambedkar, Dr. Rajendra Prasad, Jawaharlal Nehru, Sardar Vallabhbhai Patel, Alladi Krishnaswami Ayyar, B.N. Rau',
        },
        'cloud computing': {
            def: 'Cloud computing is the delivery of computing services—including servers, storage, databases, networking, software, and analytics—over the internet ("the cloud") on a pay-as-you-go basis.',
            keyFacts: [
                'The three main service models are: IaaS (Infrastructure as a Service), PaaS (Platform as a Service), and SaaS (Software as a Service).',
                'Major cloud providers include Amazon Web Services (AWS, launched 2006), Microsoft Azure (2010), and Google Cloud Platform (2011).',
                'Cloud deployment models include public cloud, private cloud, hybrid cloud, and multi-cloud.',
                'AWS holds approximately 31% of the global cloud infrastructure market share as of 2024.',
                'Cloud computing enables scalability—resources can be increased or decreased based on demand within minutes.',
                'The global cloud computing market was valued at approximately $600 billion in 2023 and is projected to exceed $1 trillion by 2028.',
                'Virtualization technology, which allows multiple virtual machines on a single physical server, is the foundation of cloud computing.',
            ],
            history: 'The concept of cloud computing originated in the 1960s with J.C.R. Licklider\'s vision of an "intergalactic computer network." Salesforce pioneered SaaS in 1999, and AWS launched its first cloud services (S3 and EC2) in 2006, starting the modern cloud era.',
            applications: 'Cloud computing is used in web hosting, data storage and backup, machine learning model training, video streaming (Netflix uses AWS), enterprise applications, and disaster recovery.',
            challenges: 'Key challenges include data security and privacy, vendor lock-in, regulatory compliance (e.g., GDPR), downtime risks, and managing cloud costs.',
            keyFigures: 'J.C.R. Licklider, Andy Jassy (AWS), Satya Nadella (Azure), Marc Benioff (Salesforce)',
        },
        'blockchain': {
            def: 'Blockchain is a decentralized, distributed digital ledger technology that records transactions across multiple computers in a way that makes the records tamper-resistant and transparent.',
            keyFacts: [
                'Bitcoin, the first blockchain application, was introduced in 2008 by an anonymous person or group using the pseudonym Satoshi Nakamoto.',
                'Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data, forming an immutable chain.',
                'Consensus mechanisms include Proof of Work (PoW), Proof of Stake (PoS), and Delegated Proof of Stake (DPoS).',
                'Ethereum, launched in 2015 by Vitalik Buterin, introduced smart contracts—self-executing programs on the blockchain.',
                'Blockchain eliminates the need for intermediaries (banks, brokers) in financial transactions.',
                'The technology faces scalability challenges: Bitcoin processes about 7 transactions per second versus Visa\'s 65,000.',
                'Blockchain applications extend beyond cryptocurrency to supply chain management, voting systems, healthcare records, and digital identity.',
            ],
            history: 'The concept of cryptographically secured chains of blocks was first described in 1991 by Stuart Haber and W. Scott Stornetta. Bitcoin\'s whitepaper was published in 2008, and the first Bitcoin block (Genesis Block) was mined on January 3, 2009.',
            applications: 'Applications include cryptocurrency (Bitcoin, Ethereum), DeFi (Decentralized Finance), NFTs (Non-Fungible Tokens), supply chain tracking, cross-border payments, and digital identity verification.',
            challenges: 'Major challenges include energy consumption of PoW mining, regulatory uncertainty, scalability limitations, interoperability between different blockchains, and the environmental impact.',
            keyFigures: 'Satoshi Nakamoto, Vitalik Buterin, Stuart Haber, W. Scott Stornetta, Changpeng Zhao',
        },
        'water cycle': {
            def: 'The water cycle (hydrological cycle) is the continuous movement of water within the Earth and atmosphere through processes of evaporation, condensation, precipitation, and collection.',
            keyFacts: [
                'Approximately 97.5% of Earth\'s water is saltwater in oceans; only 2.5% is freshwater.',
                'The Sun drives the water cycle by providing energy for evaporation from oceans, lakes, and rivers.',
                'Transpiration from plants contributes about 10% of atmospheric moisture.',
                'Condensation occurs when water vapor cools and forms tiny water droplets around particles (condensation nuclei) to create clouds.',
                'Precipitation falls as rain, snow, sleet, or hail depending on atmospheric temperature.',
                'Groundwater accounts for about 30% of global freshwater and can take thousands of years to replenish.',
                'The total amount of water on Earth remains constant—approximately 1.4 billion cubic kilometers.',
            ],
            history: 'Bernard Palissy first described the modern concept of the water cycle in 1580. Edmond Halley (1687) and Pierre Perrault (1674) provided early scientific measurements of evaporation and precipitation.',
            applications: 'Understanding the water cycle is essential for weather forecasting, water resource management, agriculture, hydroelectric power generation, and climate modeling.',
            challenges: 'Climate change is disrupting the water cycle, causing more intense rainfall in some areas and severe droughts in others. Groundwater depletion and water pollution are major global concerns.',
            keyFigures: 'Bernard Palissy, Edmond Halley, Pierre Perrault',
        },
        'pollution': {
            def: 'Pollution is the introduction of harmful substances or contaminants into the natural environment, causing adverse changes to ecosystems, human health, and the quality of air, water, and soil.',
            keyFacts: [
                'Air pollution causes approximately 7 million premature deaths globally each year, according to the WHO.',
                'The main air pollutants are particulate matter (PM2.5, PM10), nitrogen dioxide (NO₂), sulfur dioxide (SO₂), carbon monoxide (CO), and ground-level ozone.',
                'Water pollution sources include industrial discharge, agricultural runoff (pesticides and fertilizers), sewage, and plastic waste.',
                'Approximately 8 million tonnes of plastic enter the oceans every year.',
                'Soil pollution from heavy metals (lead, mercury, cadmium) can persist for decades and enter the food chain.',
                'Noise pollution above 85 decibels can cause hearing damage with prolonged exposure.',
                'India\'s Delhi frequently ranks among the most polluted cities globally, with PM2.5 levels exceeding WHO guidelines by 10-20 times during winter.',
            ],
            history: 'The Great Smog of London in 1952 killed approximately 4,000 people in four days, leading to the UK\'s Clean Air Act of 1956. The Bhopal Gas Tragedy in 1984 was the world\'s worst industrial disaster.',
            applications: 'Pollution monitoring systems, emission control technologies (catalytic converters, scrubbers), waste treatment plants, and environmental impact assessments help manage pollution.',
            challenges: 'Challenges include balancing economic development with environmental protection, enforcing regulations, addressing transboundary pollution, and managing electronic waste (e-waste).',
            keyFigures: 'Rachel Carson (Silent Spring, 1962), M.C. Mehta (environmental activist), Wangari Maathai',
        },
        'solar system': {
            def: 'The Solar System consists of the Sun and all celestial objects gravitationally bound to it, including eight planets, their moons, dwarf planets, asteroids, comets, and meteoroids.',
            keyFacts: [
                'The eight planets in order from the Sun are: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.',
                'Jupiter is the largest planet, with a mass 318 times that of Earth and the Great Red Spot—a storm larger than Earth that has persisted for over 400 years.',
                'The Sun contains 99.86% of the total mass of the Solar System and is approximately 4.6 billion years old.',
                'Saturn\'s rings are made of ice particles and rocky debris, spanning up to 282,000 km but only about 10 meters thick.',
                'Pluto was reclassified as a dwarf planet by the International Astronomical Union (IAU) in 2006.',
                'Earth is the only known planet to support life, with liquid water covering about 71% of its surface.',
                'The Asteroid Belt between Mars and Jupiter contains millions of rocky objects, with Ceres being the largest (950 km diameter).',
            ],
            history: 'Nicolaus Copernicus proposed the heliocentric model in 1543. Galileo Galilei made the first telescopic observations of the planets in 1610. NASA\'s Voyager 1 (launched 1977) is the most distant human-made object, now in interstellar space.',
            applications: 'Studying the Solar System helps understand planetary formation, climate systems, potential for extraterrestrial life, asteroid impact risks, and space exploration.',
            challenges: 'Challenges include developing propulsion for faster interplanetary travel, sustaining human life in space, planetary protection, and understanding dark matter\'s role in the Solar System.',
            keyFigures: 'Nicolaus Copernicus, Galileo Galilei, Johannes Kepler, Isaac Newton, Carl Sagan',
        },
        'computer': {
            def: 'A computer is an electronic device that processes data according to a set of instructions (programs) to perform calculations, store information, and automate tasks.',
            keyFacts: [
                'Charles Babbage designed the Analytical Engine in 1837, considered the first concept of a general-purpose computer.',
                'ENIAC (1945) was the first general-purpose electronic digital computer, weighing 30 tonnes and occupying 1,800 square feet.',
                'Modern computers follow the Von Neumann architecture (1945): input, processing (CPU), memory, and output.',
                'Moore\'s Law (1965) predicted that the number of transistors on a microchip would double approximately every two years.',
                'A modern smartphone has more computing power than the computers used for the Apollo 11 Moon landing in 1969.',
                'The five generations of computers progress from vacuum tubes (1st) to transistors (2nd), integrated circuits (3rd), microprocessors (4th), and AI-based systems (5th).',
                'Binary code (0s and 1s) is the fundamental language of all digital computers.',
            ],
            history: 'The abacus (3000 BCE) was the earliest computing device. Ada Lovelace wrote the first computer algorithm in 1843. Alan Turing\'s theoretical Turing Machine (1936) established the mathematical foundation of computing.',
            applications: 'Computers are used in education, healthcare (MRI, CT scans), banking, scientific research, entertainment, communication, and industrial automation.',
            challenges: 'Current challenges include cybersecurity threats, electronic waste management, digital divide, and the development of quantum computing.',
            keyFigures: 'Charles Babbage, Ada Lovelace, Alan Turing, John von Neumann, Steve Jobs, Bill Gates',
        },
        'internet': {
            def: 'The Internet is a global network of interconnected computer networks that use the TCP/IP protocol suite to communicate and share information across the world.',
            keyFacts: [
                'ARPANET, the precursor to the Internet, sent its first message on October 29, 1969, between UCLA and Stanford.',
                'Tim Berners-Lee invented the World Wide Web (WWW) in 1989 at CERN, introducing HTML, URLs, and HTTP.',
                'As of 2024, approximately 5.4 billion people (67% of the world\'s population) use the Internet.',
                'The Internet operates through a hierarchy of networks connected by undersea fiber optic cables spanning over 1.3 million km.',
                'HTTP (Hypertext Transfer Protocol) and HTTPS (its secure version with SSL/TLS encryption) are the foundation of web communication.',
                'The Domain Name System (DNS) translates human-readable domain names into IP addresses.',
                'India has over 800 million Internet users, the second-largest Internet population after China.',
            ],
            history: 'ARPANET was developed by DARPA in 1969. TCP/IP was standardized in 1983. The first web browser (Mosaic) was released in 1993, making the Internet accessible to the general public.',
            applications: 'The Internet enables email, social media, e-commerce, online education, telemedicine, cloud computing, streaming services, and remote work.',
            challenges: 'Challenges include cybersecurity, misinformation, digital privacy, net neutrality, bridging the digital divide, and Internet governance.',
            keyFigures: 'Vint Cerf, Bob Kahn, Tim Berners-Lee, Marc Andreessen, Larry Page, Sergey Brin',
        },
        'democracy': {
            def: 'Democracy is a system of government in which power is vested in the people, who exercise it directly or through elected representatives.',
            keyFacts: [
                'The word "democracy" comes from the Greek words "demos" (people) and "kratos" (rule), meaning "rule of the people."',
                'Athenian democracy in ancient Greece (5th century BCE) is considered the first known democracy, though it excluded women, slaves, and foreigners.',
                'India is the world\'s largest democracy with over 900 million eligible voters.',
                'Key features of democracy include free and fair elections, rule of law, protection of fundamental rights, separation of powers, and an independent judiciary.',
                'Direct democracy (citizens vote on issues directly) exists in Swiss cantons. Most countries practice representative democracy.',
                'Universal adult suffrage—the right of all adults to vote regardless of race, gender, or wealth—was a 20th-century achievement in most nations.',
                'The Universal Declaration of Human Rights (1948) established democratic principles as international norms.',
            ],
            history: 'Modern democracy evolved from the Magna Carta (1215), the English Bill of Rights (1689), the American Revolution (1776), and the French Revolution (1789). India adopted universal adult suffrage with its Constitution in 1950.',
            applications: 'Democratic governance provides mechanisms for peaceful transfer of power, protection of minority rights, accountability of government, and citizen participation in decision-making.',
            challenges: 'Challenges include voter apathy, corruption, populism, misinformation, erosion of democratic norms, and ensuring equal representation.',
            keyFigures: 'Cleisthenes, John Locke, Thomas Jefferson, Mahatma Gandhi, Abraham Lincoln, Nelson Mandela',
        },
        'renewable energy': {
            def: 'Renewable energy is energy derived from natural sources that are replenished at a rate faster than they are consumed, including solar, wind, hydroelectric, geothermal, and biomass energy.',
            keyFacts: [
                'Renewable energy sources accounted for approximately 30% of global electricity generation in 2023.',
                'Solar photovoltaic (PV) costs have decreased by 89% since 2010, making it the cheapest source of electricity in many regions.',
                'China is the world\'s largest producer of renewable energy, followed by the United States and Brazil.',
                'A single modern wind turbine can generate enough electricity to power approximately 1,500 homes.',
                'Hydroelectric power is the largest source of renewable electricity, with China\'s Three Gorges Dam being the world\'s largest at 22,500 MW capacity.',
                'India\'s target is to achieve 500 GW of non-fossil fuel energy capacity by 2030.',
                'Geothermal energy harnesses heat from Earth\'s interior, with Iceland generating nearly 100% of its electricity from renewable sources.',
            ],
            history: 'The first solar cell was developed at Bell Labs in 1954 with 6% efficiency. The first modern wind turbine was built in Vermont, USA, in 1941. India launched the National Solar Mission in 2010.',
            applications: 'Renewable energy is used for electricity generation, heating, transportation (electric vehicles), water desalination, and hydrogen production.',
            challenges: 'Challenges include energy storage (battery technology), intermittency of solar and wind, grid integration, land use requirements, and upfront capital costs.',
            keyFigures: 'Edmond Becquerel, Charles Fritts, Elon Musk, Hermann Scheer',
        },
        'machine learning': {
            def: 'Machine Learning (ML) is a subset of artificial intelligence that enables systems to automatically learn and improve from experience without being explicitly programmed.',
            keyFacts: [
                'The three main types of ML are: supervised learning (labeled data), unsupervised learning (unlabeled data), and reinforcement learning (reward-based).',
                'Common algorithms include linear regression, decision trees, random forests, support vector machines (SVM), and neural networks.',
                'Deep learning, a subset of ML, uses multi-layered neural networks and has revolutionized image recognition, speech processing, and NLP.',
                'Training a large ML model like GPT-4 requires thousands of GPUs and millions of dollars in computing costs.',
                'Overfitting occurs when a model learns the training data too well, including noise, and performs poorly on new data.',
                'The ImageNet competition (2012) was a turning point when AlexNet achieved a dramatic improvement in image classification accuracy using deep learning.',
                'ML is used in recommendation systems (Netflix, YouTube), spam filtering, medical imaging analysis, autonomous vehicles, and fraud detection.',
            ],
            history: 'Arthur Samuel coined the term "machine learning" in 1959 while at IBM. The backpropagation algorithm was popularized in 1986 by Rumelhart, Hinton, and Williams. The deep learning revolution began around 2012.',
            applications: 'ML is applied in healthcare (disease prediction), finance (algorithmic trading), retail (demand forecasting), agriculture (crop monitoring), and cybersecurity (threat detection).',
            challenges: 'Challenges include data quality and bias, model interpretability (black-box problem), computational resource requirements, and ethical considerations in automated decision-making.',
            keyFigures: 'Arthur Samuel, Geoffrey Hinton, Yann LeCun, Andrew Ng, Fei-Fei Li',
        },
        'cyber security': {
            def: 'Cyber security is the practice of protecting systems, networks, programs, and data from digital attacks, unauthorized access, damage, or theft.',
            keyFacts: [
                'Cybercrime is projected to cost the world $10.5 trillion annually by 2025.',
                'Common attack types include phishing, malware, ransomware, DDoS attacks, SQL injection, and man-in-the-middle attacks.',
                'The CIA triad—Confidentiality, Integrity, and Availability—forms the foundation of information security.',
                'Multi-factor authentication (MFA) reduces the risk of unauthorized access by requiring two or more verification methods.',
                'The WannaCry ransomware attack in 2017 affected over 200,000 computers across 150 countries.',
                'Zero-day vulnerabilities are previously unknown software flaws that attackers exploit before developers can patch them.',
                'India\'s CERT-In (Indian Computer Emergency Response Team) handles cybersecurity incidents nationally.',
            ],
            history: 'The first computer virus, "Creeper," appeared in 1971 on ARPANET. The Morris Worm (1988) was one of the first recognized internet worms. The field grew significantly after high-profile breaches at Yahoo (2013–2014, 3 billion accounts).',
            applications: 'Cybersecurity protects banking systems, government infrastructure, healthcare data, personal privacy, intellectual property, and critical infrastructure (power grids, water systems).',
            challenges: 'Challenges include the cybersecurity skills gap (3.5 million unfilled positions globally), evolving threat landscape, state-sponsored attacks, IoT security vulnerabilities, and quantum computing threats to encryption.',
            keyFigures: 'Whitfield Diffie, Martin Hellman, Bruce Schneier, Kevin Mitnick',
        },
        'dna': {
            def: 'DNA (Deoxyribonucleic Acid) is a molecule that carries the genetic instructions for the development, functioning, growth, and reproduction of all known living organisms.',
            keyFacts: [
                'DNA has a double-helix structure, discovered by James Watson and Francis Crick in 1953, based on X-ray crystallography data by Rosalind Franklin.',
                'DNA is made up of four nucleotide bases: Adenine (A), Thymine (T), Guanine (G), and Cytosine (C). A pairs with T, and G pairs with C.',
                'The human genome contains approximately 3.2 billion base pairs and about 20,000–25,000 protein-coding genes.',
                'DNA replication is semi-conservative—each new DNA molecule contains one original strand and one newly synthesized strand.',
                'The Human Genome Project (1990–2003) was a 13-year international effort that mapped all human genes, costing approximately $2.7 billion.',
                'CRISPR-Cas9, a gene-editing technology developed in 2012, allows precise modification of DNA sequences.',
                'Every cell in the human body (except red blood cells) contains a complete copy of the individual\'s DNA.',
            ],
            history: 'Friedrich Miescher first isolated DNA in 1869. Watson and Crick published the double helix structure in Nature in April 1953. The PCR (Polymerase Chain Reaction) technique was developed by Kary Mullis in 1983.',
            applications: 'DNA technology is used in forensic science, paternity testing, genetic disease diagnosis, gene therapy, agricultural biotechnology (GMOs), and personalized medicine.',
            challenges: 'Ethical challenges include genetic privacy, designer babies, gene patents, cloning debates, and equitable access to genetic therapies.',
            keyFigures: 'James Watson, Francis Crick, Rosalind Franklin, Friedrich Miescher, Kary Mullis, Jennifer Doudna',
        },
        'climate change': {
            def: 'Climate change refers to significant, long-term changes in global temperatures and weather patterns, primarily driven by human activities such as burning fossil fuels and deforestation.',
            keyFacts: [
                'The IPCC (Intergovernmental Panel on Climate Change) has concluded with over 95% certainty that human activities are the dominant cause of observed warming since the mid-20th century.',
                'Global sea levels could rise by 0.3 to 1.0 meters by 2100 under different emission scenarios.',
                'The frequency and intensity of extreme weather events (hurricanes, heat waves, droughts) have increased due to climate change.',
                'Deforestation accounts for approximately 10% of global greenhouse gas emissions.',
                'The ocean absorbs about 30% of human-produced CO₂, causing ocean acidification that threatens coral reefs and marine ecosystems.',
                'Climate change threatens food security, with crop yields projected to decline by 2–6% per decade in many regions.',
                'The cost of climate inaction is estimated at $23 trillion in reduced annual global economic output by 2050.',
            ],
            history: 'The first World Climate Conference was held in 1979. The IPCC was established in 1988. The Kyoto Protocol (1997) was the first international treaty to set binding emission reduction targets.',
            applications: 'Climate science drives renewable energy policy, carbon capture technology, climate-resilient agriculture, green building standards, and international cooperation frameworks.',
            challenges: 'Challenges include transitioning from fossil fuels, climate migration, loss of biodiversity, achieving carbon neutrality, and ensuring climate justice for vulnerable populations.',
            keyFigures: 'James Hansen, Michael Mann, Wangari Maathai, Al Gore, Greta Thunberg',
        },
        'python programming': {
            def: 'Python is a high-level, interpreted, general-purpose programming language known for its simple syntax, readability, and versatility, used in web development, data science, AI, and automation.',
            keyFacts: [
                'Python was created by Guido van Rossum and first released in 1991. The name is inspired by the comedy group Monty Python.',
                'Python uses indentation (whitespace) to define code blocks, unlike languages that use braces {}.',
                'Python supports multiple programming paradigms: procedural, object-oriented, and functional programming.',
                'Popular Python frameworks include Django and Flask (web), NumPy and Pandas (data), TensorFlow and PyTorch (ML), and Matplotlib (visualization).',
                'Python is the most popular programming language according to the TIOBE Index and Stack Overflow surveys (2023–2024).',
                'Python\'s extensive standard library is often described as "batteries included."',
                'Major organizations using Python include Google, Netflix, Instagram, NASA, and CERN.',
            ],
            history: 'Guido van Rossum began developing Python in the late 1980s as a successor to the ABC language. Python 2.0 was released in 2000, and Python 3.0 in 2008. Python 2 reached end-of-life in January 2020.',
            applications: 'Python is used in web development, data analysis, machine learning, scientific computing, automation/scripting, game development, and DevOps.',
            challenges: 'Python\'s limitations include slower execution speed compared to compiled languages (C, C++), the Global Interpreter Lock (GIL) limiting multi-threading, and mobile development support.',
            keyFigures: 'Guido van Rossum, Wes McKinney (Pandas), Travis Oliphant (NumPy)',
        },
        'ecosystem': {
            def: 'An ecosystem is a community of living organisms (biotic factors) interacting with each other and their physical environment (abiotic factors) in a particular area.',
            keyFacts: [
                'Major types of ecosystems include terrestrial (forests, grasslands, deserts), aquatic (marine, freshwater), and artificial (urban, agricultural).',
                'Energy flows through ecosystems in a food chain: producers → primary consumers → secondary consumers → tertiary consumers → decomposers.',
                'Only about 10% of energy is transferred from one trophic level to the next (10% rule).',
                'Biodiversity refers to the variety of life at genetic, species, and ecosystem levels. Earth has an estimated 8.7 million species, with only 1.2 million identified.',
                'Decomposers (bacteria, fungi) break down dead organic matter, recycling nutrients back into the ecosystem.',
                'The Amazon Rainforest produces approximately 6% of the world\'s oxygen and is home to 10% of all known species.',
                'Keystone species have a disproportionately large impact on their ecosystem relative to their abundance (e.g., sea otters, wolves).',
            ],
            history: 'Arthur Tansley coined the term "ecosystem" in 1935. Eugene Odum\'s work in the 1950s–1960s established ecosystem ecology as a major discipline.',
            applications: 'Ecosystem science informs conservation biology, sustainable agriculture, environmental impact assessment, ecosystem services valuation, and restoration ecology.',
            challenges: 'Threats include habitat destruction, invasive species, pollution, overexploitation, and climate change causing ecosystem collapse.',
            keyFigures: 'Arthur Tansley, Eugene Odum, Charles Darwin, Rachel Carson, E.O. Wilson',
        },
        'deforestation': {
            def: 'Deforestation is the permanent removal of forests and trees from land, converting it to non-forest use such as agriculture, urban development, or mining.',
            keyFacts: [
                'Approximately 10 million hectares of forest are lost annually, equivalent to about 27 football fields every minute.',
                'The Amazon rainforest has lost approximately 17% of its forest cover in the last 50 years.',
                'Agriculture (including cattle ranching and soy cultivation) accounts for about 80% of tropical deforestation.',
                'Forests absorb about 2.6 billion tonnes of CO₂ annually, acting as crucial carbon sinks.',
                'Deforestation contributes approximately 10% of global greenhouse gas emissions.',
                'An estimated 80% of terrestrial biodiversity is found in forests.',
                'Indonesia and Brazil have the highest rates of deforestation globally.',
            ],
            history: 'Large-scale deforestation began with the Agricultural Revolution. The Industrial Revolution (18th–19th century) accelerated forest clearing for timber and fuel. The REDD+ framework was established in 2008 to reduce emissions from deforestation.',
            applications: 'Understanding deforestation is critical for climate policy, biodiversity conservation, indigenous rights protection, sustainable forestry practices, and carbon offset programs.',
            challenges: 'Challenges include balancing economic development with conservation, enforcing logging regulations, addressing demand for agricultural land, and protecting indigenous communities.',
            keyFigures: 'Chico Mendes, Wangari Maathai, Sunderlal Bahuguna (Chipko Movement)',
        },
        'e-commerce': {
            def: 'E-commerce (Electronic Commerce) refers to the buying and selling of goods and services over the internet, including online transactions, digital payments, and electronic business processes.',
            keyFacts: [
                'Global e-commerce sales reached approximately $6.3 trillion in 2023.',
                'Amazon, founded by Jeff Bezos in 1994, is the world\'s largest e-commerce platform by revenue.',
                'E-commerce models include B2C (Business to Consumer), B2B (Business to Business), C2C (Consumer to Consumer), and D2C (Direct to Consumer).',
                'India\'s e-commerce market is projected to reach $200 billion by 2026, driven by Flipkart, Amazon India, and Jio Mart.',
                'UPI (Unified Payments Interface) in India processed over 10 billion transactions per month in 2024.',
                'Mobile commerce (m-commerce) accounts for over 70% of e-commerce transactions globally.',
                'Dropshipping, a fulfillment model where sellers don\'t hold inventory, has made starting an e-commerce business more accessible.',
            ],
            history: 'The first online sale occurred in 1994 (a Sting CD on NetMarket). eBay and Amazon were both founded in the mid-1990s. India\'s Flipkart was founded in 2007, and UPI was launched in 2016.',
            applications: 'E-commerce enables global market access, 24/7 shopping, personalized recommendations, digital marketing, supply chain optimization, and financial inclusion.',
            challenges: 'Challenges include cybersecurity and fraud, logistics in rural areas, return/refund management, maintaining product quality, and competition with traditional retail.',
            keyFigures: 'Jeff Bezos, Jack Ma (Alibaba), Sachin Bansal and Binny Bansal (Flipkart)',
        },
        'social media': {
            def: 'Social media refers to interactive digital platforms that allow users to create, share, and exchange content, ideas, and information in virtual communities and networks.',
            keyFacts: [
                'As of 2024, approximately 4.9 billion people use social media worldwide.',
                'Facebook (now Meta), launched in 2004, has over 3 billion monthly active users.',
                'The average person spends approximately 2 hours and 24 minutes per day on social media.',
                'Instagram has over 2 billion monthly active users, with 95 million photos and videos shared daily.',
                'TikTok, launched internationally in 2018, reached 1 billion users faster than any other social media platform.',
                'Social media marketing spending exceeded $230 billion globally in 2023.',
                'India has the largest number of Facebook and WhatsApp users in the world.',
            ],
            history: 'Six Degrees (1997) was the first recognizable social media platform. Facebook launched in 2004, Twitter (now X) in 2006, Instagram in 2010, and TikTok in 2016.',
            applications: 'Social media is used for personal communication, business marketing, news distribution, political campaigns, education, customer service, and social activism.',
            challenges: 'Challenges include misinformation and fake news, cyberbullying, mental health impacts (especially on youth), data privacy concerns, and content moderation at scale.',
            keyFigures: 'Mark Zuckerberg, Jack Dorsey, Kevin Systrom (Instagram), Zhang Yiming (TikTok)',
        },
    };

    /* ======== SENTENCE VARIETY ======== */
    static INTROS = [
        (t) => `${t} is a subject of immense importance in today's world, with far-reaching implications across multiple domains.`,
        (t) => `In the modern era, ${t} has emerged as one of the most significant areas of study and research.`,
        (t) => `The study of ${t} has gained tremendous relevance in contemporary times, influencing both academic discourse and practical applications.`,
        (t) => `${t} represents a critical area of knowledge that continues to shape our understanding of the world around us.`,
    ];
    static CONCLUSIONS = [
        (t) => `In conclusion, ${t} remains a vital area of study with significant implications for the future. Continued research and awareness are essential for addressing the challenges and opportunities it presents.`,
        (t) => `To summarize, the study of ${t} reveals its profound importance in shaping our understanding and approach to real-world problems. As this field continues to evolve, it will undoubtedly play an increasingly important role.`,
        (t) => `In summary, ${t} is a multifaceted subject with deep historical roots and contemporary significance. The knowledge gained from studying this topic is essential for informed decision-making and future progress.`,
    ];

    /* ======== MAIN ENTRY ======== */
    generate(topic, formatInstr, extra) {
        const t = topic || 'General Knowledge';
        const fi = (formatInstr || '').toLowerCase();
        let result;
        if (/notes?\b/.test(fi))              result = this._notes(t, extra);
        else if (/letter\b/.test(fi))         result = this._letter(t, extra);
        else if (/report\b/.test(fi))         result = this._report(t, extra);
        else if (/q\s*[&/]\s*a|question/.test(fi)) result = this._qa(t, extra);
        else if (/summar/.test(fi))           result = this._summary(t, extra);
        else if (/project|research/.test(fi)) result = this._research(t, extra);
        else if (/presentation/.test(fi))     result = this._presentation(t, extra);
        else                                  result = this._essay(t, extra);

        // Check if user requested specific page count
        const targetPages = this._parsePageCount(extra) || this._parsePageCount(formatInstr);
        if (targetPages && targetPages > 0) {
            result.blocks = this._expandToPages(result.blocks, t, targetPages);
        }
        return result;
    }

    /* ======== PAGE COUNT PARSER ======== */
    _parsePageCount(text) {
        if (!text) return 0;
        const m = text.match(/(\d+)\s*pages?/i);
        return m ? parseInt(m[1], 10) : 0;
    }

    /* ======== CONTENT EXPANDER — fills content to target page count ======== */
    _expandToPages(blocks, topic, targetPages) {
        const WORDS_PER_PAGE = 250; // ~250 words per handwritten page
        const targetWords = targetPages * WORDS_PER_PAGE;
        const d = this._getData(topic);

        // Count current words
        let currentWords = this._countWords(blocks);

        // Keep expanding until we reach target
        let round = 0;
        while (currentWords < targetWords && round < 50) {
            round++;
            const deficit = targetWords - currentWords;

            // Generate expansion paragraphs
            const expansions = this._generateExpansion(topic, d, round, deficit);
            
            // Insert before conclusion (if exists) or at end
            const conclusionIdx = blocks.findIndex(b => 
                b.type === 'heading' && b.content && b.content.toLowerCase().includes('conclusion'));
            
            if (conclusionIdx > 0) {
                blocks.splice(conclusionIdx, 0, ...expansions);
            } else {
                // Insert before last block
                const insertAt = Math.max(blocks.length - 1, 1);
                blocks.splice(insertAt, 0, ...expansions);
            }

            currentWords = this._countWords(blocks);
        }

        return blocks;
    }

    /* ======== WORD COUNTER ======== */
    _countWords(blocks) {
        let count = 0;
        for (const b of blocks) {
            if (b.content) count += b.content.split(/\s+/).length;
            if (b.items) for (const item of b.items) count += item.split(/\s+/).length;
        }
        return count;
    }

    /* ======== EXPANSION CONTENT GENERATOR ======== */
    _generateExpansion(topic, d, round, deficit) {
        const t = topic;
        const expansions = [];

        // Different expansion strategies based on round
        const strategies = [
            () => this._expandDetailed(t, d),
            () => this._expandExamples(t, d),
            () => this._expandAnalysis(t, d),
            () => this._expandComparison(t, d),
            () => this._expandCaseStudy(t, d),
            () => this._expandImplications(t, d),
            () => this._expandCurrentTrends(t, d),
            () => this._expandHistorical(t, d),
            () => this._expandDebate(t, d),
            () => this._expandFuture(t, d),
        ];

        const strategy = strategies[(round - 1) % strategies.length];
        return strategy();
    }

    _expandDetailed(t, d) {
        const blocks = [];
        blocks.push({ type: 'heading', level: 2, content: `Detailed Analysis of ${t}` });
        blocks.push({ type: 'paragraph', content: d
            ? `A deeper examination of ${t} reveals several layers of complexity that merit careful analysis. ${d.def} This understanding forms the basis for more advanced study and application in various contexts. The significance of this topic extends beyond academic interest into practical real-world applications that affect millions of people worldwide.`
            : `A deeper examination of ${t} reveals several layers of complexity that merit careful analysis. This topic has evolved considerably over the decades, and a thorough understanding requires examining its various dimensions, including theoretical foundations, practical applications, and future implications. The significance of this subject extends beyond academic interest into practical real-world applications.`
        });
        blocks.push({ type: 'paragraph', content: d
            ? `The foundational principles of ${t} can be traced back to the work of ${d.keyFigures}. Their contributions have shaped the modern understanding of this field and continue to influence contemporary research. ${d.keyFacts[0]} This fact alone demonstrates the profound importance of understanding the underlying mechanisms and processes involved.`
            : `The foundational principles of ${t} have been developed through extensive research and scholarly work over many decades. These principles continue to evolve as new discoveries are made and existing theories are refined. The interdisciplinary nature of this subject means that insights from multiple fields contribute to a more comprehensive understanding of the topic.`
        });
        blocks.push({ type: 'paragraph', content: `Furthermore, the study of ${t} requires a systematic approach that considers both quantitative and qualitative aspects. Researchers and students must examine the available evidence carefully, evaluate competing hypotheses, and draw conclusions based on rigorous analysis. This methodical approach ensures that our understanding of ${t} is grounded in solid evidence rather than speculation or unfounded assumptions.` });
        return blocks;
    }

    _expandExamples(t, d) {
        const blocks = [];
        blocks.push({ type: 'heading', level: 2, content: `Real-World Examples of ${t}` });
        blocks.push({ type: 'paragraph', content: `To better understand ${t}, it is helpful to examine real-world examples that illustrate its principles in action. These examples demonstrate how theoretical knowledge translates into practical outcomes and why this subject matters in everyday life. The following examples highlight different aspects and applications of ${t} across various contexts.` });
        if (d) {
            blocks.push({ type: 'paragraph', content: `${d.applications} These practical applications demonstrate the wide-ranging impact of ${t} on society, technology, and human progress. Each application represents years of research, development, and implementation by dedicated professionals and researchers.` });
            blocks.push({ type: 'paragraph', content: `For instance, ${d.keyFacts[1]} Additionally, ${d.keyFacts[2]} These specific examples help illustrate the breadth and depth of ${t} as a field of study and practice. Understanding these real-world manifestations is crucial for students who wish to apply their theoretical knowledge in practical settings.` });
        } else {
            blocks.push({ type: 'paragraph', content: `Consider how ${t} manifests in educational institutions, research laboratories, and industrial settings. In each of these environments, the principles of ${t} are applied differently, yet the fundamental concepts remain consistent. This versatility is one of the key strengths of ${t} as a field of study and underscores its relevance across diverse professional domains.` });
            blocks.push({ type: 'paragraph', content: `Another compelling example involves the application of ${t} in developing countries, where its principles are being used to address pressing social and economic challenges. These implementations demonstrate that ${t} is not merely an academic exercise but a powerful tool for positive change in communities around the world.` });
        }
        blocks.push({ type: 'paragraph', content: `These examples collectively demonstrate that ${t} is not an abstract concept confined to textbooks but a living, dynamic field with tangible impacts on our daily lives. By studying these real-world applications, students can develop a more nuanced appreciation of the subject and its potential for future innovation and improvement.` });
        return blocks;
    }

    _expandAnalysis(t, d) {
        const blocks = [];
        blocks.push({ type: 'heading', level: 2, content: `Critical Analysis` });
        blocks.push({ type: 'paragraph', content: `A critical analysis of ${t} requires examining both its strengths and limitations objectively. While the field has made remarkable progress, there remain areas where improvement is needed and questions that require further investigation. This balanced perspective is essential for a thorough academic understanding of the subject.` });
        blocks.push({ type: 'paragraph', content: d
            ? `On the positive side, ${d.applications} These achievements represent significant milestones in the development of ${t} and have contributed to meaningful improvements in related fields. The work of pioneers such as ${d.keyFigures} has established a strong foundation upon which subsequent researchers continue to build.`
            : `On the positive side, ${t} has contributed significantly to our understanding of fundamental processes and has enabled numerous practical innovations. The systematic study of this subject has yielded insights that have been applied across multiple disciplines, creating synergies that amplify the impact of individual discoveries and developments.`
        });
        blocks.push({ type: 'paragraph', content: d
            ? `However, ${d.challenges} These challenges highlight the need for continued research and innovation in the field. Addressing these limitations will require collaborative efforts from researchers, practitioners, policymakers, and the broader public. Despite these obstacles, the trajectory of progress in ${t} gives reason for optimism about future developments.`
            : `However, the field also faces significant challenges that must be addressed. These include limitations in current methodologies, gaps in our theoretical understanding, resource constraints, and the need for more inclusive and diverse perspectives. Addressing these challenges will require sustained investment in research, education, and infrastructure development.`
        });
        blocks.push({ type: 'paragraph', content: `It is also important to consider the ethical dimensions of ${t}. As the field continues to advance, questions about responsibility, equity, and sustainability become increasingly relevant. A comprehensive analysis must therefore include not only technical considerations but also the broader social and ethical implications of developments in this area.` });
        return blocks;
    }

    _expandComparison(t, d) {
        const blocks = [];
        blocks.push({ type: 'heading', level: 2, content: `Comparative Study` });
        blocks.push({ type: 'paragraph', content: `Comparing ${t} with related fields and approaches provides valuable insights into its unique characteristics and contributions. Such comparative analysis helps identify areas of overlap, potential synergies, and distinctive features that set ${t} apart from other areas of study. This perspective enriches our understanding of where ${t} fits within the broader academic and professional landscape.` });
        blocks.push({ type: 'paragraph', content: `When compared to traditional approaches, ${t} offers several distinct advantages. These include a more comprehensive framework for analysis, greater adaptability to changing circumstances, and stronger connections to practical applications. At the same time, traditional approaches may offer certain benefits in terms of simplicity, established methodologies, and well-documented track records.` });
        blocks.push({ type: 'paragraph', content: `The interplay between ${t} and related disciplines has led to the emergence of new interdisciplinary approaches that combine the strengths of multiple fields. These hybrid approaches are increasingly popular in both academic research and professional practice, as they allow for more holistic solutions to complex problems. The future development of ${t} will likely continue to be shaped by such cross-disciplinary interactions and collaborations.` });
        return blocks;
    }

    _expandCaseStudy(t, d) {
        const blocks = [];
        blocks.push({ type: 'heading', level: 2, content: `Case Study` });
        blocks.push({ type: 'paragraph', content: d
            ? `A detailed case study examining the practical implementation of ${t} concepts reveals important lessons for both researchers and practitioners. ${d.keyFacts[Math.min(3, d.keyFacts.length - 1)]} This particular example illustrates how theoretical principles translate into measurable outcomes in real-world settings and provides a model for future implementations.`
            : `A detailed case study examining the practical implementation of ${t} concepts reveals important lessons for both researchers and practitioners. By analyzing a specific instance where the principles of ${t} were applied, we can identify best practices, common pitfalls, and key success factors that are relevant to future efforts.`
        });
        blocks.push({ type: 'paragraph', content: `The case study demonstrates that successful implementation of ${t} principles requires careful planning, adequate resources, skilled personnel, and strong institutional support. It also highlights the importance of monitoring and evaluation in ensuring that desired outcomes are achieved and sustained over time. Stakeholder engagement and communication play crucial roles in the success of any initiative related to ${t}.` });
        blocks.push({ type: 'paragraph', content: `Lessons learned from this case study include the importance of adapting general principles to local contexts, the value of iterative approaches that allow for course corrections, and the need for long-term commitment to achieve lasting results. These insights are applicable not only to ${t} but to a wide range of related fields and endeavors. Future practitioners can benefit greatly from studying such examples and applying the lessons learned to their own contexts.` });
        return blocks;
    }

    _expandImplications(t, d) {
        const blocks = [];
        blocks.push({ type: 'heading', level: 2, content: `Implications and Impact` });
        blocks.push({ type: 'paragraph', content: `The implications of ${t} extend across multiple dimensions—social, economic, environmental, and technological. Understanding these implications is essential for informed decision-making at both the individual and institutional levels. The impact of ${t} on society has grown significantly in recent years, and this trend is expected to continue as the field evolves and matures.` });
        blocks.push({ type: 'paragraph', content: d
            ? `From a social perspective, ${t} has the potential to address pressing challenges such as those related to ${d.challenges.split('.')[0].toLowerCase()}. The contributions of researchers like ${d.keyFigures.split(',')[0]} have laid the groundwork for solutions that can benefit communities worldwide. Social awareness and engagement are critical for translating research findings into practical social improvements.`
            : `From a social perspective, ${t} has the potential to transform how communities function and interact. The knowledge generated through the study of ${t} can inform public policy, improve educational outcomes, and enhance the quality of life for diverse populations. Ensuring equitable access to the benefits of ${t} remains a key priority.`
        });
        blocks.push({ type: 'paragraph', content: `Economically, the development and application of ${t} principles can drive innovation, create new industries, and generate employment opportunities. Countries and organizations that invest in understanding and leveraging ${t} are likely to gain competitive advantages in the global marketplace. The economic implications underscore the importance of continued research funding and institutional support for this field.` });
        blocks.push({ type: 'paragraph', content: `Environmentally, the relationship between ${t} and sustainability is increasingly important. As global awareness of environmental issues grows, the role of ${t} in promoting sustainable practices and addressing ecological challenges becomes more prominent. Integrating environmental considerations into the study and application of ${t} is essential for ensuring long-term viability and responsible progress.` });
        return blocks;
    }

    _expandCurrentTrends(t, d) {
        const blocks = [];
        blocks.push({ type: 'heading', level: 2, content: `Current Trends and Developments` });
        blocks.push({ type: 'paragraph', content: `The field of ${t} is experiencing rapid evolution, driven by technological advances, new research findings, and changing societal needs. Staying current with these trends is essential for students, researchers, and practitioners who wish to remain at the forefront of the field. The pace of change has accelerated in recent years, making continuous learning and adaptation more important than ever before.` });
        blocks.push({ type: 'paragraph', content: d
            ? `Recent developments include advances related to ${d.keyFacts[d.keyFacts.length - 1].toLowerCase()} Technology and innovation continue to reshape the landscape of ${t}, creating new opportunities and challenges in equal measure. Digital transformation, data analytics, and global connectivity are among the key drivers of change in this field.`
            : `Recent developments in ${t} have been particularly noteworthy. Advances in technology, changes in regulatory frameworks, and shifts in public opinion have all contributed to a dynamic and evolving landscape. Researchers and practitioners must stay abreast of these changes to ensure their work remains relevant and impactful in the current environment.`
        });
        blocks.push({ type: 'paragraph', content: `Looking at global trends, there is growing recognition of the importance of ${t} across different countries and cultures. International collaboration and knowledge sharing are accelerating the pace of progress and helping to address common challenges. This global perspective enriches the field and ensures that diverse viewpoints and experiences are incorporated into the collective understanding of ${t}.` });
        blocks.push({ type: 'paragraph', content: `In educational settings, the teaching of ${t} is being transformed by new pedagogical approaches, digital tools, and experiential learning opportunities. Students today have access to a wealth of information and resources that were unavailable to previous generations, enabling deeper engagement with the subject matter and more meaningful learning experiences. These educational innovations are helping to prepare the next generation of leaders and innovators in the field.` });
        return blocks;
    }

    _expandHistorical(t, d) {
        const blocks = [];
        blocks.push({ type: 'heading', level: 2, content: `Historical Perspective` });
        blocks.push({ type: 'paragraph', content: d
            ? `The historical development of ${t} provides important context for understanding its current state and future trajectory. ${d.history} These historical milestones have shaped the direction of research and practice in the field, and continue to influence contemporary approaches to the study of ${t}.`
            : `The historical development of ${t} spans several decades and includes numerous important milestones, breakthrough discoveries, and paradigm shifts. Understanding this history is essential for appreciating the current state of the field and identifying the patterns that may guide its future evolution.`
        });
        blocks.push({ type: 'paragraph', content: `The early pioneers of ${t} faced significant challenges, including limited resources, skepticism from the broader academic community, and the absence of established methodologies. Despite these obstacles, their persistence and creativity laid the foundation for the remarkable progress that has been achieved in subsequent decades. Their legacy serves as an inspiration for current and future researchers.` });
        blocks.push({ type: 'paragraph', content: `The evolution of ${t} can be divided into several distinct phases, each characterized by different priorities, methodologies, and levels of institutional support. The transition from one phase to the next was often catalyzed by breakthrough discoveries, technological innovations, or changes in the broader social and political context. Understanding these transitions provides valuable insights into the dynamics of scientific and intellectual progress.` });
        blocks.push({ type: 'paragraph', content: `Today, the study of the history of ${t} has become an important subfield in its own right. Historians of science and technology have contributed valuable perspectives on how knowledge is produced, disseminated, and applied in different cultural and institutional contexts. These perspectives enrich our understanding of ${t} and help ensure that the lessons of the past inform the decisions of the future.` });
        return blocks;
    }

    _expandDebate(t, d) {
        const blocks = [];
        blocks.push({ type: 'heading', level: 2, content: `Debates and Perspectives` });
        blocks.push({ type: 'paragraph', content: `Like any significant field of study, ${t} is characterized by ongoing debates and diverse perspectives. These debates are a healthy sign of intellectual vitality and help ensure that the field continues to evolve and improve. Engaging with different viewpoints is an essential part of academic study and helps develop critical thinking skills that are valuable across all disciplines.` });
        blocks.push({ type: 'paragraph', content: d
            ? `One major area of debate concerns ${d.challenges.split('.')[0].toLowerCase()}. Researchers and practitioners hold varying views on how best to address this challenge, with some advocating for more aggressive intervention while others prefer a more gradual, measured approach. Both perspectives have merit, and the optimal solution likely involves elements of both strategies, adapted to specific circumstances and contexts.`
            : `One major area of debate concerns the best approach to implementing the principles of ${t} in diverse contexts. Some experts argue for standardized approaches that ensure consistency and comparability, while others advocate for more flexible, context-sensitive methods that can be adapted to local conditions. Both perspectives have valid arguments, and the optimal approach likely varies depending on specific circumstances.`
        });
        blocks.push({ type: 'paragraph', content: `Another important debate revolves around the ethical implications of advances in ${t}. As the field pushes boundaries and opens new possibilities, questions about responsibility, equity, and potential unintended consequences become increasingly pressing. Engaging with these ethical questions is not optional but rather an integral part of responsible scholarship and practice in the field of ${t}.` });
        blocks.push({ type: 'paragraph', content: `The diversity of perspectives within ${t} is ultimately a strength rather than a weakness. By encouraging open dialogue, constructive criticism, and intellectual humility, the field can continue to advance in ways that are both rigorous and responsive to the needs of society. Students should be encouraged to engage actively with these debates and to develop their own informed positions on key issues.` });
        return blocks;
    }

    _expandFuture(t, d) {
        const blocks = [];
        blocks.push({ type: 'heading', level: 2, content: `Future Prospects and Recommendations` });
        blocks.push({ type: 'paragraph', content: `The future of ${t} holds tremendous promise, with numerous exciting developments on the horizon. Advances in technology, increasing global awareness, and growing institutional support are creating conditions for unprecedented progress in the field. However, realizing this potential will require sustained commitment, strategic investment, and effective collaboration among all stakeholders.` });
        blocks.push({ type: 'paragraph', content: d
            ? `Based on current trends and the analysis presented in this assignment, several key recommendations emerge. First, investment in research and development related to ${t} should be increased to accelerate the pace of discovery and innovation. Second, educational programs should be expanded and updated to prepare students for the challenges and opportunities that lie ahead. Third, efforts should be made to address ${d.challenges.split('.')[0].toLowerCase()} through collaborative, multidisciplinary approaches.`
            : `Based on current trends and the analysis presented in this assignment, several key recommendations emerge. First, greater investment in research and education is needed to maintain momentum and ensure continued progress. Second, efforts to promote interdisciplinary collaboration should be intensified. Third, policies and frameworks should be developed to address emerging challenges and ensure that the benefits of ${t} are distributed equitably.`
        });
        blocks.push({ type: 'paragraph', content: `Additionally, it is recommended that practitioners and researchers in ${t} engage more actively with the public to build awareness, support, and understanding. Public engagement not only helps to secure the resources needed for continued progress but also ensures that the direction of the field is aligned with societal values and priorities. Effective communication is a critical skill for all professionals working in ${t}.` });
        blocks.push({ type: 'paragraph', content: `In conclusion, while significant challenges remain, the overall trajectory of ${t} is positive and encouraging. By building on the achievements of the past, learning from both successes and failures, and embracing innovation and collaboration, the field is well-positioned to make even greater contributions to human knowledge and well-being in the years and decades ahead. The students of today will be the leaders and innovators of tomorrow, and their engagement with ${t} is crucial for shaping a better future.` });
        return blocks;
    }

    /* ======== TOPIC LOOKUP ======== */
    _getData(topic) {
        const key = topic.toLowerCase().trim();
        for (const [k, v] of Object.entries(TemplateGenerator.TOPICS)) {
            if (key.includes(k) || k.includes(key)) return v;
        }
        return null;
    }
    _pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
    _introSentence(t) { return this._pick(TemplateGenerator.INTROS)(t); }
    _conclusionSentence(t) { return this._pick(TemplateGenerator.CONCLUSIONS)(t); }

    /* ======== ESSAY ======== */
    _essay(t, extra) {
        const d = this._getData(t);
        const blocks = [{ type: 'heading', level: 1, content: t }];

        // Introduction
        blocks.push({ type: 'heading', level: 2, content: 'Introduction' });
        if (d) {
            blocks.push({ type: 'paragraph', content: d.def });
            blocks.push({ type: 'paragraph', content: this._introSentence(t) + ' ' + d.history });
        } else {
            blocks.push({ type: 'paragraph', content: this._introSentence(t) });
            blocks.push({ type: 'paragraph', content: `The concept of ${t} encompasses a wide range of ideas, theories, and practical applications that have evolved significantly over time. Understanding its fundamentals is crucial for students and professionals alike.` });
        }

        // Key Concepts
        blocks.push({ type: 'heading', level: 2, content: 'Key Concepts and Principles' });
        if (d) {
            blocks.push({ type: 'paragraph', content: `Several fundamental concepts and facts form the foundation of our understanding of ${t}. The following points highlight the most important aspects:` });
            blocks.push({ type: 'list', items: d.keyFacts, ordered: false });
        } else {
            blocks.push({ type: 'paragraph', content: `${t} is built upon several core principles that guide its study and application. These concepts provide the theoretical framework necessary for deeper understanding.` });
            blocks.push({ type: 'list', items: [
                `The fundamental definition and scope of ${t} establish its boundaries as a field of study.`,
                `Key theoretical frameworks provide the basis for analysis and interpretation of ${t}.`,
                `Empirical evidence and research findings support the major claims and theories within this field.`,
                `Practical applications demonstrate the real-world relevance of ${t}.`,
                `Interdisciplinary connections link ${t} to other related fields and domains of knowledge.`,
            ], ordered: false });
        }

        // Importance and Applications
        blocks.push({ type: 'heading', level: 2, content: 'Importance and Applications' });
        if (d) {
            blocks.push({ type: 'paragraph', content: d.applications });
            blocks.push({ type: 'paragraph', content: `The study of ${t} has contributed significantly to advancements in related fields. Key figures who have shaped this area include ${d.keyFigures}. Their contributions have laid the groundwork for modern research and applications.` });
        } else {
            blocks.push({ type: 'paragraph', content: `${t} plays a crucial role in modern society, influencing various sectors including education, industry, and policy-making. Its applications extend across multiple domains, making it relevant to diverse audiences.` });
            blocks.push({ type: 'paragraph', content: `The practical significance of ${t} is evident in how it addresses real-world problems and contributes to societal progress. From academic research to everyday applications, its impact is substantial and growing.` });
        }

        // Challenges
        blocks.push({ type: 'heading', level: 2, content: 'Challenges and Future Directions' });
        if (d) {
            blocks.push({ type: 'paragraph', content: d.challenges });
            blocks.push({ type: 'paragraph', content: `Despite these challenges, the future of ${t} looks promising. Ongoing research, technological advancements, and increased awareness are driving positive developments. Addressing current limitations will be key to unlocking the full potential of this field.` });
        } else {
            blocks.push({ type: 'paragraph', content: `Like any significant area of study, ${t} faces several challenges that need to be addressed. These include theoretical limitations, practical implementation difficulties, and the need for continued research and innovation.` });
            blocks.push({ type: 'paragraph', content: `The future of ${t} depends on collaborative efforts between researchers, practitioners, and policymakers to overcome existing obstacles and explore new possibilities.` });
        }

        // Conclusion
        blocks.push({ type: 'heading', level: 2, content: 'Conclusion' });
        blocks.push({ type: 'paragraph', content: this._conclusionSentence(t) });

        return { blocks };
    }

    /* ======== REPORT ======== */
    _report(t, extra) {
        const d = this._getData(t);
        const blocks = [{ type: 'heading', level: 1, content: `Report on ${t}` }];

        blocks.push({ type: 'heading', level: 2, content: 'Abstract' });
        blocks.push({ type: 'paragraph', content: d
            ? `This report presents a comprehensive analysis of ${t}. ${d.def} The report examines key concepts, current developments, and future directions.`
            : `This report provides a detailed examination of ${t}, covering its fundamental concepts, significance, current state, and future prospects. The findings highlight both the achievements and challenges in this area.`
        });

        blocks.push({ type: 'heading', level: 2, content: 'Introduction' });
        blocks.push({ type: 'paragraph', content: d ? d.def + ' ' + d.history : this._introSentence(t) });

        blocks.push({ type: 'heading', level: 2, content: 'Methodology' });
        blocks.push({ type: 'paragraph', content: `This report is based on a review of academic literature, published research papers, textbooks, and authoritative sources on ${t}. Both qualitative and quantitative data have been analyzed to present a balanced overview.` });

        blocks.push({ type: 'heading', level: 2, content: 'Findings' });
        if (d) {
            blocks.push({ type: 'paragraph', content: `The research reveals several key findings about ${t}:` });
            blocks.push({ type: 'list', items: d.keyFacts, ordered: true });
        } else {
            blocks.push({ type: 'paragraph', content: `The analysis of ${t} reveals important patterns and insights that contribute to our understanding of the subject.` });
            blocks.push({ type: 'list', items: [
                `${t} has evolved significantly over the past few decades.`,
                `Current research indicates growing interest and investment in this area.`,
                `Practical applications are expanding across multiple sectors.`,
                `Interdisciplinary approaches are yielding valuable new insights.`,
                `Public awareness and engagement with ${t} continue to increase.`,
            ], ordered: true });
        }

        blocks.push({ type: 'heading', level: 2, content: 'Analysis and Discussion' });
        blocks.push({ type: 'paragraph', content: d
            ? d.applications + ' ' + d.challenges
            : `The findings indicate that ${t} is a dynamic and evolving field with substantial implications. The interplay between theoretical understanding and practical application continues to drive innovation.`
        });

        blocks.push({ type: 'heading', level: 2, content: 'Recommendations' });
        blocks.push({ type: 'list', items: [
            `Increase investment in research and development related to ${t}.`,
            `Develop comprehensive educational programs to improve understanding of ${t}.`,
            `Establish stronger collaboration between academic institutions and industry practitioners.`,
            `Create policies that address the current challenges and promote sustainable progress.`,
        ], ordered: true });

        blocks.push({ type: 'heading', level: 2, content: 'Conclusion' });
        blocks.push({ type: 'paragraph', content: this._conclusionSentence(t) });

        return { blocks };
    }

    /* ======== NOTES ======== */
    _notes(t, extra) {
        const d = this._getData(t);
        const blocks = [{ type: 'heading', level: 1, content: `Notes: ${t}` }];

        blocks.push({ type: 'heading', level: 2, content: 'Definition' });
        blocks.push({ type: 'paragraph', content: d ? d.def : `${t} refers to a significant area of study that encompasses various theories, principles, and practical applications.` });

        blocks.push({ type: 'heading', level: 2, content: 'Key Points' });
        if (d) {
            blocks.push({ type: 'list', items: d.keyFacts, ordered: false });
        } else {
            blocks.push({ type: 'list', items: [
                `${t} has evolved over many decades with contributions from numerous researchers and practitioners.`,
                `The core principles of ${t} provide a framework for understanding its applications and implications.`,
                `Modern developments have significantly expanded the scope and reach of ${t}.`,
                `Technology has played a key role in advancing our understanding of ${t}.`,
                `The study of ${t} requires knowledge of both theoretical concepts and practical applications.`,
                `Current trends indicate growing importance of ${t} in academic and professional settings.`,
            ], ordered: false });
        }

        blocks.push({ type: 'heading', level: 2, content: 'Historical Background' });
        blocks.push({ type: 'paragraph', content: d ? d.history : `The origins of ${t} can be traced back to foundational work by early researchers and thinkers in the field.` });

        blocks.push({ type: 'heading', level: 2, content: 'Important Facts' });
        if (d) {
            blocks.push({ type: 'list', items: [
                `Key figures: ${d.keyFigures}`,
                `Applications: ${d.applications}`,
                `Current challenges: ${d.challenges}`,
            ], ordered: true });
        } else {
            blocks.push({ type: 'list', items: [
                `${t} has practical applications in multiple fields and industries.`,
                `Research in ${t} continues to grow, with new findings published regularly.`,
                `Understanding ${t} is essential for students across various academic disciplines.`,
            ], ordered: true });
        }

        blocks.push({ type: 'heading', level: 2, content: 'Summary' });
        blocks.push({ type: 'paragraph', content: d
            ? `${t} is a fundamental topic with wide-ranging implications. Key areas include: ${d.applications} The field continues to evolve with contributions from researchers worldwide.`
            : `${t} is an important area of study with significant theoretical and practical dimensions. A thorough understanding of its key concepts, history, and current developments is essential for academic success.`
        });

        return { blocks };
    }

    /* ======== Q&A ======== */
    _qa(t, extra) {
        const d = this._getData(t);
        const blocks = [{ type: 'heading', level: 1, content: `Questions and Answers: ${t}` }];

        if (d) {
            blocks.push({ type: 'heading', level: 2, content: `Q1. What is ${t}?` });
            blocks.push({ type: 'paragraph', content: `Ans: ${d.def}` });

            blocks.push({ type: 'heading', level: 2, content: `Q2. What is the historical background of ${t}?` });
            blocks.push({ type: 'paragraph', content: `Ans: ${d.history}` });

            blocks.push({ type: 'heading', level: 2, content: `Q3. What are the key facts about ${t}?` });
            blocks.push({ type: 'paragraph', content: `Ans: ${d.keyFacts.slice(0, 4).join(' ')}` });

            blocks.push({ type: 'heading', level: 2, content: `Q4. What are the applications of ${t}?` });
            blocks.push({ type: 'paragraph', content: `Ans: ${d.applications}` });

            blocks.push({ type: 'heading', level: 2, content: `Q5. What are the challenges related to ${t}?` });
            blocks.push({ type: 'paragraph', content: `Ans: ${d.challenges}` });

            blocks.push({ type: 'heading', level: 2, content: `Q6. Who are the key figures associated with ${t}?` });
            blocks.push({ type: 'paragraph', content: `Ans: The major contributors to the field of ${t} include ${d.keyFigures}. Their work has been instrumental in advancing knowledge and understanding in this area.` });
        } else {
            blocks.push({ type: 'heading', level: 2, content: `Q1. What is ${t}?` });
            blocks.push({ type: 'paragraph', content: `Ans: ${t} is a significant area of study encompassing various theories, principles, and applications that have developed over time.` });

            blocks.push({ type: 'heading', level: 2, content: `Q2. Why is ${t} important?` });
            blocks.push({ type: 'paragraph', content: `Ans: ${t} is important because it provides valuable knowledge and understanding that can be applied across multiple fields. It influences academic research, practical applications, and policy decisions.` });

            blocks.push({ type: 'heading', level: 2, content: `Q3. What are the key features of ${t}?` });
            blocks.push({ type: 'paragraph', content: `Ans: The key features of ${t} include its foundational principles, wide-ranging applications, interdisciplinary nature, and evolving research landscape. Each aspect contributes to a comprehensive understanding of the subject.` });

            blocks.push({ type: 'heading', level: 2, content: `Q4. What are the applications of ${t}?` });
            blocks.push({ type: 'paragraph', content: `Ans: ${t} finds applications in education, research, industry, and everyday life. Its principles are applied in solving practical problems and advancing knowledge in related areas.` });

            blocks.push({ type: 'heading', level: 2, content: `Q5. What is the future scope of ${t}?` });
            blocks.push({ type: 'paragraph', content: `Ans: The future of ${t} is promising, with ongoing research and technological advancements expected to expand its scope and impact significantly in the coming years.` });
        }

        return { blocks };
    }

    /* ======== SUMMARY ======== */
    _summary(t, extra) {
        const d = this._getData(t);
        const blocks = [{ type: 'heading', level: 1, content: `Summary: ${t}` }];

        blocks.push({ type: 'paragraph', content: d ? d.def + ' ' + this._introSentence(t) : this._introSentence(t) + ` Understanding its key aspects is essential for a comprehensive overview.` });
        blocks.push({ type: 'paragraph', content: d ? d.history + ' ' + d.keyFacts.slice(0, 3).join(' ') : `The development of ${t} has been shaped by numerous contributions from researchers, practitioners, and thinkers over many years. Key milestones have defined its evolution.` });
        blocks.push({ type: 'paragraph', content: d ? d.applications + ' ' + d.challenges : `The practical applications of ${t} span across multiple domains, demonstrating its relevance in addressing real-world challenges and opportunities.` });
        blocks.push({ type: 'paragraph', content: this._conclusionSentence(t) });

        return { blocks };
    }

    /* ======== LETTER ======== */
    _letter(t, extra) {
        const blocks = [
            { type: 'heading', level: 2, content: `Subject: ${t}` },
            { type: 'paragraph', content: 'Respected Sir/Madam,' },
            { type: 'paragraph', content: `I am writing to bring to your attention the matter of ${t}. This is a subject of considerable importance that warrants careful consideration and action.` },
        ];

        const d = this._getData(t);
        if (d) {
            blocks.push({ type: 'paragraph', content: `${d.def} ${d.keyFacts[0]} ${d.keyFacts[1]}` });
            blocks.push({ type: 'paragraph', content: `${d.challenges} I believe that addressing these aspects will contribute significantly to positive outcomes.` });
        } else {
            blocks.push({ type: 'paragraph', content: `The significance of ${t} is evident in its wide-ranging impact on various aspects of our society. Understanding its implications is essential for making informed decisions and taking appropriate action.` });
            blocks.push({ type: 'paragraph', content: `I believe that increased awareness and proactive measures regarding ${t} will lead to beneficial outcomes for all stakeholders involved.` });
        }

        blocks.push({ type: 'paragraph', content: 'I request you to kindly consider this matter and take necessary action at the earliest. I would be grateful for your positive response.' });
        blocks.push({ type: 'paragraph', content: 'Thanking you,\nYours sincerely,\n[Student Name]\n[Class/Section]' });

        return { blocks };
    }

    /* ======== RESEARCH ======== */
    _research(t, extra) {
        const d = this._getData(t);
        const blocks = [{ type: 'heading', level: 1, content: `Research Project: ${t}` }];

        blocks.push({ type: 'heading', level: 2, content: 'Introduction' });
        blocks.push({ type: 'paragraph', content: d ? d.def + ' ' + d.history : this._introSentence(t) });

        blocks.push({ type: 'heading', level: 2, content: 'Objectives' });
        blocks.push({ type: 'list', items: d ? [
            `To understand the fundamental concepts and principles of ${t}.`,
            `To analyze the historical development and evolution of ${t}.`,
            `To examine real-world applications: ${d.applications.substring(0, 100)}.`,
            `To identify key challenges: ${d.challenges.substring(0, 80)}.`,
            `To explore future directions and potential advancements in ${t}.`,
        ] : [
            `To study the fundamental concepts and principles of ${t}.`,
            `To analyze its historical development and key milestones.`,
            `To examine current applications and their effectiveness.`,
            `To identify challenges and limitations in the field.`,
            `To propose recommendations for future research and development.`,
        ], ordered: true });

        blocks.push({ type: 'heading', level: 2, content: 'Literature Review' });
        blocks.push({ type: 'paragraph', content: d
            ? `A review of existing literature reveals significant contributions to the field of ${t}. Key figures include ${d.keyFigures}. ${d.keyFacts[0]} ${d.keyFacts[1]} ${d.keyFacts[2]}`
            : `A comprehensive review of existing literature reveals that ${t} has been extensively studied from multiple perspectives. Research in this area has produced valuable insights into both theoretical and practical dimensions of the subject.`
        });

        blocks.push({ type: 'heading', level: 2, content: 'Methodology' });
        blocks.push({ type: 'paragraph', content: `This research project employs a mixed-methods approach, combining secondary data analysis from published academic sources, textbooks, and authoritative reports with structured analysis of key themes within ${t}.` });

        blocks.push({ type: 'heading', level: 2, content: 'Analysis and Discussion' });
        if (d) {
            blocks.push({ type: 'paragraph', content: d.applications });
            blocks.push({ type: 'paragraph', content: d.challenges });
        } else {
            blocks.push({ type: 'paragraph', content: `The analysis reveals that ${t} has undergone significant evolution, driven by technological advancement, research breakthroughs, and changing societal needs.` });
            blocks.push({ type: 'paragraph', content: `Current trends indicate that the field is poised for further growth, with emerging technologies and interdisciplinary approaches opening new avenues for exploration.` });
        }

        blocks.push({ type: 'heading', level: 2, content: 'Conclusion' });
        blocks.push({ type: 'paragraph', content: this._conclusionSentence(t) });

        blocks.push({ type: 'heading', level: 2, content: 'References' });
        blocks.push({ type: 'list', items: d ? [
            `NCERT Textbooks — relevant chapters on ${t}`,
            `Encyclopedia Britannica — "${t}" (online edition)`,
            `Published research papers and academic journals on ${t}`,
            `Government reports and official publications related to ${t}`,
        ] : [
            `Standard textbooks on ${t}`,
            `Published academic papers and journals`,
            `Encyclopedia Britannica and other reference works`,
            `Government and institutional reports`,
        ], ordered: true });

        return { blocks };
    }

    /* ======== PRESENTATION ======== */
    _presentation(t, extra) {
        const d = this._getData(t);
        const blocks = [{ type: 'heading', level: 1, content: t }];

        // Slide 1: Introduction
        blocks.push({ type: 'heading', level: 2, content: 'Slide 1: Introduction' });
        blocks.push({ type: 'paragraph', content: d ? d.def : `${t} is a significant and multifaceted topic that has gained considerable attention in recent years.` });

        // Slide 2: Background
        blocks.push({ type: 'heading', level: 2, content: 'Slide 2: Background and History' });
        blocks.push({ type: 'paragraph', content: d ? d.history : `The study of ${t} has a rich history spanning several decades, with key contributions from researchers and practitioners worldwide.` });

        // Slide 3: Key Points
        blocks.push({ type: 'heading', level: 2, content: 'Slide 3: Key Points' });
        blocks.push({ type: 'list', items: d ? d.keyFacts.slice(0, 5) : [
            `${t} encompasses several core principles and theories.`,
            `It has significant practical applications across multiple fields.`,
            `Research continues to expand our understanding of ${t}.`,
            `Technology has played a major role in advancing this field.`,
            `Interdisciplinary approaches are yielding valuable insights.`,
        ], ordered: false });

        // Slide 4: Applications
        blocks.push({ type: 'heading', level: 2, content: 'Slide 4: Applications and Importance' });
        blocks.push({ type: 'paragraph', content: d ? d.applications : `${t} finds applications in numerous sectors, contributing to innovation, problem-solving, and knowledge advancement.` });

        // Slide 5: Challenges
        blocks.push({ type: 'heading', level: 2, content: 'Slide 5: Challenges' });
        blocks.push({ type: 'paragraph', content: d ? d.challenges : `The field faces several challenges including implementation complexities, resource constraints, and the need for continued research.` });

        // Slide 6: Conclusion
        blocks.push({ type: 'heading', level: 2, content: 'Slide 6: Conclusion' });
        blocks.push({ type: 'paragraph', content: this._conclusionSentence(t) });

        return { blocks };
    }
}
