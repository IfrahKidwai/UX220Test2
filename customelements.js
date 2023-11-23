//year
class DaysToNewYears extends HTMLElement{
    connectedCallback(){
        this.innerHTML ="console.log(nDaysLeft)";
   }
}

customElements.define("x-days-to-newyears", DaysToNewYears);