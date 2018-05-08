import * as APIClient from '../clients/apiClient';

describe('Bank API',() => {

    beforeEach(() => {
        let apiClient = new APIClient.APIClient();
        let clientInstance = apiClient.getAPIInstance();
    });
    
    it('should return successful repsonse for valid details',async () => {
            
    })
});