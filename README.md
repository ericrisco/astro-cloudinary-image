![astrocloudinary](https://user-images.githubusercontent.com/20164590/221385959-78078d28-79c3-40ec-b2c1-c4dfa01c03ad.png)

# 🚀 Astro Cloudinary Image

This [Astro](https://astro.build/) component makes it easy to wrap the Cloudinary URL Generator library to dynamically generate and optimize images from the Cloudinary service.

Pull requests and/or feature requests are very welcome!

## 🔥 Motivation

This project aims to participate in [@midudev](https://www.github.com/midudev) hackathon: [Cloudinary CloudCreate](https://cloudinary.com/blog/cloudinary-cloudcreate-tech-products-hackathon?utm_source=twitter&utm_medium=social-company&utm_campaign=1307&utm_term=194&utm_content=blog_cloudcreate_hackathon), in collaboration with [Cloudinary](https://cloudinary.com/).

## 💻 Features

Below is a short list of features that **Astro Cloudinary Image** offers.

- ✅ **Crops the image to fit the specified dimensions.**
- ✅ **Scales the image to fill the specified dimensions.**
- ✅ **Scales the image to the specified dimensions.**
- ✅ **Scales the image to fit within the specified dimensions.**
- ✅ **Generates a thumbnail of the image.**
- ✅ **Centers the image around detected faces.**
- ✅ **Automatically detects the subject of the image and centers it.**
- ✅ **Add corner radius from 1px to max (round image)**
- ✅ **Rotate the image**
- ✅ **Applies various effects to the image.**

## 🛠️ Installation

To install Astro SEO, run the following command in your terminal:

```bash
npm install astro-cloudinary-image
```

or if you use yarn:
  
```bash
yarn add astro-cloudinary-image
```

## 💻 How To Use

1. First of all you have to create a 

In any of your Astro projects, you need to create a `.env` file and add your cloud name on Cloudinary, like: 

```bash
CLOUDINARY_CLOUD_NAME=XXXXXXX
```

Where `XXXXXXX` is your cloud name. Tip: You can find your Cloudinary Cloud Name right on the main Dashboard of your account.

2. In any of your Astro pages, import `Cloudinary` and then use the component like:

```astro
---
import { Cloudinary } from 'astro-cloudinary-image';
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <title>Astro</title>
  </head>
  <body>  
    <Cloudinary 
      width="800"
      height="400"
      resize="fill"
      gravity="face"
      cornerRadius="max"
      rotate={20}
      effects={["backgroundRemoval", "sepia"]}
      alt="A sample image"
      src="cld-sample" 
      errorImage="NotFound.svg"
    />
  </body>
</html>
```
## 🗺️ Mandatory Props

1. `src: string` - The URL of the image to be displayed. This `src` can be a full image url or the Cloudinary identifier on your media library

2. `alt: string`	- The alt text for the image.

3. `errorImage: string` - A URL for a fallback image to display if the src image fails to load.

## 🗺️ Optional Props

1. `width?: string;` - Sets the width of the image. It accepts a string value that can be a number in pixels (e.g. "100", "50").

2. `height?: string;` - Sets the height of the image. It accepts a string value that can be a number in pixels (e.g. "100", "50").

3. `resize?:` - Specifies the resizing behavior of the image. It can have one of the following values:

Resize | Option	Description
------------ | ------------- 
"crop" |	Crops the image to fit the specified dimensions.
"fill" |	Scales the image to fill the specified dimensions.
"scale" |	Scales the image to the specified dimensions.
"minimumPad" |	Scales the image to fit within the specified dimensions, adding padding if necessary.
"fit" |	Scales the image to fit within the specified dimensions.
"limitFit" |	Scales the image down to fit within the specified dimensions, but doesn't scale it up.
"thumbnail" |	Generates a thumbnail of the image.
"limitFill" |	Scales the image up or down to fill the specified dimensions, but doesn't crop it.
"minimumFit" |	Scales the image up or down to fit within the specified dimensions, but doesn't scale it beyond its original size.
"limitPad" |	Scales the image down to fit within the specified dimensions, adding padding if necessary, but doesn't scale it up.
"fillPad" |	Scales the image up or down to fill the specified dimensions, adding padding if necessary.

4. `Gravity?:` - Specifies the gravity or position of the image. It can have one of the following values:

Gravity | Option	Description
------------ | ------------- 
"face" | centers the image around detected faces.
"auto" | automatically detects the subject of the image and centers it.

5. `cornerRadius?:` number | "max"; - Specifies the radius of the corners of the image. It accepts a number value that represents the radius in pixels or the string value "max" that sets the maximum possible radius.

6. `rotate?:` number; - Rotates the image by a specified angle in degrees.

7. `effects?:` - Applies various effects to the image. It can have one or more of the following values:

Effect | Option	Description
------------ | ------------- 
"blur" | blurs the image.
"grayscale" | converts the image to grayscale.
"sepia" | adds a sepia tone to the image.
"shadow" | adds a drop shadow to the image.
"colorize" | applies a color overlay to the image.
"oilPaint" | applies an oil painting effect to the image.
"cartoonify" | applies a cartoon effect to the image.
"outline" | adds an outline to the image.
"blackwhite" | converts the image to black and white.
"makeTransparent" | makes the background of the image transparent.
"vectorize" | converts the image to a vector format.
"gradientFade" | applies a gradient fade effect to the image.
"assistColorBlind" | simulates the experience of color blindness.
"backgroundRemoval" | removes the background of the image.
"dropShadow" | adds a drop shadow to the image.

__**In order to use `backgroundRemoval` you must activate `Cloudinary AI Background Removal` on Addons of your Cloudinary account. The `backgroundRemoval` must be allways the first effect**__

# ✅ Live Example

If you want to view live examples of the component, clone this repo and `npm run dev` it.

## 

If you want to report any issues or have found a missing feature, please report it on [GitHub](https://github.com/ericrisco/astro-cloudinary-image/issues)!

Good luck out there, Astronaut. 🚀

