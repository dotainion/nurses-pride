export const routes = {
    error: () => new (class{
        prefix = '/error/';
        authenticated = () => this.prefix + 'authentication';
    }),
    wizard: () => new (class{
        prefix = '/wizard/profile/';
        basicInformation = () => this.prefix + 'information';
        professional = () => this.prefix + 'professionals';
        skills = () => this.prefix + 'skills';
        documents = () => this.prefix + 'documents';
        workPreferences = () => this.prefix + 'work/preferences';
        location = () => this.prefix + 'location';
    }),
    public: () => new (class{
        prefix = '/nurses/pride/';
        register = () => this.prefix + 'choose/account/type';
        signin = () => this.prefix + 'signin';
        home = () => this.prefix + 'home';
        about = () => this.prefix + 'aboutus';
        article = () => this.prefix + 'article';
        articles = () => this.prefix + 'articles';
        adminArticles = () => this.prefix + 'create/articles';
        healthProfessionals = () => this.prefix + 'health/professionals'
    }),
    main: () => new (class{
        prefix = '/nurses/pride/';
        dashboard = () => this.prefix + 'dashboard';
        bookAppointment = () => this.prefix + 'book/appointment';
        viewNurses = () => this.prefix + 'view/nurses';
        jobSearch = () => this.prefix + 'job/search';
        workerSearch = () => this.prefix + 'worker/search';
        signOut = () => this.prefix + 'logout';
    })
}
