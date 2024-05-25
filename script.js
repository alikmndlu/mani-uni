



    
$(document).ready(function() {
   
    document.addEventListener('DOMContentLoaded', function() {
        const icons = document.querySelectorAll('#navbar-icons .link');

        icons.forEach(function(icon) {
            icon.addEventListener('click', function() {
                const targetModalId = this.getAttribute('data-target');
                $(targetModalId).modal('toggle');
            });
        });
    });



    $('#displaySetting').click(function() {
        $('#display').modal('show');
    });
    $('#searchIcon').click(function() {
        $('#search').modal('show');
    });
    $('#contentSetting').click(function() {
        $('#content').modal('show');
    });
    $('#annotationSetting').click(function() {
        $('#annotation').modal('show');
    });
    $('#helpSetting').click(function() {
        $('#help').modal('show');
    });
    $('#search').on('show.bs.modal', function(event) {
        var button = $(event.relatedTarget); // Button that triggered the modal
        var modal = $(this);
  
        // Ensure button and modal exist before proceeding
        if (button.length && modal.length) {
          // Get the button position
            var buttonPosition = button.offset(); // Use .offset() for position relative to the document
            var buttonHeight = button.outerHeight();
            var buttonWidth = button.outerWidth();
            
            // Get the window width and modal width
            var windowWidth = $(window).width();
            var modalWidth = modal.find('.modal-dialog').outerWidth();
            
            // Calculate position
            var topPosition = buttonPosition.top + buttonHeight;
            var leftPosition = buttonPosition.left + (buttonWidth / 2) - (modalWidth / 2);
            
            // Ensure the modal does not go out of viewport
            if (leftPosition < 0) leftPosition = 10; // 10px padding from the left
            if (leftPosition + modalWidth > windowWidth) leftPosition = windowWidth - modalWidth - 10; // 10px padding from the right
          
            // Set the modal position
            modal.find('.modal-dialog').css({
                top: topPosition,
                left: leftPosition
            }).addClass('custom-modal-position');
        }
    });
    var isDragging = false;
    var mouseOffset = {};
          
    $(document).on('mousedown', '.modal-header', function(e) {
        var dialog = $(this).closest('.modal-dialog');
        isDragging = true;
        mouseOffset = {
            top: e.clientY - dialog.offset().top,
            left: e.clientX - dialog.offset().left
        };
          
        $(document).on('mousemove.draggable', function(e) {
            if (isDragging) {
                dialog.offset({
                    top: e.clientY - mouseOffset.top,
                    left: e.clientX - mouseOffset.left
                });
            }
        });
        $(document).on('mouseup', function() {
            if (isDragging) {
                isDragging = false;
                $(document).off('mousemove.draggable');
            }
        });
    });
    // Reset modal position when it is closed
    $('.modal').on('hidden.bs.modal', function() {
        $(this).find('.modal-dialog').css({
            top: '',
            left: ''
        });
    });
    
        
    // Function to position the modal to the right side of the page
    function positionModal(modal) {
        var rightPosition = 20; // Adjust this value as needed for the desired margin

        // Apply the calculated position to the modal
        modal.find('.modal-dialog').css({
            'top': '64px', // Adjust this value as needed for the desired top position
            'right': rightPosition + 'px', // Position from the right side
            'left': 'auto', // Reset the left position
            'position': 'fixed'
        });
    }

    // Listen for clicks on nav icons
    $('.link').on('click', function() {
        var targetModalId = $(this).data('target');
        var targetModal = $(targetModalId);

        // Show modal with no backdrop
        targetModal.modal({
            backdrop: false,
            show: true
        });

        // Position the modal
        positionModal(targetModal);
    });
    // dark theme
    const toggle = document.getElementById('toggle');
        toggle.addEventListener('change', function() {
            const isDarkTheme = this.checked;
            document.body.style.backgroundColor = isDarkTheme ? 'black' : 'white';
            document.getElementById('bookContent').style.backgroundColor = isDarkTheme ? 'black' : 'white';
            document.getElementById('pages-container').style.color = isDarkTheme ? 'black' : 'white';
            $('.navbar').css('background-color', isDarkTheme ? '#1d1d1d' : 'white');
            $('.page').css('background-color', isDarkTheme ? 'black' : 'white');
            $('.page').css('color', isDarkTheme ? 'white' : 'black');
            $('.modal-content').css('background-color', isDarkTheme ? '#1d1d1d' : 'white');
            $('.darkMode').css('color', isDarkTheme ? 'white' : 'black');
            $('.tabcolor').css('background-color', isDarkTheme ? '#1d1d1d' : 'white');
            $('.tabcolor').css('color', isDarkTheme ? 'white' : 'black');
            
        });

        // Font selection
        $('.font-select').change(function() {
            var selectedFont = $(this).val();
            $('#bookContent').css('font-family', selectedFont);
        });

        // Font size
        var baseFontSize = 18;
        $('.increase-font').click(function(e) {
            e.preventDefault();
            baseFontSize += 2;
            updateFontSize(baseFontSize);
        });

        $('.reduce-font').click(function(e) {
            e.preventDefault();
            baseFontSize -= 2;
            updateFontSize(baseFontSize);
        });

        function updateFontSize(fontSize) {
            $('#bookContent').css('font-size', fontSize + 'px');
            var fontSizePercentage = Math.round((fontSize / 18) * 100);
            $('#fontSizePercentage').text(fontSizePercentage + '%');
        }

        // Line height
        var baseLineHeight = 30;
        $('.increase-line-height').click(function(e) {
            e.preventDefault();
            baseLineHeight += 2;
            updateLineHeight(baseLineHeight);
        });

        $('.reduce-line-height').click(function(e) {
            e.preventDefault();
            baseLineHeight -= 2;
            updateLineHeight(baseLineHeight);
        });

        function updateLineHeight(lineHeight) {
            $('#bookContent').css('line-height', lineHeight + 'px');
            var lineHeightPercentage = Math.round((lineHeight / 30) * 100);
            $('#lineHeightPercentage').text(lineHeightPercentage + '%');
        }

        // Justify paragraph
        $('.justify-paragraph').click(function(e) {
            e.preventDefault();
            $('#bookContent').addClass('text-justify');
        });

        // Unjustify paragraph
        $('.unjustify-paragraph').click(function(e) {
            e.preventDefault();
            $('#bookContent').removeClass('text-justify');
        });
    
    
    
    
    


    // $(document).ready(function() {
    //     function positionModal(modal, icon) {
    //         var iconOffset = icon.offset();
    //         var iconHeight = icon.outerHeight();
    
    //         modal.find('.modal-dialog').css({
    //             top: iconOffset.top + iconHeight + 'px',
    //             left: iconOffset.left + 'px',
    //             position: 'absolute',
    //             transform: 'none',
    //             margin: 0
    //         }).addClass('custom-modal-position');
    //     }
    
    //     // Listen for clicks on nav icons
    //     $('.nav-icon').on('click', function() {
    //         var targetModalId = $(this).data('target');
    //         var targetModal = $(targetModalId);
    
    //         // Show the modal and position it correctly
    //         targetModal.on('show.bs.modal', function() {
    //             positionModal(targetModal, $(this));
    //         });
    
    //         // Ensure the modal is shown without a backdrop
    //         targetModal.modal({
    //             backdrop: false,
    //             show: true
    //         });
    //     });
    
    //     // Ensure the position is reset after the modal is hidden
    //     $('.modal').on('hidden.bs.modal', function() {
    //         $(this).find('.modal-dialog').removeClass('custom-modal-position').css({
    //             top: '',
    //             left: '',
    //             margin: '',
    //             transform: ''
    //         });
    //         $('.modal-backdrop').remove();
    //         $('body').removeClass('modal-open');
    //     });
    // });
    
    
    
   
    //  // Listen for clicks on nav icons
    //  $('.nav-link').click(function() {
    //     // Get the target modal ID
    //     var targetModal = $(this).data('target');
        
    //     // Get the position of the icon
    //     var iconPosition = $(this).offset();
    //     var iconHeight = $(this).outerHeight();
        
    //     // Show the modal first to ensure it is in the DOM
    //     $(targetModal).modal('show');
        
    //     // Set the position of the modal directly
    //     $(targetModal).find('.modal-dialog').css({
    //         top: iconPosition.top + iconHeight,
    //         left: iconPosition.left,
    //         margin: 0,
    //         transform: 'none'
    //     }).addClass('custom-modal-position');
    // });

    // // Ensure the position is reset after the modal is hidden
    // $('.modal').on('hidden.bs.modal', function() {
    //     $(this).find('.modal-dialog').removeClass('custom-modal-position').css({
    //         top: '',
    //         left: '',
    //         margin: '',
    //         transform: ''
    //     });
    //     $('.modal-backdrop').remove();
    //     $('body').removeClass('modal-open');
    // });
});
          
        // $('#search').on('show.bs.modal', function (event) {
        //     var button = $(event.relatedTarget) // Button that triggered the modal
        //     var recipient = button.data('whatever') // Extract info from data-* attributes
        //     // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        //     // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        //     var modal = $(this)
        //     modal.find('.modal-title').text('New message to ' + recipient)
        //     modal.find('.modal-body input').val(recipient)
        //   })
        // function CreateBox(id){
        //     let box = document.getElementById(id);
        //     box.addEventListener('mousedown', (e) => {
        //         // Calculate the offset
        //         offsetX = e.clientX - box.getBoundingClientRect().left;
        //         offsetY = e.clientY - box.getBoundingClientRect().top;
        //         isDragging = true;
        //         // Add event listeners for mouse move and mouse up
        //         document.addEventListener('mousemove', onMouseMove);
        //         document.addEventListener('mouseup', onMouseUp);
        //     });
        //     function onMouseMove(e) {
        //         if (!isDragging) return;
        //         // Calculate new position
        //         const x = e.clientX - offsetX;
        //         const y = e.clientY - offsetY;
        //         // Move the box to the new position
        //         box.style.left = `${x}px`;
        //         box.style.top = `${y}px`;
        //     }
        //     function onMouseUp() {
        //         isDragging = false;
        //         // Remove event listeners for mouse move and mouse up
        //         document.removeEventListener('mousemove', onMouseMove);
        //         document.removeEventListener('mouseup', onMouseUp);
        //     }
        
        // }
        
        // draggable box//
       
        // CreateBox('draggableBox')
        // CreateBox('DisSetting')
        // document.addEventListener('DOMContentLoaded', function() {
        //     // Single page layout button click event
        //     document.getElementById('singlePageBtn').addEventListener('click', function() {
        //       document.querySelector('.container').classList.remove('double-page');
        //     });
          
        //     // Double page layout button click event
        //     document.getElementById('doublePageBtn').addEventListener('click', function() {
        //       document.querySelector('.container').classList.add('double-page');
        //     });
        // });
        const pagesContainer = document.getElementById('pages-container');
        const prevPageBtn = document.getElementById('prev-page');
        const nextPageBtn = document.getElementById('next-page');
        const toggleLayoutBtn = document.getElementById('toggle-layout');
          
        let currentPageIndex = 0;
        let isTwoPageLayout = false;
        const bookContent = `Your book text goes here .Mahtab Replace.  this with your actual Mahtab text goes here. Replace this with Your book text goes h, Replace this with your actual book text.Your book text goes here. Replace this with Your book text goes hReplace this with your actual book text.Your book text goes here. Replace this with Your book text goes hReplace this with your actual book text.Your book text goes here. Replace this with Your book text goes h Replace this with your actual book text.Your book text goes here. Replace this with Your book text goes h Replace this with your actual book text.Your book text goes here. Replace this with Your book text goes h Replace this with your actual book text.Your book text goes here. Replace this with Your book text goes h Replace this with your actual book text.Your book text goes here. Replace this with Your book text goes h Replace this with your actual book text.Your book text goes here. Replace this with Your book text goes h Replace this with your actual book text.Your book text goes here. Replace this with Your book text goes h Replace this with your actual book text.Your book text goes here. Replace this with Your book text goes h Replace this with your actual book text.Your book text goes here. Replace this with Your book text goes h Replace this with your actual book text.Your book text goes here. Replace this with Your book text goes h Replace this with your actual book text.Your book text goes here. Replace this with Your book text goes h Replace this with your actual book text.Your book text goes here. Replace this with Your book text goes h Replace this with your actual book text.Your book text goes here. Replace this with Your book text goes h Replace this with your actual book text.Your book text goes here. Replace this with Your book text goes h Replace this with your actual book text.Your book text goes here. Replace this with Your book text goes h Replace this with your actual book text.Your book text goes here. Replace this with Your book text goes h Replace this with your actual book text.Your book text goes here. Replace this with Your book text goes h Replace this with your actual book text.Your book text goes here. Replace this with Your book text goes h Replace this with your actual book text.Your book text goes here. Replace this with Your book text goes h Replace this with your actual book text.Your book text goes here. Replace this with Your book text goes h Mahtab .`;
          
        // Function to split book content into pages
        function splitBookIntoPages() {
            const words = bookContent.split(' ');
            const wordsPerPage = 400; // Adjust as needed
            const pages = [];
            let currentPage = '';
          
            words.forEach(word => {
                if (currentPage.split(' ').length < wordsPerPage) {
                    currentPage += word + ' ';
                } else {
                    pages.push(currentPage.trim());
                    currentPage = word + ' ';
                }
            });
          
            if (currentPage.trim() !== '') {
                pages.push(currentPage.trim());
            }
            return pages;
        }
          
          // Function to display current page
            function displayPage(pageIndex) {
                const pages = splitBookIntoPages();
                renderPages(pages);
    
                if (isTwoPageLayout) {
                    // Display two pages at once
                    const currentPageIndex = pageIndex * 2;
                    const firstPageContent = `<div class="page">${pages[currentPageIndex]}</div>`;
                    const secondPageContent = `<div class="page">${pages[currentPageIndex + 1] || ''}</div>`;
                    pagesContainer.innerHTML = firstPageContent + secondPageContent;
                } else {
                    // Display single page at a time
                    pagesContainer.innerHTML = `<div class="page">${pages[pageIndex]}</div>`;
                }
            }

          
          // Function to go to the next page
        function goToNextPage() {
            if (currentPageIndex < splitBookIntoPages().length - 1) {
                currentPageIndex++;
                displayPage(currentPageIndex);
            }
        }
          
          // Function to go to the previous page
          function goToPrevPage() {
              if (currentPageIndex > 0) {
                  currentPageIndex--;
                  displayPage(currentPageIndex);
              }
          }
          
          // Event listener for navigation buttons
          nextPageBtn.addEventListener('click', goToNextPage);
          prevPageBtn.addEventListener('click', goToPrevPage);
          
          // Event listener for keyboard arrow keys
          document.addEventListener('keydown', function(event) {
              if (event.key === 'ArrowRight') {
                  goToNextPage();
              } else if (event.key === 'ArrowLeft') {
                  goToPrevPage();
              }
          });
          
          // Initial page display
          displayPage(currentPageIndex);
          // Function to display current page
          function displayPage(pageIndex) {
              const pages = splitBookIntoPages();
              
            //   if (pageIndex === 0) {
            //       // Display image on the first page
            //       pagesContainer.innerHTML = `<img src="img/tuning.png" id="first-page-img" alt="First Page Image">`;
            //   } else {
                  // Display text content on subsequent pages
                  pagesContainer.innerHTML = `<div class="page">${pages[pageIndex]}</div>`;
            //   }
          }
          
          // Function to go to the next page
          function goToNextPage() {
              if (currentPageIndex < splitBookIntoPages().length) {
                  currentPageIndex++;
                  displayPage(currentPageIndex);
              }
          }
        
        // Function to toggle between single-page and two-page layouts
        function toggleLayout() {
            const pagesContainer = document.getElementById('pages-container');
            const pages = splitBookIntoPages();
            
            // Clear existing content
            pagesContainer.innerHTML = '';

            if (pagesContainer.classList.contains('single-page-layout')) {
                // Display single-page layout
                pages.forEach(page => {
                    const pageElement = document.createElement('div');
                    pageElement.classList.add('page');
                    pageElement.textContent = page;
                    pagesContainer.appendChild(pageElement);
                });
            } else {
                // Display two-page layout
                for (let i = 0; i < pages.length; i += 2) {
                    const doublePageContainer = document.createElement('div');
                    doublePageContainer.classList.add('double-page-container');

                    const leftPageElement = document.createElement('div');
                    leftPageElement.classList.add('page');
                    leftPageElement.textContent = pages[i];
                    doublePageContainer.appendChild(leftPageElement);

                    const rightPageElement = document.createElement('div');
                    rightPageElement.classList.add('page');
                    rightPageElement.textContent = pages[i + 1] || ''; // If no content for right page, leave it empty
                    doublePageContainer.appendChild(rightPageElement);

                    pagesContainer.appendChild(doublePageContainer);
                }
            }

            // Toggle layout class
            pagesContainer.classList.toggle('single-page-layout');
            pagesContainer.classList.toggle('two-page-layout');
        }

        // Event listener for layout toggle button
        toggleLayoutBtn.addEventListener('click', toggleLayout);
          
        function fullScreen() {
            const element = document.getElementById('pages-container'); // Target element to go fullscreen
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) { // Firefox
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) { // Chrome, Safari, and Opera
                element.webkitRequestFullscreen();
            } else if (element.msRequestFullscreen) { // IE/Edge
                element.msRequestFullscreen();
            }
        }
    
        // Attach the fullscreen function to the fullscreen icon click event
        document.querySelector('.fa-expand').addEventListener('click', fullScreen);
        const searchForm = document.getElementById('searchForm');
        const searchInput = document.getElementById('searchInput');
        const searchResults = document.getElementById('searchResults');
        const closeSearch = document.getElementById('closeSearch');
        const searchIcon = document.getElementById('searchIcon');
        const searchDropdown = document.querySelector('.dropdown-menu');

        // Toggle search dropdown visibility
        // searchIcon.addEventListener('click', function() {
        //     searchDropdown.classList.toggle('show');
        // });

        // // Close search dropdown
        // closeSearch.addEventListener('click', function() {
        //     searchDropdown.classList.remove('show');
        //     searchResults.innerHTML = ''; // Clear previous results
        // });

        // // Handle search form submission
        // searchForm.addEventListener('submit', function(event) {
        //     event.preventDefault();
        //     const query = searchInput.value.trim().toLowerCase();
        //     if (query) {
        //         performSearch(query);
        //     }
        // });

        // // Perform search and display results
        // function performSearch(query) {
        //     const pages = splitBookIntoPages();
        //     searchResults.innerHTML = ''; // Clear previous results
        //     let resultsFound = false;
        
        //     let firstResultPage = null;
        //     let firstResultIndex = null;
        
        //     pages.forEach((pageContent, index) => {
        //         const sentences = pageContent.split('. '); // Split the page content into sentences
        //         sentences.forEach((sentence, sentenceIndex) => {
        //             if (sentence.toLowerCase().includes(query.toLowerCase())) {
        //                 resultsFound = true;
        //                 firstResultPage = index + 1;
        //                 firstResultIndex = sentenceIndex;
        
        //                 // Display search result
        //                 const resultItem = document.createElement('div');
        //                 resultItem.classList.add('search-result-item');
        //                 resultItem.innerHTML = `<strong>Page ${firstResultPage}:</strong> ${highlightQuery(sentence, query)}`;
        //                 searchResults.appendChild(resultItem);
        //                 searchResults.appendChild(document.createElement('br')); // Add line break after each sentence
        //             }
        //         });
        //     });
        
        //     if (!resultsFound) {
        //         searchResults.innerHTML = '<p>No results found.</p>';
        //     }
        
        //     if (resultsFound) {
        //         // Scroll to the first occurrence of the search term
        //         const highlightedText = document.getElementById(`page-${firstResultPage}-sentence-${firstResultIndex}`);
        //         if (highlightedText) {
        //             highlightedText.scrollIntoView({ behavior: 'smooth', block: 'start' });
        //         }
        //     }
        
        //     // Re-render pages with highlighted search terms
        //     renderPages(pages, query);
        // }
        
        
        
        
        
        
        // function scrollToPage(pageNumber) {
        //     const pageId = `page-${pageNumber}`;
        //     const pageElement = document.getElementById(pageId);
        //     if (pageElement) {
        //         const pageOffset = pageElement.offsetTop; // Get the offset of the top of the page element
        //         window.scrollTo({ top: pageOffset, behavior: 'smooth' }); // Scroll to the top of the page element
        //     }
        // }
        
        
        
        
        // // Highlight the searched query in the results
        // function highlightQuery(text, query) {
        //     const regex = new RegExp(`(${query})`, 'gi');
        //     return text.replace(regex, '<span class="highlight">$1</span>');
        // }
        // const style = document.createElement('style');
        // style.innerHTML = `
        //     .highlight {
        //         background-color: yellow;
        //     }
        //     .search-result-item {
        //         margin-bottom: 10px;
        //     }
        // `;
        // document.head.appendChild(style);
        // function renderPages(pages, query = '') {
        //     const pagesContainer = document.getElementById('pages-container');
        //     pagesContainer.innerHTML = ''; // Clear previous pages
        
        //     pages.forEach((pageContent, index) => {
        //         const pageElement = document.createElement('div');
        //         pageElement.classList.add('page');
        //         const pageId = `page-${index + 1}`; // Generate page ID
        //         pageElement.setAttribute('id', pageId);
        
        //         if (index === 0) {
        //             // Display image on the first page
        //             pageElement.innerHTML = `<img src="img/tuning.png" alt="First Page Image">`;
        //             pagesContainer.appendChild(pageElement);
        //         } else {
        //             // Render subsequent text on separate pages
        //             const textElement = document.createElement('div');
        //             textElement.innerHTML = highlightQuery(pageContent, query);
        //             pageElement.appendChild(textElement);
        //             pagesContainer.appendChild(pageElement);
        //         }
        //     });
        // }
        // // Toggle dark theme
        // const toggle = document.getElementById('toggle');
        // toggle.addEventListener('change', function() {
        //     const isDarkTheme = this.checked;
        //     document.body.style.backgroundColor = isDarkTheme ? 'black' : 'white';
        //     document.getElementById('bookContent').style.backgroundColor = isDarkTheme ? 'black' : 'white';
        //     document.getElementById('bookContent').style.color = isDarkTheme ? 'white' : 'black';
        //     document.getElementById('pages-container').style.color = isDarkTheme ? 'black' : 'white';
        //     $('#navbar-icons>i').css('color', isDarkTheme ? 'white' : 'black');
        //     $('#book-title').css('color', isDarkTheme ? 'white' : 'black');
        //     $('.navbar').css('background-color', isDarkTheme ? '#1d1d1d' : 'white');
        // });

        // // Font selection
        // $('.font-select').change(function() {
        //     var selectedFont = $(this).val();
        //     $('#bookContent').css('font-family', selectedFont);
        // });

        // // Font size
        // var baseFontSize = 22;
        // $('.increase-font').click(function(e) {
        //     e.preventDefault();
        //     baseFontSize += 2;
        //     updateFontSize(baseFontSize);
        // });

        // $('.reduce-font').click(function(e) {
        //     e.preventDefault();
        //     baseFontSize -= 2;
        //     updateFontSize(baseFontSize);
        // });

        // function updateFontSize(fontSize) {
        //     $('#bookContent').css('font-size', fontSize + 'px');
        //     var fontSizePercentage = Math.round((fontSize / 22) * 100);
        //     $('#fontSizePercentage').text(fontSizePercentage + '%');
        // }

        // // Line height
        // var baseLineHeight = 25;
        // $('.increase-line-height').click(function(e) {
        //     e.preventDefault();
        //     baseLineHeight += 2;
        //     updateLineHeight(baseLineHeight);
        // });

        // $('.reduce-line-height').click(function(e) {
        //     e.preventDefault();
        //     baseLineHeight -= 2;
        //     updateLineHeight(baseLineHeight);
        // });

        // function updateLineHeight(lineHeight) {
        //     $('#bookContent').css('line-height', lineHeight + 'px');
        //     var lineHeightPercentage = Math.round((lineHeight / 25) * 100);
        //     $('#lineHeightPercentage').text(lineHeightPercentage + '%');
        // }

        // // Justify paragraph
        // $('.justify-paragraph').click(function(e) {
        //     e.preventDefault();
        //     $('#bookContent').addClass('text-justify');
        // });

        // // Unjustify paragraph
        // $('.unjustify-paragraph').click(function(e) {
        //     e.preventDefault();
        //     $('#bookContent').removeClass('text-justify');
        // });

        
        
        
        
        
          
          
          
          
        

        

        
