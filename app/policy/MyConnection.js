flow.MyConnection= draw2d.Connection.extend({

    init:function(attr)
    {
        this._super(attr);

        this.setRouter(new draw2d.layout.connection.CircuitConnectionRouter());
        this.setOutlineColor("#303030");
        this.setStroke(3);
        this.setColor('#00A8F0');
        this.setRadius(20);

        this.addCssClass('connection')
        // console.log(this.getCssClass())
    },

    // onClick:function(e) {
    //     if(this.isSelected()) {
    //         this.setStroke(6);
    //     }
    // },
    
    /**
     * @method
     * called by the framework if the figure should show the contextmenu.</br>
     * The strategy to show the context menu depends on the plattform. Either loooong press or
     * right click with the mouse.
     *
     * @param {Number} x the x-coordinate to show the menu
     * @param {Number} y the y-coordinate to show the menu
     * @since 1.1.0
     */
    onContextMenu:function(x,y){

        $.contextMenu({
            selector: 'body',
            events:
            {
                hide:function(){ $.contextMenu( 'destroy' ); }
            },
            callback: function(key, options)
            {
               switch(key){
               case "red":
                   this.setColor('#f3546a');
                   break;
               case "green":
                   this.setColor('#b9dd69');
                   break;
               case "blue":
                   this.setColor('#00A8F0');
                   break;
               case "delete":
                   // without undo/redo support
              //     this.getCanvas().remove(this);

                   // with undo/redo support
                   var cmd = new draw2d.command.CommandDelete(this);
                   this.getCanvas().getCommandStack().execute(cmd);
               default:
                   break;
               }

            }.bind(this),
            x:x,
            y:y,
            items:
            {
                "red":    {name: "Red"},
                "green":  {name: "Green"},
                "blue":   {name: "Blue"},
                "sep1":   "---------",
                "delete": {name: "Delete"}
            }
        });

   }

});
