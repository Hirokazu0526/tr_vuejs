Vue.use(VueAwesomeSwiper)


    new Vue({
    el: '#app',
    data: {
        isOpenMenu: false,
        isOpenModal: false,
        currentTabIndex: 0,
        tabs:[
            {
                id:1,
                name:"タブ1",
                content:"これはタブ1のコンテンツです。これはタブ1のコンテンツです。これはタブ1のコンテンツです。"
            },
            {
                id:2,
                name:"タブ2",
                content:"これはタブ2のコンテンツです。これはタブ2のコンテンツです。これはタブ2のコンテンツです。"
            },
            {
                id:3,
                name:"タブ3",
                content:"これはタブ3のコンテンツです。これはタブ3のコンテンツです。これはタブ3のコンテンツです。"
            },
            {
                id:4,
                name:"タブ4",
                content:"これはタブ4のコンテンツです。これはタブ4のコンテンツです。これはタブ4のコンテンツです。"
            },
        ],
        swiperOption: {
            pagination:{
                el: ".swiper-pagination"
            },
            navigation: {
                nextEl:".swiper-button-next",
                prevEl:".swiper-button-prev"
            }
        }
    },
    computed: {
        currentTabContent(){
            return this.tabs[this.currentTabIndex].content
        }
    },
    methods: {
        onClick(index) {
            this.currentTabIndex = index
        },
        openMenu(){
            this.isOpenMenu = true
        },
        closeMenu(){
            this.isOpenMenu = false
        },
        openModal() {
            this.isOpenModal = true
        },
        closeModal() {
            this.isOpenModal = false
        }
    },
    mounted(){
        const _this = this
        document.addEventListener("click", function(event){
            const target = event.target.closest("#modal")
            if(_this.isOpenModal && target !== null ){
                _this.closeModal()
            }
        })
    }
})


