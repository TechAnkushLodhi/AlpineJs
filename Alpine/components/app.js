// document.addEventListener('alpine:init', () => {
//     Alpine.data('slider', () => ({
//         totalItemLength: 12,
//         item:5, 
//         margin:5, 
//         windowWidth:0, // not changeable
//         mainDiveWidthCalcluate:0, // not changeable
//         oneitemWidth: 0, // not changeable
//         storeItemWidth:0, // not changeable
//         oneTimeScrollItem:1, // 0  && - value is note Allow //
//         startIndex:0, // not changeable
//         endIndex:0, // not changeable
//         items:['1','2','3','4','5','6','7','8','9','10','11','12'],  
//         indexMethod(){
//             this.$nextTick(() => {
//             let itemWidth=this.$refs.MainSliderWidth.querySelectorAll('.custom-item');
//             itemWidth.forEach((value)=>{
//                 value.classList.remove('active');
//             });
//             for (let i = this.startIndex; i < this.endIndex; i++) {
//                     if(itemWidth.length)
//                     itemWidth[i].classList.add('active');
//             };
//            });
//         },
//         whidthCalc() {
//             this.$nextTick(() => {
//                 let SatageOuter=this.$refs.StageOuter.offsetWidth;
//                 this.windowWidth=SatageOuter;
//                 let TotalItemMargin=this.margin*(this.item-2);
//                 let TotalWidth=SatageOuter-(TotalItemMargin);
//                 let CalculateWithOfItem=`${(TotalWidth)/this.item}`; 
//                 this.oneitemWidth = CalculateWithOfItem;
//                 let itemWidth=this.$refs.MainSliderWidth.querySelectorAll('.custom-item');
//                 let MainDivWidth = this.$refs.MainSliderWidth;
//                 let mainDiveWidthCalcluate= (CalculateWithOfItem * itemWidth.length) + (this.margin * (itemWidth.length));
//                 MainDivWidth.style.width=`${mainDiveWidthCalcluate}px`;
//                 MainDivWidth.style.transform=`translate3d(0px ,0px , 0px)`;
//                 MainDivWidth.style.transition = 'all 0.25s ease 0s';
//                 this.mainDiveWidthCalcluate=mainDiveWidthCalcluate;
//                 itemWidth.forEach((value)=>{
//                       value.style.width = `${CalculateWithOfItem}px`;
//                       value.style.marginRight = `${this.margin}px`;
//                 });
//             });
//         },
//         itemSlide() {
//             this.$nextTick(() => {
//                let MainDivWidth = this.$refs.MainSliderWidth;
//                MainDivWidth.style.transform=`translate3d(-${this.storeItemWidth}px ,0px , 0px)`;
//                MainDivWidth.style.transition = 'all 0.25s ease 0s';
//             });
//         },
//         prev() {
//             if (parseFloat(this.storeItemWidth) > 0) {
//                 this.storeItemWidth = parseFloat(this.storeItemWidth) - (parseFloat(this.oneitemWidth) + parseFloat(this.margin));
//                 if (parseFloat(this.storeItemWidth) < 0) {
//                     this.storeItemWidth = 0;
//                 }
//                 this.startIndex--;
//                 this.endIndex--;
//                 this.indexMethod();
//                 this.itemSlide();
//             }
//         },
//         next() {    
//                // if(parseFloat(this.oneTimeScrollItem)>0){
//              // this.$nextTick(() => {
//              //     let ItemMovedleftWindowWidth= (this.windowWidth+(this.margin*2))+parseFloat(this.storeItemWidth); //left me jitne item nikal gaye or window dhono ki width
//              //     let valueCount=(this.mainDiveWidthCalcluate);  // main div ki width 
//              //     let MinmumValue= valueCount - ItemMovedleftWindowWidth; //right me bachi hui width
//              //     let MaximumVlaue = (parseFloat(this.oneitemWidth) + parseFloat(this.margin)) * this.oneTimeScrollItem; //  minmum itni honi chaiye 
//              //     if(MinmumValue < MaximumVlaue){
//              //        console.log('hi');
//              //     }
//              //     console.log(MaximumVlaue);
//              //     console.log(MinmumValue);
//              // })   
//             // }


//             if(Math.floor(this.storeItemWidth)==Math.floor(this.mainDiveWidthCalcluate-(this.windowWidth+(this.margin*2)))){
//                 return;
//             }
//             if(parseFloat(this.storeItemWidth)==0){  
//               if(parseFloat(this.oneTimeScrollItem) > 1){
//                 let MultiScrollItem=parseFloat(this.oneTimeScrollItem)*(parseFloat(this.oneitemWidth) + parseFloat(this.margin))
//                 this.storeItemWidth = MultiScrollItem;
//                 this.itemSlide();    
//                 return;                                                                                           
//               }
//               this.startIndex++;
//               this.endIndex++;
//               this.indexMethod();
//                this.storeItemWidth = parseFloat(this.oneitemWidth) + parseFloat(this.margin);
//                this.itemSlide();
//                return;
//             }
//             if(!parseFloat(this.storeItemWidth) == 0){
//               if(parseFloat(this.oneTimeScrollItem) >1 ){
//                  this.storeItemWidth =parseFloat(this.storeItemWidth) + parseFloat(this.oneTimeScrollItem)*( parseFloat(parseFloat(this.oneitemWidth)+parseFloat(this.margin)));
//                  this.itemSlide();
//                  return;
//               }
//               this.startIndex++;
//               this.endIndex++;
//               this.indexMethod();
//               this.storeItemWidth = parseFloat(this.storeItemWidth) + parseFloat(parseFloat(this.oneitemWidth)+parseFloat(this.margin));
//               this.itemSlide();
//               return;
//             }
//         },
//         init() {
//             this.whidthCalc();
//             this.indexMethod();
//             this.endIndex=this.item;
//         }
//     }));

// //   Alpine.data('shorting', () => ({
// //     Array: [
// //         { 'name': 'Ankush', 'age': 23, 'gender': 'Male' },
// //         { 'name': 'Priya', 'age': 28, 'gender': 'Female' },
// //         { 'name': 'Rahul', 'age': 25, 'gender': 'Male' },
// //         { 'name': 'Sonia', 'age': 30, 'gender': 'Female' },
// //         { 'name': 'BAmit', 'age': 35, 'gender': 'Male' },
// //         { 'name': 'Neha', 'age': 26, 'gender': 'Female' },
// //         { 'name': 'Ravi', 'age': 22, 'gender': 'Male' },
// //         { 'name': 'Pooja', 'age': 31, 'gender': 'Female' },
// //         { 'name': 'Vikas', 'age': 29, 'gender': 'Male' },
// //         { 'name': 'Kavita', 'age': 27, 'gender': 'Female' }
// //     ],
// //     sortedArray: function() {
// //       return this.Array.slice().sort((A, B) => A.name.localeCompare(B.name));
// //     }
// // }));

// });


