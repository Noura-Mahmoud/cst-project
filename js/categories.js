
let categories = [];
let submitNewCategory;
let togCategoryBtn;
// let categories = [{"newTaskCategory":"school", "color":"red"}];

function initCategories(){
    console.log("init");
    document.getElementById("category").style.display = "none";
    
    submitNewCategory = document.getElementById("submitNewCategoryBtn");
    submitNewCategory.addEventListener("click",addNewCategory);
    togCategoryBtn = document.getElementById("popUpBtn");
    togCategoryBtn.addEventListener("click", toggleCategoryBtn);

    let searchCategories = document.getElementById("categoryFilterSelect");

    let option = document.createElement("option");
    option.value = "none";
    option.text = "No filter";
    option.selected = true;

    searchCategories.appendChild(option.cloneNode(true));
}


function toggleCategoryBtn()
{
    if (togCategoryBtn.value == 'Add new category')
    {
        togCategoryBtn.value = 'close';
        showNewCategoryDiv();
    }
    else if (togCategoryBtn.value == 'close')
    {
        togCategoryBtn.value = 'Add new category';
        hideNewCategoryDiv();
    }
}

function showNewCategoryDiv()
{
    document.getElementById("category").style.display = "block";
}

function hideNewCategoryDiv()
{
    document.getElementById("category").style.display = "none";
    document.getElementById("newCategoryNameInput").value = "";
}

function addNewCategory()
{
    let cat_value = document.getElementById("newCategoryNameInput").value;
    let cat_color = document.getElementById("newCategoryColorInput").value;
    if (cat_value)
    {
        categories[cat_value] = cat_color;
    
        updateCtegories(cat_value);
        hideNewCategoryDiv();
        toggleCategoryBtn();
        console.log(categories);
    }
    else
    {
        alert("You didn't enter the category name!")
    }
}

function updateCtegories(category)
{
    let searchCategories = document.getElementById("categoryFilterSelect");
    let categoriesListSelect = document.getElementById("newTaskCategorySelect");

    let option = document.createElement("option");
    option.value = category;
    option.text = category;

    searchCategories.appendChild(option.cloneNode(true));
    categoriesListSelect.appendChild(option.cloneNode(true));

}

function getColor(cat){
    return categories[cat];
}
