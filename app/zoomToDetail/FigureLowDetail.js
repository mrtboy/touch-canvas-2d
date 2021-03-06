
var FigureLowDetail = draw2d.SetFigure.extend({

    init : function(attr)
    {
        this._super(attr);
        
        this.strokeScale = false; // scale the stroke width of the children nodes if the parent resize
        this.setKeepAspectRatio(true);
    },
    

    /** 
     * @template
     **/
    createSet : function()
    {
        this.canvas.paper.setStart();

        var halfW = this.getWidth() / 2;
        var halfH = this.getHeight() / 2;

        this.canvas.paper.rect(0, 0, this.getWidth(), this.getHeight()).attr({
            "fill" : "#f9f9f9", r:5
        });
        
        this.canvas.paper.ellipse(halfW, halfH, halfW / 10 * 6, halfH / 10 * 6).attr({
            "fill" : "black", stroke:0
        });

        return this.canvas.paper.setFinish();
    }
});
