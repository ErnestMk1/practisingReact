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
        country: 'Ukraine',
        city: 'Izmail',
      },
    },
    {
      id: 3,
      followed: false,
      name: 'Stas',
      status: 'drummer',
      location: {
        country: 'Ukraine',
        city: 'Odessa',
      },
    },
  ],
};

const usersReducer = (state=initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            return {
              ...user,
              followed: true,
            };
          }

          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            return {
              ...user,
              followed: false,
            };
          }

          return user;
        }),
      };
    default:
      return state;
  };
};

export const unfollowAC = (id) => ({ type: UNFOLLOW, id });

export const followAC = (id) => ({ type: FOLLOW, id });

export default usersReducer;
