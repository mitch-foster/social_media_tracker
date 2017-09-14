const LOG_IN_USER = 'LOG_IN_USER'

const initialState = {
  test: 'test',
  user: null,
  password: null,
  chartData: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Followers',
        data:[
          10,
          40,
          55,
          90,
          200,
          275
        ],
        backgroundColor:[
          '#1B95E0',
        ]
      }
      

    ]
    },
}

export default function reducer(state = initialState, action){
  switch (action.type) {
    case LOG_IN_USER:
      return state;
    default: 
    return state;
  } 
}

export function logInUser(user){
  console.log('action creator hit')
  return {
    type: LOG_IN_USER,
    payload: user
  }
}


