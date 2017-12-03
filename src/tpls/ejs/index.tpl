<% for(var i=0,len=result.length; i<len; i++) { %>
    <div class="floor">
        <p class="f_title por"><i class="ft_ico poa"></i><strong><%= result[i].title %></strong><%= result[i].date %></p>
        <ul>
            <% for(var n=0; n<result[i].desc.length; n++) { %>
                <li><i></i><%= result[i].desc[n] %></li>
            <% } %>
        </ul>
    </div>
<% } %>