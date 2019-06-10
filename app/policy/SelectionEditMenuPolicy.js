
var SelectionEditMenuPolicy = draw2d.policy.figure.SelectionPolicy.extend({
	NAME: "SelectionMenuPolicy",

    init : function(attr, setter, getter)
    {
		this.overlay = null; // div DOM node

        this._super(attr, setter, getter);
    },

	/**
	 * @method
	 *
	 * @template
	 * @param {draw2d.Canvas} canvas the related canvas
	 * @param {draw2d.Figure} figure the selected figure
	 * @param {boolean} isPrimarySelection
	 */
	onSelect: function(canvas, figure, isPrimarySelection)
	{
		this._super(canvas, figure, isPrimarySelection);

		if (this.overlay === null) {
			this.overlay= $("<div class='edit material-icons'>edit</div>");
			$("body").append(this.overlay);
			this.overlay.on("click",function(){

			figure.label.editor.start(figure.label)
				
			})
		}
		this.posOverlay(figure);
	},


	/**
	 * @method
	 *
	 * @param {draw2d.Canvas} canvas the related canvas
	 * @param {draw2d.Figure} figure the unselected figure
	 */
	onUnselect: function(canvas, figure )
	{
		this._super(canvas, figure);

		this.overlay.remove();
		this.overlay=null;
	},


    onDrag: function(canvas, figure)
	{
		this._super(canvas, figure);
		this.posOverlay(figure);
	},

	posOverlay:function(figure)
	{
		this.overlay.css({
			"top":figure.getAbsoluteY() + 60,
			"left":figure.getAbsoluteX() + 240
		});
	}
});
