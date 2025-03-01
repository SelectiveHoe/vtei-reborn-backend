import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedNewsData1718030683120 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Add 10 fake news items about VTEI
    await queryRunner.query(`
      INSERT INTO "news" (title, "richText", photos) VALUES 
      (
        'VTEI Hosts International Academic Conference',
        '<p>The Vinnytsia Institute of Trade and Economics successfully hosted an international academic conference bringing together scholars from 15 countries. The event focused on sustainable economic development and modern trade practices in a global context.</p><p>The conference featured keynote speakers from leading European universities and resulted in several partnership agreements being signed.</p>',
        ARRAY['https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80']
      ),
      (
        'VTEI Students Win National Economics Competition',
        '<p>A team of undergraduate students from VTEI has won the national economics competition held in Kyiv. The students demonstrated exceptional knowledge in macroeconomic analysis and business strategy.</p><p>The victory brings a research grant of 500,000 UAH to the institute for developing a student innovation center.</p>',
        ARRAY['https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80']
      ),
      (
        'New Innovation Lab Opened at VTEI',
        '<p>VTEI has inaugurated a state-of-the-art innovation laboratory equipped with the latest technology for business simulations and market analysis. The lab, funded by an EU educational grant, will be available to both undergraduate and graduate students.</p><p>The facility features advanced data visualization tools and AI-powered market prediction software.</p>',
        ARRAY['https://images.unsplash.com/photo-1581092921461-eab10380461b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80']
      ),
      (
        'VTEI Launches New Masters Program in Digital Economics',
        '<p>Responding to market demands, VTEI has developed and launched a new Masters program focusing on Digital Economics and E-Commerce. The program has been developed in collaboration with leading Ukrainian tech companies.</p><p>Graduates will be prepared for careers in digital transformation, fintech, and e-commerce management.</p>',
        ARRAY['https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80']
      ),
      (
        'VTEI Faculty Member Publishes Groundbreaking Research',
        '<p>Professor Olena Kovalenko from VTEI has published groundbreaking research on sustainable business models in the post-pandemic economy. The research has been featured in several international economic journals.</p><p>Her findings suggest new approaches to business resilience that have gained attention from both academic and business communities.</p>',
        ARRAY['https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80']
      ),
      (
        'Annual VTEI Job Fair Connects Students with Top Employers',
        '<p>The annual job fair at VTEI attracted over 50 leading companies from Ukraine and abroad, offering internships and job opportunities to current students and recent graduates. Companies from the finance, retail, and IT sectors were strongly represented.</p><p>This year\`s event was the largest in the institute\`s history, with over 800 students participating.</p>',
        ARRAY['https://images.unsplash.com/photo-1559644981-87e05221be25?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1560523159-6cd9d6a31d23?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80']
      ),
      (
        'VTEI Celebrates 40 Years of Excellence in Economics Education',
        '<p>VTEI marks its 40th anniversary this year with a series of events celebrating its contribution to economics education in Ukraine. Alumni from across the country returned to campus for the celebrations.</p><p>The institute announced plans for expansion and new international partnerships as part of its strategic vision for the next decade.</p>',
        ARRAY['https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80']
      ),
      (
        'VTEI Modernizes Campus Facilities',
        '<p>A major renovation project has been completed at VTEI, modernizing classrooms, library facilities, and student spaces. The project included significant technology upgrades and improved accessibility features throughout the campus.</p><p>The renovations were funded through a combination of government grants and private donations from successful alumni.</p>',
        ARRAY['https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80']
      ),
      (
        'VTEI Expands International Exchange Program',
        '<p>VTEI has significantly expanded its international exchange program, establishing new partnerships with universities in Poland, Germany, and the UK. The program will allow more students to gain valuable international experience.</p><p>Faculty exchange initiatives have also been enhanced, bringing visiting professors to Vinnytsia for guest lectures and collaborative research.</p>',
        ARRAY['https://images.unsplash.com/photo-1473186505569-9c61870c11f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80']
      ),
      (
        'VTEI Students Develop Innovative Sustainability Project',
        '<p>A group of VTEI students has developed an innovative sustainability project that addresses waste management in Vinnytsia. The project has been awarded an environmental grant and will be implemented in partnership with local authorities.</p><p>The initiative combines economic efficiency with environmental consciousness and has been praised as a model for university-community collaboration.</p>',
        ARRAY['https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80']
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remove the seeded news data
    await queryRunner.query(`DELETE FROM "news" WHERE id BETWEEN 1 AND 10`);
  }
}
