import apiLib from './ApiLibrary';

export const userApi = {
    getUser(user) {
        console.log(user);
        return apiLib.get('/posts/1')
            .then(res => res.data);
    },

    postUser() {
        return apiLib.post('/posts/', { title: 'check me', userId: 1, body: 'bla' })
            .then(res => res.data);
    },

    updateUser() {
        return apiLib.put('/posts/1', { title: 'check me', userId: 2, body: 'bla' })
            .then(res => res.data);
    },

    deleteUser() {
        return apiLib.delete('/posts/1')
            .then(res => res.data);
    }
}

export const projectsApi = {
    getProjects() {
        return apiLib.get('/posts/1')
            .then(res => res.data);
    },

    createProject(project) {
        return apiLib.post('/projects/', { title: 'check me', userId: 1, body: 'bla' })
            .then(res => res.data);
    },

    updateProject(project) {
        return apiLib.put('/posts/1', { title: 'check me', userId: 2, body: 'bla' })
            .then(res => res.data);
    },

    deleteProject(project) {
        return apiLib.delete('/posts/1')
            .then(res => res.data);
    }
}