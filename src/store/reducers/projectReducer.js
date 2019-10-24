const initState = {
    projects: [
        {id: '1', title: 'React', content: 'cool'},
        {id: '2', title: 'Vue', content: 'nice'},
        {id: '3', title: 'Angular', content: 'bad'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;