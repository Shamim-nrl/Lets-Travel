
let count = 0;
const allBtn = document.getElementsByClassName("add-btn")

for (const btn of allBtn) {
    btn.addEventListener("click", function (e) {
        count++
        const placeName = e.target.parentNode.childNodes[1].innerText
        const price = e.target.parentNode.childNodes[3].childNodes[1].innerText

        const selectedPlaceContainer = document.getElementById("selected-place-container");
        const li = document.createElement("li")

        const p = document.createElement("p")
        p.innerText = placeName
        const p2 = document.createElement("p")
        p2.innerText = price

        li.appendChild(p)
        li.appendChild(p2)


        e.target.parentNode.parentNode.style.backgroundColor="gray"
        // e.target.setAttribute(parentNode.parentNode="disabled")
        // e.target.setAttribute(parentNode.parentNode="enabled")


        const budget = document.getElementById("budget").innerText;
        const convertBudget = parseInt(budget)
        const budgetSum = convertBudget - parseInt(price)
        selectedPlaceContainer.appendChild(li)
        if (budgetSum < 0) {
            alert("do not get it")
            return
        }
        document.getElementById("budget").innerText = budgetSum

        totalCost('total-cost', parseInt(price))
        grandTotal('grand-total', parseInt(price))

        setInnerText('cart-count', count)
    })
}


function totalCost(id, value) {
    const totalCost = document.getElementById(id).innerText;
    const convertTotalCost = parseInt(totalCost)
    const sum = convertTotalCost + parseInt(value);
    setInnerText(id, sum)

}


function grandTotal(category) {
    const totalCost = document.getElementById("total-cost").innerText;
    const convertTotalCost = parseInt(totalCost)

    if (category === "bus") {
        setInnerText('grand-total', convertTotalCost + 100)
      
    } else if (category === "train") {
        setInnerText('grand-total', convertTotalCost - 200)
      
    } else if (category === "flight") {
        setInnerText('grand-total', convertTotalCost + 500)
     
    } else {
        setInnerText('grand-total', convertTotalCost)
    }

}



function setInnerText(id, value) {
    document.getElementById(id).innerText = value

}