import reducer from '../store/userreducer';
import * as actionTypes from '../store/action';

describe('todos reducer', () => {
    if (actionTypes.USERDATALOADING) {
        it('should return the initial state', () => {
            expect(reducer(undefined, {})).toEqual(
                {
                    loading: false,
                    userdata: [],
                    error: { isError: false, errorData: undefined }
                }
            )
        })
    }
})
