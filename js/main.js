const SearchBtn = document.querySelector('.search_btn');
const ScreenWrap = document.querySelector('.screen_wrapper');
const screenCloseBtn = document.querySelector('.screen_wrapper_close')
const screenWrapInp = document.querySelector('.screen_wrap_input')
const screenWrapSearch = document.querySelector('.screen_wrap_search')
const sideBtn = document.querySelector('.side_menu');
const sidebarMenu = document.querySelector('.sidebar_menu')
const sidebarClose = document.querySelector('.sidebar_menu_close')
const header = document.querySelector('.nav')
SearchBtn.addEventListener('click', function() {
    ScreenWrap.classList.add('active');
})
screenCloseBtn.addEventListener('click', function() {
    ScreenWrap.classList.remove('active');
    screenWrapSearch.classList.remove('active')
})
screenWrapInp.addEventListener('click', function() {
    screenWrapSearch.classList.add('active')
})
sideBtn.addEventListener('click', function(event) {
    sidebarMenu.classList.add('opened')
    closeWindow()

})
sidebarClose.addEventListener('click', function(event) {
    sidebarMenu.classList.remove('opened')

})

;

function closeWindow() {
    window.addEventListener("click", function(event) {
        if (event.target == sidebarMenu) {
            sidebarMenu.style.display = "none";
        }
    });
}

// window.onscroll = 
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    touchRatio: 0,
    // If we need pagination


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});

const textswiper = new Swiper('.swiper-container2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },



    // And if we need scrollbar

});

const partnerswiper = new Swiper('.swiper-container3', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 6,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 40
        }
    }


    // And if we need scrollbar

});


function selectFunction() {
    const selectBlock = document.querySelectorAll('[data-select]');
    const allLists = document.querySelectorAll('[data-list]')
    const allArrows = document.querySelectorAll('[data-arrow]')

    for (const selectItem of selectBlock) {
        const selectedItem = selectItem.querySelector('[data-selected="true"]')
        const itemsList = selectItem.querySelector('[data-list]')
        const itemOfList = selectItem.querySelectorAll('[data-item="true"]')
        const selectInput = selectItem.querySelector('[data-input]')
        const selectArrow = selectItem.querySelector('[data-arrow]')
        const selectedTitle = selectItem.querySelector('[data-selected-title]')

        selectedItem.addEventListener('click', function() {
            //remove all opened lists
            for (const a of allLists) {
                if (!itemsList.classList.contains('select__list_opened')) {
                    a.classList.remove('select__list_opened')
                }
            }

            //remove all transformed arrows
            for (const y of allArrows) {
                y.classList.remove('select__arrow_rotate')
            }

            //set open class to list of items
            if (itemsList.classList.contains('select__list_opened')) {
                itemsList.classList.remove('select__list_opened')
                selectArrow.classList.remove('select__arrow_rotate')
            } else {
                itemsList.classList.add('select__list_opened')
                selectArrow.classList.add('select__arrow_rotate')
            }
        })

        //insert value in selected and input values
        for (const item of itemOfList) {
            item.addEventListener('click', function() {
                selectedTitle.innerHTML = item.innerHTML
                selectInput.value = item.innerHTML
                itemsList.classList.remove('select__list_opened')
                selectArrow.classList.remove('select__arrow_rotate')
            })
        }

        //close select in other areas
        document.addEventListener('click', function(event) {
            if (event.target.dataset.selected !== "true" && event.target.dataset.item !== "true") {
                itemsList.classList.remove('select__list_opened')

            }
        })
    }
}

selectFunction()

$(document).ready(function() {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });
})

var $tabs = function(target) {
    var
        _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
        _eventTabsShow,
        _showTab = function(tabsLinkTarget) {
            var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
            tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
            tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs__link_active');
            tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabs__pane_show');
            // если следующая вкладка равна активной, то завершаем работу
            if (tabsLinkTarget === tabsLinkActive) {
                return;
            }
            // удаляем классы у текущих активных элементов
            if (tabsLinkActive !== null) {
                tabsLinkActive.classList.remove('tabs__link_active');
            }
            if (tabsPaneShow !== null) {
                tabsPaneShow.classList.remove('tabs__pane_show');
            }
            // добавляем классы к элементам (в завимости от выбранной вкладки)
            tabsLinkTarget.classList.add('tabs__link_active');
            tabsLinkTarget.classList.add('.tabs__link_active::after');
            tabsPaneTarget.classList.add('tabs__pane_show');
            document.dispatchEvent(_eventTabsShow);
        },
        _switchTabTo = function(tabsLinkIndex) {
            var tabsLinks = _elemTabs.querySelectorAll('.tabs__link');
            if (tabsLinks.length > 0) {
                if (tabsLinkIndex > tabsLinks.length) {
                    tabsLinkIndex = tabsLinks.length;
                } else if (tabsLinkIndex < 1) {
                    tabsLinkIndex = 1;
                }
                _showTab(tabsLinks[tabsLinkIndex - 1]);
            }
        };

    _eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });

    _elemTabs.addEventListener('click', function(e) {
        var tabsLinkTarget = e.target;
        // завершаем выполнение функции, если кликнули не по ссылке
        if (!tabsLinkTarget.classList.contains('tabs__link')) {
            return;
        }
        // отменяем стандартное действие
        e.preventDefault();
        _showTab(tabsLinkTarget);
    });

    return {
        showTab: function(target) {
            _showTab(target);
        },
        switchTabTo: function(index) {
            _switchTabTo(index);
        }
    }

};
window.onscroll = function() {
    if (window.pageYOffset > 100) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}
$tabs('.tabs');

function getVals() {
    // Get slider values
    let parent = this.parentNode;
    let slides = parent.getElementsByTagName("input");
    let slide1 = parseFloat(slides[0].value);
    let slide2 = parseFloat(slides[1].value);
    // Neither slider will clip the other, so make sure we determine which is larger
    if (slide1 > slide2) {
        let tmp = slide2;
        slide2 = slide1;
        slide1 = tmp;
    }

    let displayElement = parent.getElementsByClassName("rangeValues")[0];
    displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
}

window.onload = function() {
    // Initialize Sliders
    let sliderSections = document.getElementsByClassName("range-slider");
    for (let x = 0; x < sliderSections.length; x++) {
        let sliders = sliderSections[x].getElementsByTagName("input");
        for (let y = 0; y < sliders.length; y++) {
            if (sliders[y].type === "range") {
                sliders[y].oninput = getVals;
                // Manually trigger event first time to display values
                sliders[y].oninput();
            }
        }
    }
}