// The asterisk means that it brings in everything
import * as actions from './actions'; 

describe('Actions', () => {
  describe('#displayResults()', () => {
    it('should return object with a type of DISPLAY_RESULTS, table, and results', () => {
      const results = [];
      const table = {}
      const expected = {
        type: actions.DISPLAY_RESULTS, 
        table, 
        results
      }
      expect(actions.displayResults(table, results)).toEqual(expected);
    })
  })
})