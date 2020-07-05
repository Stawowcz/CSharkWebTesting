describe("visitMainCshark", function() {

    beforeEach(() => {
        cy.visitCsharkWebside()
      })
    it('mainValiation', function() {
        cy.contains("We can support you with").should('be.visible')
    })
    it('getHome', function() {
        cy.get('[id = "menu-item-31"]').click({force: true})
        cy.contains("9 Common Project Management Challenges in Software Development").should("be.visible")
    })
    it('getServices', function() {
        cy.get('[href="https://cshark.com/software-development/"]:eq(0)').click({force: true})
        cy.url().should('include', "software-development" )
        cy.contains('We offer').should('be.visible') 
        cy.contains('CSHARK teams').should('be.visible')
        cy.contains('Core programming technologies that we use').should('be.visible')
        cy.contains(".NET").should('be.visible')
        cy.contains("GOLANG").should('be.visible')
    })  

    it('getProjects', function() {
        cy.get('[href="https://cshark.com/projects/"]:eq(0)').click({force: true})
        cy.url().should('include', "projects" )
        cy.contains("Software development projects")
        // cy.get(".row-projects-rwd > .card-col:eq:(12)")
        cy.get('.row-projects-rwd > .card-col:eq(15)').then(function(dropdownEle){
            cy.log(dropdownEle.text());
            expect(dropdownEle.text()).to.include("PLACE FOR YOUR PROJECTDon't")
        })
        
        cy.get('.row-projects-rwd').then(function(dropdownEle){
            cy.log(dropdownEle.length);
        })
        cy.get('.row-projects-rwd > .card-col:eq(1)').then(function(element){
            cy.log(element.text())
            expect(element.text()).to.include('Internet of ')
        })
        
        cy.get('.row-projects-rwd > .card-col:eq(2)').then(function(element){
            cy.log(element.text)
            expect(element.text()).to.include('REGTECH SYSTEM DEVELOPMENT')
        
        cy.get('.row-projects-rwd > .card-col:eq(2) > .card-box > .card-wrapper > .card-title').then(function(element){
            cy.log(element.text())
            expect(element.text()).to.equal("FINTECH AND REGTECH SYSTEM DEVELOPMENT")
            })
        })
    })

    it('getAboutus', function() {
        cy.get('[href="https://cshark.com/about-us/"]:eq(0)').click({force: true})
        cy.get('.slide > .background > img').should("have.attr", 'src', 'https://cshark.com/wp-content/uploads/2020/04/slider-about.jpg')
        cy.get(".circle-container").then(function(element) {
            expect(element).to.exist
        })
        cy.get(".circle-container > .circle:eq(0) > .title").then(function(element){
            expect(element.text()).to.equal(" our mission")
        })
        cy.get(".circle-container > .circle:eq(0) > .title").should(($element) => {
            expect($element.text()).to.equal(" our mission")
        })
        cy.get(".circle-container > .circle > .title:eq(1)").should(($element) => {
            expect($element.text()).to.equal(" our vision")
        })
        cy.get(".circle-container > .circle > .text:eq(0)").should(($element) => {
            expect($element.text()).to.include("We increase the profitability of enterprises.")
        })
        cy.get(".circle-container > .circle > .text:eq(1)").then((element) => {
            expect(element.text()).to.include("We know that technology is the future.")
        })

        // cy.get(".container-fluid > .image-wrapper-limit > .image-wrapper")
        cy.get('div.row.justify-content-center >\
         div > div > div:nth-child(1) > div.name').then(function(element) {
             expect(element.text()).to.equal(" Marcin Krok")
         })
         cy.get('div.row.justify-content-center >\
         div > div > div:nth-child(1) > div.text--urw').then(function(element) {
             expect(element.text()).to.equal(" Co-Founder & Board Member")
         })
         cy.get('div.row.justify-content-center >\
         div > div > div:nth-child(1) > div.image-wrapper-limit > div.image-wrapper >img').should("have.attr", 'src', 'https://cshark.com/wp-content/uploads/2020/04/marcin_krok_cshark1.jpg')
         cy.get('div.row.justify-content-center >\
         div > div > div:nth-child(1) > a').should("have.attr", 'href', 'https://www.linkedin.com/in/marcin-krok-0868a44')
    })

    it('getPartners', function() {
        cy.get('[href="https://cshark.com/partners/"]:eq(0)').click({force: true})
        cy.url().should('include', "partners" )
        // cy.get('.container-fluid > div:eq(1) > div:eq(2)')
        cy.get('.card-box > .pretitle:eq(0)').then(function(element){
            cy.log(element.text())
            expect(element.text()).to.equal(' GAMING')
        })
        cy.get('.card-box > .pretitle:eq(1)').then(function(element){
            cy.log(element.text())
            expect(element.text()).to.equal(' robotics')
        })
        cy.get('.card-box > .pretitle:eq(2)').then(function(element){
            cy.log(element.text())
            expect(element.text()).to.equal(' digital transformation')
        })
        cy.get('.card-box > .pretitle:eq(3)').then(function(element){
            cy.log(element.text())
            expect(element.text()).to.equal(' automotive')
        })
        cy.get('.card-box > .pretitle:eq(4)').then(function(element){
            cy.log(element.text())
            expect(element.text()).to.equal(' Organizations')
        })
        cy.get('.card-box > .pretitle:eq(5)').then(function(element){
            cy.log(element.text())
            expect(element.text()).to.equal(' Organizations')
        })  
    })

    it('getPartners', function() {
        cy.get('[href="https://cshark.com/blog/"]:eq(0)').click({force: true})
        cy.url().should('include', 'blog')
        cy.title('title').should('contain', 'Software Development, Product Design, and Business - Blog - CSHARK')
        cy.get(".section-title").invoke('text').should('eq', 'Mint Blog')
        cy.get('[src="https://cshark.com/wp-content/uploads/2020/06/cshark_blog_project-management-challenges_cover-992x558.jpg"]').should('be.visible')
        cy.get('[href="https://cshark.com/blog/"]').invoke('text').should('eq','BlogAll postsBlog')
        cy.get('[href="https://cshark.com/category/business/"]').then((element) =>{
            cy.log(element.text())    
            expect(element.text()).to.equal('Business')
        })
        cy.get('[href="https://cshark.com/category/case-studies/"]').then(function(element){
            expect(element.text()).to.equal('Case Studies')
        })
        cy.get('[href="https://cshark.com/category/news/"]').then(function(element){
            cy.log(element.text())
            expect(element.text()).to.equal('News')
        })
        cy.get('[href="https://cshark.com/category/product-design/"]').should(function(element) {
            expect(element.text()).to.include("Product Design")
        })
        cy.get('[href="https://cshark.com/category/project-management/"]').should((element) => {
            expect(element.text()).to.include("Project Management")
        })
        cy.get('[href="https://cshark.com/category/software-development/"]').should(function(element) {
            expect(element.text()).to.include("Software Development")
        })
    })
    it('getNews-resources', function() {
        cy.get('[href="https://cshark.com/news-resources/"]:eq(0)').click({force: true})
        cy.url().should('include', 'news-resources')
        cy.title('title').should('contain', 'Be Up-To-Date with Our Latest News & Resources - CSHARK')
        cy.get('[href="#resources"]').click()
        cy.url().should('include', '#resources')
        cy.get('[href="#meetups"]').click()
        cy.url().should('include', '#meetups')
        cy.get('[href="#meetups"]').click()
        cy.url().should('include', '#meetups')
        cy.get('[href="#news"]').click()
        cy.url().should('include', '#news')
        cy.get('.linkedin >g >g').should('have.attr', 'clip-path', 'url(#clip-C3715BE4-F3E7-5055-9E42-28A96E5583D4)')
        cy.get('.twitter > g > g').then(function(element){
            expect(element).to.have.css('clip-path', 'url("#clip-2E0C84D0-6B28-7893-252A-03A70C9F4856")')
        })
        cy.get('.fb >g >g').then((element) => {
            expect(element).to.have.attr('clip-path', 'url(#clip-F6FC9AF8-A368-A935-7A91-3C2B78FFE70B)')
        })
        cy.get('.instagram >g >g').then((element) => {
            expect(element).to.have.css('clip-path', 'url("#clip-C97A7A5F-94B3-ABBF-D6DA-DD0FFC8A3B2A")')
        })
        
    })
    it('carrier', function() {
        cy.get('[href="https://cshark.com/career/"]:eq(0)').click({force: true})
        cy.url().should('include', 'career')
        cy.get('.d-sm-block').should('have.attr', 'src', "https://cshark.com/wp-content/uploads/2020/04/slider_cshark_career.jpg")
        cy.get('.container-fluid >div >h1 >div').invoke('text').should('eq', ' LOOKINGFORNEWCHALLENGES?JOINUS!')
        cy.get('#office-select').select('14')
        cy.get('#office-select').select('All offices')
        cy.get('#office-select').select('15')
        cy.get('#office-select').select('16')
        cy.get('#types-select').select('All types')
        cy.get('#types-select').select('11')
        cy.get('#types-select').select('Software development')
        cy.get('input[type=checkbox]').check({force: true})
        cy.get('.checkbox').invoke('text').should('eq', '  Possible remote work ')

        cy.get('#panel-22-0-0-2 >div >div >div >.justify-content-center >div >div >div >div:eq(0)').invoke('text').should('eq', "1")
        cy.get('#panel-22-0-0-2 >div >div >div >.justify-content-center >div >div >div >img').should('have.attr', 'src',"https://cshark.com/wp-content/uploads/2020/03/1st_step-v2.svg")
        cy.get('#panel-22-0-0-2 >div >div >div >.justify-content-center >div >div >div >div:eq(1)').invoke('text').should('eq', "2")
        cy.get('#panel-22-0-0-2 >div >div >div >.justify-content-center >div >div >div >img:eq(1)').should('have.attr', 'src', "https://cshark.com/wp-content/uploads/2020/03/2nd_step-v2.svg")
        cy.get('#panel-22-0-0-2 >div >div >div >.justify-content-center >div >div >div >div:eq(2)').invoke('text').should('eq', "3")
        cy.get('#panel-22-0-0-2 >div >div >div >.justify-content-center >div >div >div >img:eq(2)').should('have.attr', 'src', "https://cshark.com/wp-content/uploads/2020/03/2nd_step_copy-v2.svg")

        cy.get('#panel-22-0-0-5 >div >div >div >.justify-content-center >div >div >div:eq() >div:eq(2)').invoke('text').should('eq', ' IT Recruitment Lead')
        cy.get('#panel-22-0-0-5 >div >div >div >.justify-content-center >div >div >div:eq(1) >div:eq(2)').invoke('text').should('eq', ' IT Recruitment Specialist')
        cy.get('#panel-22-0-0-5 >div >div >div >.justify-content-center >div >div >div:eq(2) >div:eq(2)').invoke('text').should('eq', ' Junior IT Recruitment Specialist')
    })

    it('carrierSlider', function() {
        cy.get('[href="https://cshark.com/career/"]:eq(0)').click({force: true})

        cy.get('.container-fluid-custom >div >div >div >div >div >div:eq(0)').should('have.attr', 'class', 'circle is-selected' )
        for (let i=0; i<10; i++){
            cy.get('[aria-label="Previous"]').click()
        }
        cy.get('.container-fluid-custom >div >div >div >div >div >div:eq(0)').should('have.attr', 'class', 'circle is-selected' )
        for (let i=0; i<10; i++){
            cy.get('[aria-label="Next"]').click()
        }
        cy.get('.container-fluid-custom >div >div >div >div >div >div:eq(0)').should('have.attr', 'class', 'circle is-selected' )
        for (let i=0; i<3; i++){
            cy.get('[aria-label="Previous"]').click()
        }
        cy.get('.container-fluid-custom >div >div >div >div >div >div:eq(0)').should('have.attr', 'class', 'circle')
        for (let i=0; i<2; i++){
            cy.get('[aria-label="Next"]').click()
        }
        cy.get('.container-fluid-custom >div >div >div >div >div >div:eq(0)').should('have.attr', 'class', 'circle')
        cy.get('[aria-label="Next"]').click()
        cy.get('.container-fluid-custom >div >div >div >div >div >div:eq(0)').should('have.attr', 'class', 'circle is-selected')
    })

    it.only('carrierSlider', function() {
        cy.get('[href="https://cshark.com/contact/"]:eq(0)').click({force: true})
        cy.url().should('include', 'contact')
        cy.title('title').should('contain', 'Software Development & Product Design Services - Contact Us - CSHARK')
        cy.get(".wpcf7-form-control-wrap:eq(0)").type("Emil")
        cy.get('input[type=email]:eq(0)').type('emil@gmail.com')
        cy.get('input[type=tel]:eq(0)').type('1111111111')
        cy.get('textarea[name="message"]:eq(0)').type('cos tam costam')
        cy.get('input[type="checkbox"]:eq(0)').check()
        cy.contains("Canada")
        cy.contains("Germany")
        cy.contains("BIELSKO-BIAŁA OFFICE")
        cy.contains("KATOWICE OFFICE")
        cy.contains("WROCŁAW HEADQUARTERS")
    })




})