const AppComponent: ng.IComponentOptions = {
    template:
        `
            <header></header>
            <nav></nav>
            <div>
                <ui-view></ui-view>
            </div>
            <footer></footer>
        `
};

export default AppComponent;
