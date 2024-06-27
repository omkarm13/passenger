const Listing = require("../models/listing.js");

module.exports.indexListing = async(req, res, next)=>{

    if(req.query.search && req.query.search.length>0){
    let searchQ = req.query.search;
    let searchListings = await Listing.find({country: `${searchQ}`}).collation({ locale: 'en', strength: 2 });

    if(searchListings.length == 0){
        req.flash("error", "Listing does not exist for this Country!");
        return res.redirect("/listings");
    }
    return res.render("listings/search.ejs", {searchListings, searchQ});
    }else{
    const allListings = await Listing.find();
    res.render("listings/index.ejs", {allListings});
}
};

module.exports.newListing = (req, res)=>{
    res.render("listings/new.ejs");
};

module.exports.createListing = async(req, res, next)=>{
    
    let newListing = new Listing(req.body);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
};

module.exports.showListing = async(req, res)=>{

    let {id} = req.params;
    const listing = await Listing.findById(id).populate({path: "reviews", populate: {path: "author"},}).populate("owner");
    
    if(!listing){
        req.flash("error", "Listing does not exist!");
        return res.redirect("/listings");
    };
    res.render("listings/show.ejs", {listing});
};

module.exports.editListing = async(req, res, next)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    
    if(!listing){
        req.flash("error", "Listing does not exist!");
        return res.redirect("/listings");
    };
    res.render("listings/edit.ejs", {listing});
};

module.exports.updateListing = async(req, res, next)=>{

    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body});

    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async(req, res)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    console.log("deleted");
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
};
