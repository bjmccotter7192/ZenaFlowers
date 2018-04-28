var flowerPic = require('../models/flowerPic');

exports.getFlowerPics = () => {
    let flower1 = new flowerPic;
    flower1.Id = "Z1";
    flower1.Description = "Lillies and Roses";
    flower1.Dimensions = "(20) 1/2 x 22"
    flower1.Url = "../../assets/images/actualFlowers/zenaFlower1.jpg";
    flower1.Price = 65.00;

    let flower2 = new flowerPic;
    flower2.Id = "Z2";
    flower2.Description = "Spring Flowers";
    flower2.Dimensions = "Upon Request"
    flower2.Url = "../../assets/images/actualFlowers/zenaFlower2.jpg";
    flower2.Price = 55.00;

    let flower3 = new flowerPic;
    flower3.Id = "Z3";
    flower3.Description = "Varies on Request";
    flower3.Dimensions = "(12) 1/2 x 17"
    flower3.Url = "../../assets/images/actualFlowers/zenaFlower3.jpg";
    flower3.Price = 40.00;

    let flower4 = new flowerPic;
    flower4.Id = "Z4";
    flower4.Description = "Varies on Request";
    flower4.Dimensions = "15 x 9";
    flower4.Url = "../../assets/images/actualFlowers/zenaFlower4.jpg";
    flower4.Price = 25.00;

    let flower5 = new flowerPic;
    flower5.Id = "Z5";
    flower5.Description = "Orchads and Roses";
    flower5.Dimensions = "Upon Request";
    flower5.Url = "../../assets/images/actualFlowers/zenaFlower5.jpg";
    flower5.Price = 45.00;

    let flower6 = new flowerPic;
    flower6.Id = "Z6";
    flower6.Description = "Varies on Request";
    flower6.Dimensions = "(32) 1/2 x 20";

    flower6.Url = "../../assets/images/actualFlowers/zenaFlower6.jpg";
    flower6.Price = 85.00;

    let flower7 = new flowerPic;
    flower7.Id = "Z7";
    flower7.Description = "Varies on Request";
    flower7.Dimensions = "Upon Request";
    flower7.Url = "../../assets/images/actualFlowers/zenaFlower7.jpg";
    flower7.Price = 15.00;

    let flower8 = new flowerPic;
    flower8.Id = "Z8";
    flower8.Description = "Roses, Sunflower, Carnations, and Hydrangeas";
    flower8.Dimensions = "Upon Request";
    flower8.Url = "../../assets/images/actualFlowers/zenaFlower9.jpg";
    flower8.Price = 250.00;

    let flower9 = new flowerPic;
    flower9.Id = "Z9";
    flower9.Description = "Roses In A Tall Vase";
    flower9.Dimensions = "Upon Request";
    flower9.Url = "../../assets/images/actualFlowers/zenaFlower10.jpg";
    flower9.Price = 55.00;

    let flower10 = new flowerPic;
    flower10.Id = "Z10";
    flower10.Description = "Varies on Request";
    flower10.Dimensions = "Upon Request";
    flower10.Url = "../../assets/images/actualFlowers/zenaFlower11.jpg";
    flower10.Price = 225.00;

    let flower11 = new flowerPic;
    flower11.Id = "Z11";
    flower11.Description = "Roses, Hydrangeas, and Lillies";
    flower11.Dimensions = "Upon Request";
    flower11.Url = "../../assets/images/actualFlowers/zenaFlower12.jpg";
    flower11.Price = 155.00;

    let flower12 = new flowerPic;
    flower12.Id = "Z12";
    flower12.Description = "Roses and Hydrangeas 2 For 35";
    flower12.Dimensions = "Upon Request";
    flower12.Url = "../../assets/images/actualFlowers/zenaFlower13.jpg";
    flower12.Price = 40;

    let flower13 = new flowerPic;
    flower13.Id = "Z13"
    flower13.Description = "Roses and Hydrangeas  2 For 35";
    flower13.Dimensions = "Upon Request";
    flower13.Url = "../../assets/images/actualFlowers/zenaFlower14.jpg";
    flower13.Price = 40;

    let flower14 = new flowerPic;
    flower14.Id = "Z14";
    flower14.Description = "Brides Maids Bouquet";
    flower14.Dimensions = "Upon Request";

    flower14.Url = "../../assets/images/actualFlowers/zenaFlower15.jpg";
    flower14.Price = 40.00;

    let flower15 = new flowerPic;
    flower15.Id = "Z15";
    flower15.Description = "Valentines Red Roses/Baby";
    flower15.Dimensions = "Upon Request";
    flower15.Url = "../../assets/images/actualFlowers/zenaFlower16.jpg";
    flower15.Price = 30.00;

    let flower16 = new flowerPic;
    flower16.Id = "Z16";
    flower16.Description = "Varies on Request";
    flower16.Dimensions = "Upon Request";
    flower16.Url = "../../assets/images/actualFlowers/zenaFlower17.jpg";
    flower16.Price = 0.00;

    let flower17 = new flowerPic;
    flower17.Id = "Z17";
    flower17.Description = "Available Upon Request";
    flower17.Dimensions = "Upon Request";
    flower17.Url = "../../assets/images/actualFlowers/zenaFlower18.jpg";
    flower17.Price = 150.00;

    let flower18 = new flowerPic;
    flower18.Id = "Z18";
    flower18.Description = "Spring Flowers";
    flower18.Dimensions = "8 x 6";
    flower18.Url = "../../assets/images/actualFlowers/zenaFlower20.jpg";
    flower18.Price = 20.00;

    let flower19 = new flowerPic;
    flower19.Id = "Z19";
    flower19.Description = "Varies on Request";
    flower19.Dimensions = "18 x 19";
    flower19.Url = "../../assets/images/actualFlowers/zenaFlower21.jpg";
    flower19.Price = 75.00;

    let flower20 = new flowerPic;
    flower20.Id = "Z20";
    flower20.Description = "Orchids and Lilies";
    flower20.Dimensions = "24 x 21";
    flower20.Url = "../../assets/images/actualFlowers/zenaFlower22.jpg";
    flower20.Price = 95.00;

    return [ 
            flower1, flower2, flower3, flower4, flower5, 
            flower6, flower7, flower8, flower9, flower10,
            flower11, flower12, flower13, flower14, flower15, 
            flower16, flower17, flower18, flower19, flower20
        ];
}