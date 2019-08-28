const MenuController = require("../controllers/MenuController");

    describe("MenuController", () => {
       beforeEach(() => {
        this.menu = new MenuController();
      });
      
     //assignment test
    describe("#remindMe()", ()=>{
      it("should return 'learning is a life-long pursuit'", ()=>{
        expect(this.menu.remindMe()).toBe("learning is a life-long pursuit");
     })
    });
  });
