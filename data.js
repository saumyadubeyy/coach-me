const data = [
    {
        id: 1,
        name: 'Anil K Thakur',
        branch: 'School of Physical Sciences',
        qualification: 'M.Sc, PhD Delhi University',
        designation: 'Associate Professor',
        mail: 'anil.kumar.thakur@dituniversity.edu.in',
        specialisation: 'Materials, Energy and Organic Devices',
        researchInterest: 'Organic Devices, Liquid Crystals, Photonics and nanostructures',
        image: 'https://www.dituniversity.edu.in/Uploads/faculty/15frt_10000795.jpg'
    },
    {
        id: 2,
        name: 'Ajay Kumar',
        branch: 'School of Liberal Arts & Management',
        qualification: 'MA - CCS University, M.Phil - Devi Ahilya Vishwa Vidyalaya Indore, Ph.D. - IIT Indore',
        designation: 'Assistant Professor',
        mail: 'ajaykumar@dituniversity.edu.in',
        specialisation: 'Economics',
        researchInterest: 'Climate Change',
        image: 'https://www.dituniversity.edu.in/Uploads/faculty/37frt_10000477.jpg'
    },
    {
        id: 3,
        name: 'Anshuman Das',
        branch: 'School of Engineering & Technology',
        qualification: 'M.Tech. NIT Jamshedpur, Ph.D. NIT Rourkela',
        designation: 'Assistant Professor',
        mail: ' anshuman.das@dituniversity.edu.in',
        specialisation: 'Advanced Manufacturing and Design',
        researchInterest: 'Advanced Machining, Sustainable Machining, Advanced Coating, Nano fluid, Cryogenic treatment, Optimization and Modelling.',
        image: 'https://www.dituniversity.edu.in/Uploads/faculty/49frt_10000801.jpg'
    },
    {
        id: 4,
        name: 'Anil Kumar Patil',
        branch: 'School of Engineering & Technology',
        qualification: 'M.Tech. MANIT Bhopal, Ph.D. Uttarakhand Technical University',
        designation: 'Associate Professor',
        mail: 'dr.anilpatil@dituniversity.edu.in',
        specialisation: 'Thermal Engineering',
        researchInterest: 'Heat transfer enhancement techniques in heat exchangers, heat sink, pool boiling, solar air heater, Thermal energy storage systems.',
        image: 'https://www.dituniversity.edu.in/Uploads/faculty/54frt_10000040.jpg'
    },
    {
        id: 5,
        name: 'Abhinandan Routray',
        branch: 'School of Engineering & Technology',
        qualification: 'M.Tech. KIITU, Ph.D. IIT BHU Varanasi',
        designation: 'Assistant Professor',
        mail: 'abhinandan.routray@dituniversity.edu.in',
        specialisation: 'Power Electronics & Drives',
        researchInterest: 'Electric Vehicles, Renewable Energy Integration, Optimization, Predictive Control, PV Inverters, Multilevel Inverters, Modular Multilevel Converter (MMC)',
        image: 'https://www.dituniversity.edu.in/Uploads/faculty/15frt_10000795.jpg'
    },
    {
        id: 6,
        name: 'Anurag Shrivastava',
        branch: 'School of Computing',
        qualification: 'M.Tech. RTU Kota, Ph.D. (Pursuing)',
        designation: 'Associate Professor',
        mail: 'anurag.shrivastava@dituniversity.edu.in',
        specialisation: 'Image Processing, Machine Learning',
        researchInterest: 'Image Processing, Machine Leaning, Deep Learning',
        image: 'https://www.dituniversity.edu.in/Uploads/faculty/15frt_10000795.jpg'
    },
    {
        id: 7,
        name: 'Ankit Agarwal',
        branch: 'School of Computing',
        qualification: 'M.Tech - DEI, Agra, Ph.D.(Pursuing) DITU',
        designation: 'Assistant Professor',
        mail: 'ankit.agarwal@dituniversity.edu.in',
        specialisation: 'Machine Learning',
        researchInterest: 'Artificial Intelligence, Machine Learning, Network Security, Decision-making',
        image: 'https://www.dituniversity.edu.in/Uploads/faculty/15frt_10000795.jpg'
    },
    {
        id: 8,
        name: 'Aditya Dev Mishra',
        branch: 'School of Computing',
        qualification: 'M.E. Thapar University, Ph.D (Pursuing) JM. Islamia University',
        designation: 'Assistant Professor',
        mail: 'adityadev.mishra@dituniversity.edu.in',
        specialisation: 'Computer Science & Engineering',
        researchInterest: 'Formal Methods, Information Security, Algorithm',
        image: 'https://www.dituniversity.edu.in/Uploads/faculty/15frt_10000795.jpg'
    },
    {
        id: 9,
        name: 'Arshad Husain',
        branch: 'School of Computing',
        qualification: 'M.Tech., PhD, MNNIT Allahabad',
        designation: 'Assistant Professor',
        mail: 'arshad.husain@dituniversity.edu.in',
        specialisation: 'Computer Vision and Biometrics.',
        researchInterest: '3D Vector Data Processing, Satellite Image Processing, Geographic Information System, Remote Sensing.',
        image: 'https://www.dituniversity.edu.in/Uploads/faculty/15frt_10000795.jpg'
    },
    {
        id: 10,
        name: 'Anurag Aeron',
        branch: 'School of Computing',
        qualification: 'M.E. Punjab University, Ph.D. IIT Roorkee',
        designation: 'Associate Professor',
        mail: 'anurag.aeron@dituniversity.edu.in',
        specialisation: 'Remote Sensing, GIS, Satellite Image Processing, Machine Learning, Fuzzy Logic and Genetic Algorithm, Digital Image Processing, Disaster Mitigation and Management.',
        researchInterest: 'Remote Sensing, GIS, Satellite Image Processing, Machine Learning, Fuzzy Logic and Genetic Algorithm, Artificial Intelligence, Blockchain Technology, Digital Image Processing, Disaster Mitigation and Management, Android OS, OSS, Security in IoT, Cryptography and Network Security.',
        image: 'https://www.dituniversity.edu.in/Uploads/faculty/15frt_10000795.jpg'
    },
    {
        id: 11,
        name: 'Atul Kumar Srivastava',
        branch: 'School of Computing',
        qualification: 'MCA, Ph.D. BHU',
        designation: 'Assistant Professor',
        mail: 'atul.srivastava@dituniversity.edu.in',
        specialisation: 'Artificial Intelligence, Machine learning and Robotics.',
        researchInterest: 'Social Network Analysis, Ranking Algorithms, Machine learning, Data Science.',
        image: 'https://www.dituniversity.edu.in/Uploads/faculty/15frt_10000795.jpg'
    },
    {
        id: 12,
        name: 'Ashok Kumar',
        branch: 'School of Computing',
        qualification: 'M.Tech. JRN University, Udaipur, Ph.D. C.M. Jha University',
        designation: 'Assistant Professor',
        mail: 'ashok.kumar@dituniversity.edu.in',
        specialisation: 'Advanced DBMS, ERP',
        researchInterest: 'Artificial Intelligence, Machine Learning and Robotics',
        image: 'https://www.dituniversity.edu.in/Uploads/faculty/15frt_10000795.jpg'
    },
    {
        id: 13,
        name: 'Anuj Kumar Yadav',
        branch: 'School of Computing',
        qualification: 'M.Tech BIT Mesra, Ph.D. DIT University (Thesis Submitted)',
        designation: 'Assistant Professor',
        mail: 'anuj.kumar@dituniversity.edu.in',
        specialisation: 'Security and Privacy',
        researchInterest: 'Information Security, Cloud Computing',
        image: 'https://www.dituniversity.edu.in/Uploads/faculty/15frt_10000795.jpg'
    },
    {
        id: 14,
        name: 'Ajay Narayan Shukla',
        branch: 'School of Computing',
        qualification: 'M.Tech. GBTU Lucknow, Ph.D. (Pursuing) DIT University',
        designation: 'Assistant Professor',
        mail: 'ajay.narayan.shukla@dituniversity.edu.in',
        specialisation: 'Artificial Intelligence , Machine Learning & Robotics',
        researchInterest: 'Algorithms, optimization techniques, Machine learning',
        image: 'https://www.dituniversity.edu.in/Uploads/faculty/15frt_10000795.jpg'
    },
    {
        id: 15,
        name: 'Amit Kumar Mishra',
        branch: 'School of Computing',
        qualification: 'M.Tech. UPTU Lucknow, Ph.D. Dayalbagh Educational Institute, Agra',
        designation: 'Associate Professor & Head-IT, SoC',
        mail: 'ak.mishra@dituniversity.edu.in',
        specialisation: 'Artificial Intelligence, Machine Learning and Robotics',
        researchInterest: 'Machine Learning, Information Retrieval, Text Mining, Natural Language Processing, Complex Networks, Linguistics, Sentiment analysis , Social media, and  Emotion analysis',
        image: 'https://www.dituniversity.edu.in/Uploads/faculty/15frt_10000795.jpg'
    },
    {
        id: 16,
        name: 'Amit Dua',
        branch: 'School of Computing',
        qualification: 'M Tech Uttarakhand Technical University',
        designation: 'Assistant Professor',
        mail: 'amit.dua@dituniversity.edu.in',
        specialisation: 'Artificial Intelligence , Machine Learning & RoboticsAI , DWDM, .NET , COA',
        researchInterest: 'Machine Learning , Deep learning',
        image: 'https://www.dituniversity.edu.in/Uploads/faculty/15frt_10000795.jpg'
    },
    {
        id: 17,
        name: 'Ashok Behera',
        branch: 'School of Pharmaceutical & Population Health Informatics',
        qualification: 'MS (Pharm), NIPER Kolkata, PhD Jadavpur University',
        designation: 'Assistant Professor',
        mail: 'ashok.behera@dituniversity.edu.in',
        specialisation: 'Medicinal Chemistry',
        researchInterest: 'Medicinal Chemistry, Peptidomimetics',
        image: 'https://www.dituniversity.edu.in/Uploads/faculty/15frt_10000795.jpg'
    },
    {
        id: 18,
        name: 'Amrindra Pal',
        branch: 'School of Engineering & Technology',
        qualification: 'ME Thapar University, Ph.D. DIT University',
        designation: 'Assistant Professor',
        mail: 'amrindra.pal@dituniversity.edu.in',
        specialisation: 'Photonics',
        researchInterest: 'Photonics, Plasmonics, Biosensor',
        image: 'https://www.dituniversity.edu.in/Uploads/faculty/15frt_10000795.jpg'
    },
    {
        id: 19,
        name: 'Anurag Barthwal',
        branch: 'School of Computing',
        qualification: 'M.Tech., Ph.D. Shiv Nadar University',
        designation: 'Assistant Professor',
        mail: ' anurag.barthwal@dituniversity.edu.in',
        specialisation: 'Internet of Things',
        researchInterest: 'Internet of Things, Artificial Intelligene, Data Science',
        image: 'https://www.dituniversity.edu.in/Uploads/faculty/15frt_10000795.jpg'
    },
    {
        id: 20,
        name: 'Aanchal Sharma',
        branch: 'School of Architecture & Design',
        qualification: 'B. Arch- Indian Institute of Technology Roorkee: Roorkee, Uttar Pradesh, Ph.D. IIT Roorkee',
        designation: 'Associate Professor',
        mail: 'aanchal.s@dituniversity.edu.in',
        specialisation: 'Architecture',
        researchInterest: 'Green Buildings, Climate Responsive Architectural Design, Energy Efficiency in Buildings, Sustainability in Built Environment, Indoor Thermal Comfort , Whole Building Energy Simulation, Post Occupancy Evaluation, Energy Efficient Retrofitting, Natural Ventilation, Adaptive Thermal Comfort, Impact of Land Use Land Coverage Change on Built Environment.',
        image: 'https://www.dituniversity.edu.in/Uploads/faculty/15frt_10000795.jpg'
    },
    {
        id: 21,
        name: 'Abhilasha Pathak',
        branch: 'School of Architecture & Design',
        qualification: 'M.Ekts. - Jamila Millia Islamia, Ph.D. (Pursuing) G.D. Goenka University',
        designation: 'Associate Professor',
        mail: 'abhilasha.pathak@dituniversity.edu.in',
        specialisation: 'Heritage Architecture, Seismic Data Analysis',
        researchInterest: 'Preservation, Rehabilitation, Heritage Structures & Monuments, Regression Model Analysis',
        image: 'https://www.dituniversity.edu.in/Uploads/faculty/15frt_10000795.jpg'
    },
    {
        id: 22,
        name: 'Anil Kumar',
        branch: 'School of Computing',
        qualification: 'M.Tech [Delhi College of Engineering], PhD Sikkim Manipal Institute of Technology',
        designation: 'Professor, Head-Data Science Research Group',
        mail: 'anil.kumar1@dituniversity.edu.in',
        specialisation: 'Computer Science and Engineering-Data Science, Deep Learning, Machine Learning, Artificial Intelligence, Cryptography, IOT, Image Processing',
        researchInterest: 'Data Science, Deep Learning, Machine Learning, Artificial Intelligence, Cryptography, Image Processing',
        image: 'https://www.dituniversity.edu.in/Uploads/faculty/15frt_10000795.jpg'
    },
    {
        id: 23,
        name: 'Ankita Khanna',
        branch: 'School of Physical Sciences',
        qualification: 'MSc Biotechnology, IIT ??? Roorkee IITR, PhD Biochemistry, University of Groningen, The Netherlands',
        designation: 'Assistant Professor',
        mail: 'ankita.khanna@dituniversity.edu.in',
        specialisation: 'GPCR cell signalling, Protein Engineering, Cell mo',
        researchInterest: 'Chemotaxis, GPCR signaling and protein nutraceuticals',
        image: 'https://www.dituniversity.edu.in/Uploads/faculty/15frt_10000795.jpg'
    },
    {
        id: 24,
        name: 'Ashish Ranjan Dwivedi',
        branch: 'School of Pharmaceutical and Populations Health informatics',
        qualification: 'M.Pharm. Central University of Punjab, PhD from Central University of Punjab (Pursuing)',
        designation: 'Assistant Professor',
        mail: 'ashish.ranjan.dwivedi@dituniversity.edu.in',
        specialisation: 'Medicinal Chemistry',
        researchInterest: 'Research Interest: Design and Synthesis of small heterocyclic molecules as anticancer agents',
        image: 'https://www.dituniversity.edu.in/Uploads/faculty/15frt_10000795.jpg'
    },
    {
        id: 25,
        name: 'Awadhesh Kumar Pandey',
        branch: 'School of Physical Sciences',
        qualification: 'M.Sc (Stats) B.H.U Varanasi M.Sc. (Geoinformatics) BIT MESRA, Ranchi, Ph.D. IIT (ISM), Dhanbad',
        designation: 'Assistant Professor',
        mail: 'awadhesh.k.pandey@dituniversity.edu.in',
        specialisation: 'Statistics',
        researchInterest: 'Mathematical Statistics , Survey Sampling, Statistical Inference',
        image: 'https://www.dituniversity.edu.in/Uploads/faculty/15frt_10000795.jpg'
    },
    {
        id: 26,
        name: 'Aditya Kumar Sharma',
        branch: 'School of Liberal Arts & Management',
        qualification: 'M.A. Economics and PhD Economics from B.H.U.',
        designation: 'Assistant Professor',
        mail: 'Aditya.ksharma@dituniversity.edu.in',
        specialisation: 'International Business',
        researchInterest: 'Small Business, MSMEs, Trade',
        image: 'https://www.dituniversity.edu.in/Uploads/faculty/15frt_10000795.jpg'
    },
    {
        id: 27,
        name: 'Aditi Jain',
        branch: 'School of Liberal Arts and Management- SoLAM',
        qualification: 'B.A. Hons. Psychology - University of Delhi, M.A. Psychology - Banasthali Vidyapith, UGC-NET',
        designation: 'Assistant Professor',
        mail: 'aditi.jain@dituniversity.edu.in',
        specialisation: 'Psychology',
        researchInterest: 'Cognitive psychology, Extra Sensory Perception, Indigenous psychology, Education, Expressive Arts',
        image: 'https://www.dituniversity.edu.in/Uploads/faculty/15frt_10000795.jpg'
    },
    {
        id: 28,
        name: 'Anjali Krishan Sharma',
        branch: 'School of Architecture, Planning & Design',
        qualification: 'Professor, Director',
        designation: 'Assistant Professor',
        mail: 'director.arch@dituniversity.edu.in',
        specialisation: 'Traditional Urbanism, Sustainable architecture, Ur',
        researchInterest: 'Built environments, Climate change, Energy use, passive systems, contemporary urban issues, globalisation, inter-disciplinary research.',
        image: 'https://www.dituniversity.edu.in/Uploads/faculty/15frt_10000795.jpg'
    },
    {
        id: 29,
        name: 'Amandeep Sharma',
        branch: 'School of Engineering & Technology',
        qualification: 'M.Tech. Panjab University Chandigarh, PhD from NITTTR Chandigarh (Panjab University Chandigarh)',
        designation: 'Assistant Professor',
        mail: 'amandeep.sharma@dituniversity.edu.in',
        specialisation: 'Signal Processing',
        researchInterest: 'Machine Condition Monitoring, Signal Processing, Artificial Intelligence and Machine Learning, Embedded System Design',
        image: 'https://www.dituniversity.edu.in/Uploads/faculty/15frt_10000795.jpg'
    }
]

export default data;