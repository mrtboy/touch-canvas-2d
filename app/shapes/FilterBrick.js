
flow.FilterBrick = draw2d.shape.basic.Polygon.extend({

  init : function(attr)
  {
      this._super($.extend({bgColor:"#bcc4be",color:"#1B1B1B"},attr));
      
      this.resetVertices();
      
      var box = this.getBoundingBox();
      
      this.addVertex(0, 0);     // Go to the top center..
      this.addVertex(box.w*2, box.w/2); // ...draw line to the right bottom
      this.addVertex(0, box.w);     // Go to the top center..

      console.log(box)
      // it is not necessary to close the path. A Polygon is always closed by definition.
      // (Use a Polyline if you need an open path)
      //        this.addVertex(box.w/2 , 0);     // and close the path
      
      
      // override the selection handler from the polygon. Because the vertices of 
      // the triangle are not selectable and modifiable
      //
      this.installEditPolicy(new draw2d.policy.figure.RectangleSelectionFeedbackPolicy());
      this.createPort("output");
      this.createPort("input");
      this.createPort("input");

      this.setPosition(box.getTopLeft());
      
      flow.myPolicy.shapeFeedback(this);
      this.label = new flow.Label(this);

  }

});
