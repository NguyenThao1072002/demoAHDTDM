$(document).ready(function() {
    const API_URL = 'http://localhost:1337';

    function fetchDataFromStrapi() {
        $.ajax({
            type: 'GET',
            url: `${API_URL}/api/blogs`,
            dataType: 'json',
            success: function(data) {
                renderBlogs(data);
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
                alert('Đã xảy ra lỗi khi tải dữ liệu từ Strapi.');
            }
        });
    }

    function renderBlogs(response) {
        const blogContainer = $('#blogContainer');
        blogContainer.empty();
    
        const data = response.data;
    
        if (Array.isArray(data) && data.length > 0) {
            data.forEach(function(blog) {
                const blogItem = $('<div>').addClass('blog-item');
    
                const titleElement = $('<h2>').text(blog.attributes.title);
                const contentElement = $('<p>').text(blog.attributes.content);
    
                blogItem.append(titleElement, contentElement);
                blogContainer.append(blogItem);
            });
        } else {
            console.error('Dữ liệu không hợp lệ:', response);
        }
    }
    

    fetchDataFromStrapi();
});
