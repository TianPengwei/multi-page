<div class="header_wrap">
    <div class="header por">
        <!-- logo -->
        <div class="fl logo c f16">
            <dl>
                <dt class="fl"><a href="./"><img src="<%= require('../../assets/images/logo.png') %>" title="小鸽理财" alt="小鸽理财"></a></dt>
                <dd class="fl">2018胡润新金融最具潜力企业</dd>
            </dl>
        </div>
        <!-- 主导航 -->
        <div class="nav fr f17">
            <ul>
                <li><a class="active" href="./">首页</a></li>
                <li><a href="./">信息披露</a></li>
                <li><a href="javascript:;" id="J_account">我的账户</a></li>
            </ul>
        </div>
        <!-- 登录&未登录 -->
        <div class="login_info poa f14">
            <ul>
                <li class="first">
                    <!-- 如果登录 -->
                    <% if(nickName) { %>
                        <a href="javascript:;">用户 <%= nickName %></a>
                        <a class="login_out" id="J_loginOut" href="javascript:;">退出</a>
                    <%} else { %>
                        <a href="javascript:;">大额充值</a>
                    <% } %>
                </li>
                <li>
                    <a href="javascript:;">新手指引</a>
                </li>
                <li class="last">
                    <a href="javascript:;">关于小鸽</a>
                </li>
            </ul>
        </div>
    </div>
</div>
