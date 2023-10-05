const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const teamData = [
  {
    name: 'Jidan Haviar',
    role: 'Team Leader',
    image: 'jidan.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/jidan-haviar-569857270',
      instagram: 'https://www.instagram.com/jidan_haviar',
      github: 'https://github.com/jidan24'
    }
  },
  {
    name: 'Mariana Novantika Loru Koba',
    role: 'Front-End Engineer',
    image: 'tika.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/MarianaLoruKoba',
      instagram: 'https://www.instagram.com/tika01',
      github: 'https://github.com/TikaLoruKoba'
    }
  },
  {
    name: 'Humaira Asfa Revaldi',
    role: 'Front-End Engineer',
    image: 'maia.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/humairaasfa',
      instagram: 'https://www.instagram.com/mairaasfa',
      github: 'https://github.com/maiaasfa'
    }
  },
  {
    name: 'Icha Puspita Sari',
    role: 'Back-End Engineer',
    image: 'icha.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/ichapsptasari',
      instagram: 'https://www.instagram.com/ichapsptaa',
      github: 'https://github.com/IchaPuspitaSari'
    }
  },
  {
    name: 'Muhammad Arif Sofyan',
    role: 'Back-End Engineer',
    image: 'arif.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/muhammadarifsofyan',
      instagram: 'https://www.instagram.com/arifsfyn',
      github: 'https://github.com/Worewelf'
    }
  },
  {
    name: 'Hulwanul Azka Putra Pratama',
    role: 'Quality Assurance',
    image: 'azka.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/hulwanul-azka-putra-pratama-2734a5219',
      instagram: 'https://www.instagram.com/kaaz_pratma09',
      github: 'https://github.com/HulwanulAzkaP'
    }
  },
  {
    name: 'Clarisa Deswanti Sihombing',
    role: 'Quality Assurance',
    image: 'clarisa.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/clarisa-s-198077139',
      instagram: 'https://www.instagram.com/clarisa.ds',
      github: 'https://github.com/clarisads106'
    }
  }
];

async function seedTeam() {
  try {
    for (const member of teamData) {
      await prisma.team.create({
        data: {
          name: member.name,
          role: member.role,
          image: member.image,
          linkedin: member.social.linkedin,
          instagram: member.social.instagram,
          github: member.social.github
        },
      });
    }
    console.log('Data tim berhasil diimpor ke database.');
  } catch (error) {
    console.error('Gagal mengimpor data tim:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedTeam();
