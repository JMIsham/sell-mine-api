import adsService from '../../src/services/ads.service.mjs';
import getConnection from '../../src/services/db.service.mjs';
import sinon from 'sinon';
import { expect } from 'chai';
// const getConnection = db.getConnection;

describe('getAds', () => {
  it('should return all ads', async () => {
    const mockClient = {
        query: sinon.stub().yields(null, { rows: [{ id: 1, name: 'Ad1' }, { id: 2, name: 'Ad2' }] }),
        release: sinon.stub(),
      };
    sinon.stub(getConnection).yields(null, mockClient);

    const ads = await adsService.getAds();

    expect(getConnection.default.called).to.be.true;
    expect(mockClient.query.calledWith('SELECT * FROM ads')).to.be.true;
    expect(mockClient.release.called).to.be.true;
    expect(ads).to.deep.equal([{ id: 1, name: 'Ad1' }, { id: 2, name: 'Ad2' }]);

    getConnection.default.restore();
  });
});

    