export const initialState = {
    dataLoaded: false,
    homeData: null,
    homeSocial: null,
    about: null,
    aboutInfo: null,
    footer: null,
    projectsProject: null,
    qualificationEducation: null,
    qualificationAchievement: null,
    skills: null,
    theme: null,
};

export function reducer(state, action) {
    switch (action.type) {
        case "SET_DATA":
            return {
                ...state,
                dataLoaded: true,
                homeData: action.payload.homeData,
                homeSocial: action.payload.homeSocial,
                about: action.payload.about,
                aboutInfo: action.payload.aboutInfo,
                footer: action.payload.footer,
                projectsProject: action.payload.projectsProject,
                qualificationEducation: action.payload.qualificationEducation,
                qualificationAchievement: action.payload.qualificationAchievement,
                skills: action.payload.skills,
                theme: action.payload.theme,
            };
        default:
            throw new Error('Unknown action type');
    }
}
