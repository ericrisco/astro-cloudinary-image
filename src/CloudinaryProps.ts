export interface CloudinaryProps {	

	width?: string;

	height?: string;

	resize?: 
		| "crop" 
		| "fill" 
		| "scale"
		| "minimumPad"
		| "fit" 
		| "limitFit" 
		| "thumbnail" 
		| "limitFill" 
		| "minimumFit" 
		| "limitPad" 
		| "fillPad";

	gravity?: "face" | "auto";

	cornerRadius?: number | "max";

	rotate?: number;

	effects?: [ 
		| "blur"
		| "grayscale"
		| "sepia"
		| "shadow"
		| "colorize"
		| "oilPaint"
		| "cartoonify"
		| "outline"
		| "blackwhite"
		| "makeTransparent"
		| "vectorize"
		| "gradientFade"
		| "assistColorBlind"
		| "removeBackground"
		| "backgroundRemoval"
		| "dropShadow"
	]

}