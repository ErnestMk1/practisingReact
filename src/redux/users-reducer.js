const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

const initialState = {
  users: [
    {
      id: 1,
      followed: false,
      name: 'Nick',
      status: 'designer from San-Francisco',
      location: {
        country: 'USA',
        city: 'San-Francisco',
      },
    },
    {
      id: 2,
      followed: false,
      name: 'Angelina',
      status: 'sister of a brother',
      location: {
        country: 'Izmail',
        city: 'Ukraine',
      },
    },
    {
      id: 3,
      followed: false,
      name: 'Stas',
      status: 'drummer',
      location: {
        country: 'Odessa',
        city: 'Ukraine',
      },
    },
  ],
};

const usersReducer = (state=initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        ...state.users.followed = true,
      };
    case UNFOLLOW:
      return {
        ...state,
        ...state.users.followed = false,
      };
    default:
      return state;
  };
};

export const unfollowAC = () => ({ type: UNFOLLOW });

export const followAC = () => ({ type: FOLLOW });

export default usersReducer;
