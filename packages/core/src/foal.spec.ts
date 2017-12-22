import { expect } from 'chai';

import { Foal } from './foal';
import { FoalModule } from './interfaces';
import { Service } from './service-manager';

describe('Foal', () => {

  describe('when it is instantiated', () => {

    @Service()
    class Foobar {
      constructor() {}
    }
    const foalModule1: FoalModule = {
      services: [ Foobar ]
    };
    const foalModule2: FoalModule = {
      services: []
    };

    it('should create an serviceManager.', () => {
      const foal1 = new Foal(foalModule1);
      expect(foal1.services).to.not.be.an('undefined');
      expect(foal1.services.get(Foobar)).to.be.instanceof(Foobar);
    });

    it('should create an serviceManager from the parentModule if it exists.', () => {
      const foal1 = new Foal(foalModule1);
      const foal2 = new Foal(foalModule2, foal1);

      expect(foal1.services).to.not.equal(foal2.services);
      expect(foal1.services.get(Foobar)).to.not.be.an('undefined');
      expect(foal2.services.get(Foobar)).to.equal(foal1.services.get(Foobar));
    });

    xit('should create lowLevelRoutes from the controller routes.', () => {

    });

    xit('should create lowLevelRoutes from the module imported.', () => {

    });

    xit('should add the module hooks to the lowLevelRoutes.', () => {
      // This test relies on the two previous tests. It's not great.

    });

  });

});
