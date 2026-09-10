// SINH TU DONG boi tools/build_vocab.py - KHONG SUA TAY.
window.VOCAB = {
 "decks": [
  {
   "id": "hydro",
   "name": "Thủy văn & Dòng chảy",
   "icon": "💧",
   "desc": "Lưu vực, dòng chảy, hồ chứa, hạn hán"
  },
  {
   "id": "flood",
   "name": "Lũ lụt & Thiệt hại",
   "icon": "🌊",
   "desc": "Ngập lụt, sạt lở, hàm thiệt hại"
  },
  {
   "id": "climate",
   "name": "Khí hậu & Kịch bản",
   "icon": "🌡️",
   "desc": "Biến đổi khí hậu, mô hình, hiệu chỉnh"
  },
  {
   "id": "drr",
   "name": "Thiên tai & Xã hội",
   "icon": "🏘️",
   "desc": "Rủi ro, tổn thương, nghèo, sinh kế"
  },
  {
   "id": "geo",
   "name": "GIS, Viễn thám & Dữ liệu",
   "icon": "🛰️",
   "desc": "Bản đồ, mô hình hoá, độ chính xác"
  },
  {
   "id": "academic",
   "name": "Tiếng Anh học thuật",
   "icon": "📄",
   "desc": "Động từ và mẫu câu trong paper"
  }
 ],
 "cards": [
  {
   "id": "develop",
   "term": "develop",
   "pos": "v",
   "vi": "phát triển, xây dựng",
   "en": "to create or improve something over time",
   "deck": "academic",
   "freq": 121,
   "ex": "Approximately 67% of the studies were conducted in developed countries, with the remaining 33% performed in developing countries.",
   "src": "A Systematic Review of Flood Damage Assessment: Insight for the Data-Scarce Regions",
   "ipa": "dɪˈvɛləp",
   "note": {
    "d": "Khoảng 67% số nghiên cứu được tiến hành ở các nước phát triển, 33% còn lại thực hiện ở các nước đang phát triển.",
    "y": "Xuất hiện hai dạng phân từ: developed countries (nước đã phát triển) và developing countries (nước đang phát triển)."
   }
  },
  {
   "id": "estimate",
   "term": "estimate",
   "pos": "v",
   "vi": "ước tính",
   "en": "to work out an approximate value",
   "deck": "academic",
   "freq": 93,
   "ex": "This provides a best estimate of the weather at any given place and time as well as an estimate of its confidence and uncertainty.",
   "src": "Towards a more reliable historical reanalysis: Improvements for version 3 of the Twentieth Century Reanalysis system",
   "ipa": "ˈɛstəmət",
   "note": {
    "d": "Cách này cho ta ước tính tốt nhất về thời tiết tại một địa điểm và thời điểm bất kỳ, kèm theo mức độ tin cậy và độ bất định của ước tính đó.",
    "y": "Xuất hiện hai lần ở dạng danh từ: a best estimate of the weather và an estimate of its confidence."
   }
  },
  {
   "id": "present",
   "term": "present",
   "pos": "v",
   "vi": "trình bày",
   "en": "to show or explain something to others",
   "deck": "academic",
   "freq": 62,
   "ex": "We present new analysis that tentatively links increases in climate variability with increasing food insecurity in the future.",
   "src": "Climate variability and vulnerability to climate change: a review",
   "ipa": "ˈprɛzənt",
   "note": {
    "d": "Chúng tôi đưa ra phân tích mới, bước đầu cho thấy dao động khí hậu gia tăng có liên hệ với mất an ninh lương thực trong tương lai.",
    "y": "«We present new analysis» — động từ mở đầu quen thuộc khi tác giả giới thiệu đóng góp mới của mình."
   }
  },
  {
   "id": "based-on",
   "term": "based on",
   "pos": "phr",
   "vi": "dựa trên",
   "en": "using something as a foundation",
   "deck": "academic",
   "freq": 60,
   "ex": "As with the original E‐OBS data set, the ensemble version is based on the station series collated as part of the ECA&D initiative.",
   "src": "An Ensemble Version of the E‐OBS Temperature and Precipitation Data Sets",
   "ipa": "beɪst ɑn",
   "note": {
    "d": "Cũng như bộ dữ liệu E-OBS gốc, phiên bản tổ hợp được dựng trên các chuỗi số liệu trạm quan trắc do sáng kiến ECA&D tập hợp.",
    "y": "«is based on the station series» — cấu trúc bị động, nói dữ liệu tổ hợp được dựng từ số liệu trạm thật."
   }
  },
  {
   "id": "assess",
   "term": "assess",
   "pos": "v",
   "vi": "đánh giá",
   "en": "to judge the nature or level of something carefully",
   "deck": "academic",
   "freq": 53,
   "ex": "In landslide-prone areas, the vulnerability of housing structures is assessed so that adaptation methods can be introduced to reduce risk.",
   "src": "Assessment of physical vulnerability of buildings and socio-economic vulnerability of residents to rainfall induced cut slope failures: A case study in central highlands, Sri Lanka",
   "ipa": "əˈsɛs",
   "note": {
    "d": "Ở những vùng dễ sạt lở, người ta đánh giá mức dễ tổn thương của kết cấu nhà ở để đưa ra các biện pháp thích ứng nhằm giảm rủi ro.",
    "y": "«the vulnerability ... is assessed» — bị động, chủ thể đánh giá không quan trọng bằng việc đánh giá được làm."
   }
  },
  {
   "id": "framework",
   "term": "framework",
   "pos": "n",
   "vi": "khung (lý thuyết, phương pháp)",
   "en": "a structure of ideas or steps that organises the work",
   "deck": "academic",
   "freq": 49,
   "ex": "This article describes the non‐hydrostatic dynamical core developed for the ICOsahedral Non‐hydrostatic (ICON) modelling framework.",
   "src": "The ICON (ICOsahedral Non‐hydrostatic) modelling framework of DWD and MPI‐M : Description of the non‐hydrostatic dynamical core",
   "ipa": "ˈfreɪmˌwɜrk",
   "note": {
    "d": "Bài báo mô tả lõi động lực phi thuỷ tĩnh được phát triển cho khung mô hình ICON (lưới hai mươi mặt, phi thuỷ tĩnh).",
    "y": "«the ICON modelling framework» — khung mô hình, tức bộ khung phần mềm và lý thuyết để dựng mô hình."
   }
  },
  {
   "id": "compare",
   "term": "compare",
   "pos": "v",
   "vi": "so sánh",
   "en": "to look at similarities and differences",
   "deck": "academic",
   "freq": 45,
   "ex": "We compare ensembles of water supply and demand projections from 10 global hydrological models and six global gridded crop models.",
   "src": "Constraints and potentials of future irrigation water availability on agricultural production under climate change",
   "ipa": "kəmˈpɛr",
   "note": {
    "d": "Chúng tôi so sánh các tổ hợp dự tính về cung và cầu nước từ 10 mô hình thuỷ văn toàn cầu và sáu mô hình cây trồng dạng lưới toàn cầu.",
    "y": "Động từ chính của câu, cho biết đây là nghiên cứu so sánh giữa nhiều mô hình chứ không chạy một mô hình."
   }
  },
  {
   "id": "identify",
   "term": "identify",
   "pos": "v",
   "vi": "xác định, nhận diện",
   "en": "to recognise and name something",
   "deck": "academic",
   "freq": 45,
   "ex": "We identify an autocyclic process in a sedimentary system driving large-scale channel migration in decadal to multidecadal cycles.",
   "src": "Large-Scale Channel Migration in the Sittang River Estuary",
   "ipa": "aɪˈdɛntəˌfaɪ",
   "note": {
    "d": "Chúng tôi xác định được một quá trình tự tuần hoàn trong hệ trầm tích, gây ra dịch chuyển lòng sông quy mô lớn theo chu kỳ hàng chục năm.",
    "y": "«We identify an autocyclic process» — động từ công bố phát hiện: xác định được một quá trình."
   }
  },
  {
   "id": "due-to",
   "term": "due to",
   "pos": "phr",
   "vi": "do, vì",
   "en": "caused by",
   "deck": "academic",
   "freq": 44,
   "ex": "Sea‐level rise due to both climate change and non‐climatic factors threatens coastal settlements, infrastructure, and ecosystems.",
   "src": "Probabilistic 21st and 22nd century sea‐level projections at a global network of tide‐gauge sites",
   "ipa": "du tu",
   "note": {
    "d": "Nước biển dâng — do cả biến đổi khí hậu lẫn các yếu tố phi khí hậu — đang đe doạ các khu dân cư ven biển, cơ sở hạ tầng và hệ sinh thái.",
    "y": "«due to both climate change and non-climatic factors» — nêu hai nhóm nguyên nhân của nước biển dâng."
   }
  },
  {
   "id": "apply",
   "term": "apply",
   "pos": "v",
   "vi": "áp dụng",
   "en": "to put a method or rule into practice",
   "deck": "academic",
   "freq": 43,
   "ex": "Next, methods are applied to phase 5 of the Coupled Model Intercomparison Project (CMIP5) daily precipitation projections over Canada.",
   "src": "Bias Correction of GCM Precipitation by Quantile Mapping: How Well Do Methods Preserve Changes in Quantiles and Extremes?",
   "ipa": "əˈplaɪ",
   "note": {
    "d": "Tiếp đó, các phương pháp được áp dụng cho dự tính giáng thủy ngày của Dự án So sánh Mô hình Ghép đôi giai đoạn 5 (CMIP5) trên lãnh thổ Canada.",
    "y": "«methods are applied to ...» — cấu trúc chuẩn khi nói áp dụng phương pháp lên một bộ dữ liệu."
   }
  },
  {
   "id": "significant",
   "term": "significant",
   "pos": "adj",
   "vi": "có ý nghĩa (thống kê); đáng kể",
   "en": "large enough to be unlikely to be due to chance",
   "deck": "academic",
   "freq": 41,
   "ex": "The results showed that the natural drainage network plays a significant role in determining landslide occurrence and distribution.",
   "src": "Landslide susceptibility mapping of the Sera River Basin using logistic regression model",
   "ipa": "səɡˈnɪfɪkənt",
   "note": {
    "d": "Kết quả cho thấy mạng lưới thoát nước tự nhiên đóng vai trò quan trọng trong việc quyết định nơi xảy ra và cách phân bố của sạt lở đất.",
    "y": "«plays a significant role» — ở đây nghĩa là vai trò quan trọng, chưa phải nghĩa thống kê."
   }
  },
  {
   "id": "integrate",
   "term": "integrate",
   "pos": "v",
   "vi": "tích hợp",
   "en": "to combine parts into one working whole",
   "deck": "academic",
   "freq": 37,
   "ex": "Integrating biophysical and socio-economic factors for land-use and land-cover change projection in agricultural economic regions.",
   "src": "Integrating biophysical and socio-economic factors for land-use and land-cover change projection in agricultural economic regions",
   "ipa": "ˈɪntəˌɡreɪt",
   "note": {
    "d": "Tích hợp các yếu tố sinh - địa - lý và kinh tế - xã hội để dự tính thay đổi sử dụng đất và lớp phủ đất ở các vùng kinh tế nông nghiệp.",
    "y": "Dạng V-ing mở đầu tên bài: tích hợp hai nhóm yếu tố vốn thường được nghiên cứu tách rời."
   }
  },
  {
   "id": "require",
   "term": "require",
   "pos": "v",
   "vi": "đòi hỏi, cần",
   "en": "to need something as a condition",
   "deck": "academic",
   "freq": 35,
   "ex": "Detailed studies of snow cover processes require models that offer a fine description of the snow cover properties.",
   "src": "The detailed snowpack scheme Crocus and its implementation in SURFEX v7.2",
   "ipa": "ˌriˈkwaɪər",
   "note": {
    "d": "Nghiên cứu chi tiết các quá trình của lớp phủ tuyết đòi hỏi những mô hình mô tả thật tinh vi các đặc tính của lớp tuyết.",
    "y": "«Detailed studies ... require models that ...» — nêu điều kiện cần: muốn nghiên cứu chi tiết thì phải có mô hình chi tiết."
   }
  },
  {
   "id": "indicate",
   "term": "indicate",
   "pos": "v",
   "vi": "cho thấy, chỉ ra",
   "en": "to show or point to a fact",
   "deck": "academic",
   "freq": 34,
   "ex": "Thus, KGE values greater than −0.41 indicate that a model improves upon the mean flow benchmark – even if the model's KGE value is negative.",
   "src": "Technical note: Inherent benchmark or not? Comparing Nash–Sutcliffe and Kling–Gupta efficiency scores",
   "ipa": "ˈɪndəˌkeɪt",
   "note": {
    "d": "Như vậy, giá trị KGE lớn hơn −0,41 cho thấy mô hình đã tốt hơn mốc so sánh là dòng chảy trung bình — kể cả khi KGE của mô hình vẫn âm.",
    "y": "«KGE values greater than −0.41 indicate that ...» — số liệu làm chủ ngữ cho indicate, rất thường gặp khi diễn giải kết quả."
   }
  },
  {
   "id": "suggest",
   "term": "suggest",
   "pos": "v",
   "vi": "gợi ý, cho thấy",
   "en": "to put forward an idea, or to point to a conclusion",
   "deck": "academic",
   "freq": 32,
   "ex": "We found that participants used DIAS in subsequent studies and work, thus suggesting that the Program had long-lasting effects.",
   "src": "Design and Implementation of a Training Course on Big Data Use in Water Management",
   "ipa": "səˈdʒɛst",
   "note": {
    "d": "Chúng tôi thấy học viên tiếp tục dùng DIAS trong các nghiên cứu và công việc về sau, cho thấy chương trình có tác dụng lâu dài.",
    "y": "«thus suggesting that ...» — kết luận thận trọng: dữ liệu gợi ý điều đó chứ chưa chứng minh chắc chắn."
   }
  },
  {
   "id": "highlight",
   "term": "highlight",
   "pos": "v",
   "vi": "nhấn mạnh",
   "en": "to draw attention to something important",
   "deck": "academic",
   "freq": 28,
   "ex": "Our findings highlight how recurrent flooding not only entrenches poverty but also exacerbates disparities by disrupting education.",
   "src": "How recurrent floods create inequality in livelihood improvement through education",
   "ipa": "ˈhaɪˌlaɪt",
   "note": {
    "d": "Phát hiện của chúng tôi cho thấy lũ lặp đi lặp lại không chỉ khiến cái nghèo dai dẳng hơn mà còn khoét sâu bất bình đẳng do làm gián đoạn việc học hành.",
    "y": "«Our findings highlight how ...» — công thức mở đầu phần kết luận, nhấn mạnh điều phát hiện được."
   }
  },
  {
   "id": "observe",
   "term": "observe",
   "pos": "v",
   "vi": "quan sát",
   "en": "to watch and record what happens",
   "deck": "academic",
   "freq": 28,
   "ex": "The model was calibrated with observed discharge data for a 2011 flooding event and validated for flooding events in 2014 and 2015.",
   "src": "Consideration of the rainfall-runoff-inundation (RRI) model for flood mapping in a deltaic area of Myanmar",
   "ipa": "əbˈzɜrv",
   "note": {
    "d": "Mô hình được hiệu chỉnh bằng số liệu lưu lượng thực đo của trận ngập năm 2011 và được kiểm định với các trận ngập năm 2014 và 2015.",
    "y": "«observed discharge data» — số liệu thực đo tại trạm, dùng làm chuẩn để chỉnh mô hình."
   }
  },
  {
   "id": "examine",
   "term": "examine",
   "pos": "v",
   "vi": "xem xét kỹ",
   "en": "to look at something closely and in detail",
   "deck": "academic",
   "freq": 27,
   "ex": "We examine changes in the price of agricultural goods (which are labour intensive) as well as natural resources (which are not).",
   "src": "Commodity Price Shocks and Civil Conflict: Evidence from Colombia",
   "ipa": "ɪɡˈzæmɪn",
   "note": {
    "d": "Chúng tôi xem xét thay đổi giá của hàng nông sản (loại cần nhiều lao động) cũng như của tài nguyên thiên nhiên (loại không cần nhiều lao động).",
    "y": "«We examine changes in the price of ...» — động từ mở đầu quen thuộc khi nêu phạm vi nghiên cứu."
   }
  },
  {
   "id": "findings",
   "term": "findings",
   "pos": "n",
   "vi": "các phát hiện",
   "en": "the results that a study has produced",
   "deck": "academic",
   "freq": 27,
   "ex": "Our findings highlight how recurrent flooding not only entrenches poverty but also exacerbates disparities by disrupting education.",
   "src": "How recurrent floods create inequality in livelihood improvement through education",
   "ipa": "ˈfaɪndɪŋz",
   "note": {
    "d": "Phát hiện của chúng tôi cho thấy lũ lặp đi lặp lại không chỉ khiến cái nghèo dai dẳng hơn mà còn khoét sâu bất bình đẳng do làm gián đoạn việc học hành.",
    "y": "Luôn ở số nhiều khi nói về kết quả nghiên cứu; đứng làm chủ ngữ cho highlight."
   }
  },
  {
   "id": "conduct",
   "term": "conduct",
   "pos": "v",
   "vi": "tiến hành (khảo sát, thí nghiệm)",
   "en": "to organise and carry out an activity",
   "deck": "academic",
   "freq": 26,
   "ex": "Approximately 67% of the studies were conducted in developed countries, with the remaining 33% performed in developing countries.",
   "src": "A Systematic Review of Flood Damage Assessment: Insight for the Data-Scarce Regions",
   "ipa": "ˈkɑndəkt",
   "note": {
    "d": "Khoảng 67% số nghiên cứu được tiến hành ở các nước phát triển, 33% còn lại thực hiện ở các nước đang phát triển.",
    "y": "«studies were conducted» — dạng bị động chuẩn của văn phong học thuật khi nói nghiên cứu được tiến hành ở đâu."
   }
  },
  {
   "id": "evidence",
   "term": "evidence",
   "pos": "n",
   "vi": "bằng chứng",
   "en": "facts supporting a claim",
   "deck": "academic",
   "freq": 26,
   "ex": "Preliminary Insights into Economic Well-Being from a Geospatial Perspective: Empirical Evidence from 6 Counties in China.",
   "src": "Preliminary Insights into Economic Well-Being from a Geospatial Perspective: Empirical Evidence from 6 Counties in China",
   "ipa": "ˈɛvədəns",
   "note": {
    "d": "Những hiểu biết sơ bộ về mức sống nhìn từ góc độ địa không gian: bằng chứng thực nghiệm từ 6 huyện ở Trung Quốc.",
    "y": "«Empirical Evidence from 6 Counties» — bằng chứng lấy từ số liệu thực tế, không phải lập luận suông."
   }
  },
  {
   "id": "magnitude",
   "term": "magnitude",
   "pos": "n",
   "vi": "độ lớn",
   "en": "the size of a quantity or effect",
   "deck": "academic",
   "freq": 25,
   "ex": "This demonstrates the uncertainty of the frequency analysis for flood magnitude due to the employed bias-correction method.",
   "src": "Impact of Bias-Correction Methods in Assessing the Potential Flood Frequency Change in the Bago River",
   "ipa": "ˈmæɡnəˌtud",
   "note": {
    "d": "Điều này cho thấy độ bất định của phân tích tần suất đối với độ lớn trận lũ, bắt nguồn từ phương pháp hiệu chỉnh sai lệch đã dùng.",
    "y": "«flood magnitude» = độ lớn của trận lũ; phân tích tần suất chính là gắn độ lớn với chu kỳ lặp."
   }
  },
  {
   "id": "address",
   "term": "address",
   "pos": "v",
   "vi": "giải quyết (vấn đề)",
   "en": "to deal with a problem or question",
   "deck": "academic",
   "freq": 24,
   "ex": "Proposals to address this included improving dykes and early warning systems as well as offering compensation for lost earnings.",
   "src": "The Impact of the Thai Flood of 2011 on the Rural Poor Population Living on the Flood Plain",
   "ipa": "ˈæˌdrɛs",
   "note": {
    "d": "Các đề xuất để xử lý việc này gồm nâng cấp đê và hệ thống cảnh báo sớm, cũng như bồi thường phần thu nhập bị mất.",
    "y": "«Proposals to address this» — address đi với vấn đề, nghĩa là tìm cách xử lý nó."
   }
  },
  {
   "id": "case-study",
   "term": "case study",
   "pos": "n",
   "vi": "nghiên cứu điển hình",
   "en": "a detailed examination of one example",
   "deck": "academic",
   "freq": 23,
   "ex": "Assessment of potential impacts of climate and land use changes on stream flow: a case study of the Nam Xong watershed in Lao PDR.",
   "src": "Assessment of potential impacts of climate and land use changes on stream flow: a case study of the Nam Xong watershed in Lao PDR",
   "ipa": "keɪs ˈstʌdi",
   "note": {
    "d": "Đánh giá tác động tiềm tàng của biến đổi khí hậu và biến đổi sử dụng đất lên dòng chảy sông: nghiên cứu điển hình lưu vực Nam Xong, CHDCND Lào.",
    "y": "«a case study of the Nam Xong watershed» — nêu rõ nghiên cứu chỉ làm trên một lưu vực cụ thể."
   }
  },
  {
   "id": "demonstrate",
   "term": "demonstrate",
   "pos": "v",
   "vi": "chứng minh, cho thấy rõ",
   "en": "to show clearly that something is true",
   "deck": "academic",
   "freq": 23,
   "ex": "Different phase of soil conservation measures demonstrated the development of policies and techniques on soil erosion control.",
   "src": "SOIL EROSION, CONSERVATION, AND ECO‐ENVIRONMENT CHANGES IN THE LOESS PLATEAU OF CHINA",
   "ipa": "ˈdɛmənˌstreɪt",
   "note": {
    "d": "Các giai đoạn khác nhau của biện pháp bảo vệ đất cho thấy chính sách và kỹ thuật kiểm soát xói mòn đất đã tiến triển ra sao.",
    "y": "Chủ ngữ là sự vật (các giai đoạn biện pháp) chứ không phải người — cách dùng rất phổ biến trong abstract."
   }
  },
  {
   "id": "reveal",
   "term": "reveal",
   "pos": "v",
   "vi": "hé lộ, làm lộ ra",
   "en": "to make something previously unknown visible",
   "deck": "academic",
   "freq": 22,
   "ex": "Whether focused on crisis antecedents, outcomes, or managing a crisis, research has revealed a number of important findings.",
   "src": "Crises and Crisis Management: Integration, Interpretation, and Research Development",
   "ipa": "rɪˈvil",
   "note": {
    "d": "Dù tập trung vào nguyên nhân dẫn tới khủng hoảng, hậu quả của nó, hay cách ứng phó, các nghiên cứu đều đã chỉ ra nhiều phát hiện quan trọng.",
    "y": "«research has revealed a number of important findings» — dùng ở thì hiện tại hoàn thành để tổng kết cả một dòng nghiên cứu."
   }
  },
  {
   "id": "investigate",
   "term": "investigate",
   "pos": "v",
   "vi": "khảo sát, nghiên cứu",
   "en": "to examine something systematically to find facts",
   "deck": "academic",
   "freq": 21,
   "ex": "Then, contributions of catchment properties to N-leaching were investigated by spatial analysis using fine-scale terrain data.",
   "src": "Using GIS for assessing stream water chemistry in a forested watershed",
   "ipa": "ˌɪnˈvɛstəˌɡeɪt",
   "note": {
    "d": "Sau đó, đóng góp của các đặc trưng lưu vực vào lượng đạm rửa trôi được khảo sát bằng phân tích không gian trên dữ liệu địa hình chi tiết.",
    "y": "«were investigated by spatial analysis» — bị động, nhấn vào việc khảo sát chứ không phải ai khảo sát."
   }
  },
  {
   "id": "propose",
   "term": "propose",
   "pos": "v",
   "vi": "đề xuất",
   "en": "to put forward an idea or method for consideration",
   "deck": "academic",
   "freq": 21,
   "ex": "We propose a method for decisionmaking under uncertain global and regional changes called ‘Dynamic Adaptive Policy Pathways’.",
   "src": "Dynamic adaptive policy pathways: A method for crafting robust decisions for a deeply uncertain world",
   "ipa": "prəˈpoʊz",
   "note": {
    "d": "Chúng tôi đề xuất một phương pháp ra quyết định trong điều kiện thay đổi bất định ở quy mô toàn cầu và khu vực, gọi là «Lộ trình chính sách thích ứng động».",
    "y": "«We propose a method ... called ...» — công thức chuẩn để giới thiệu phương pháp mới kèm tên gọi."
   }
  },
  {
   "id": "explore",
   "term": "explore",
   "pos": "v",
   "vi": "khảo sát, tìm hiểu",
   "en": "to investigate a topic that is not yet well known",
   "deck": "academic",
   "freq": 19,
   "ex": "Their flood experience is also collected to explore the practical risk management solutions and preserve those as their local assets.",
   "src": "Measuring capacities and protecting communities: strengthening regional resilience in the flooded industrial area in Thailand",
   "ipa": "ɪkˈsplɔr",
   "note": {
    "d": "Kinh nghiệm ứng phó lũ của họ cũng được thu thập để tìm ra giải pháp quản lý rủi ro thiết thực và giữ lại chúng như một tài sản của địa phương.",
    "y": "«to explore the practical risk management solutions» — mục đích của việc thu thập kinh nghiệm người dân."
   }
  },
  {
   "id": "quantitative",
   "term": "quantitative",
   "pos": "adj",
   "vi": "mang tính định lượng",
   "en": "expressed in measurable numbers",
   "deck": "academic",
   "freq": 19,
   "ex": "Development of an Impact-Oriented Quantitative Coastal Inundation forecasting and early warning system with social and economic assessment.",
   "src": "Development of an Impact-Oriented Quantitative Coastal Inundation forecasting and early warning system with social and economic assessment",
   "ipa": "ˈkwɑntɪˌteɪtɪv",
   "note": {
    "d": "Xây dựng hệ thống dự báo và cảnh báo sớm ngập ven biển theo hướng định lượng, lấy tác động làm trọng tâm, có kèm đánh giá kinh tế - xã hội.",
    "y": "«Quantitative Coastal Inundation forecasting» — dự báo bằng con số cụ thể, không chỉ mô tả định tính."
   }
  },
  {
   "id": "derive",
   "term": "derive",
   "pos": "v",
   "vi": "suy ra, rút ra",
   "en": "to obtain something from a source by reasoning or calculation",
   "deck": "academic",
   "freq": 18,
   "ex": "From our results we first derived an original framework to measure how recurrent floods influence widening disparities within communities.",
   "src": "Accelerated widening of economic disparity due to recurrent floods",
   "ipa": "dərˈaɪv",
   "note": {
    "d": "Từ kết quả thu được, trước hết chúng tôi rút ra một khung phân tích mới để đo xem lũ lặp đi lặp lại làm giãn rộng bất bình đẳng trong cộng đồng như thế nào.",
    "y": "«we first derived an original framework» — rút ra khung phân tích TỪ kết quả, tức đi từ số liệu lên lý thuyết."
   }
  },
  {
   "id": "discuss",
   "term": "discuss",
   "pos": "v",
   "vi": "thảo luận, bàn về",
   "en": "to examine a topic in writing or speech",
   "deck": "academic",
   "freq": 18,
   "ex": "The most important components in CPMs such as physical parameterizations and dynamical formulations are discussed critically.",
   "src": "A review on regional convection‐permitting climate modeling: Demonstrations, prospects, and challenges",
   "ipa": "dɪˈskʌs",
   "note": {
    "d": "Những thành phần quan trọng nhất trong mô hình phân giải đối lưu, như tham số hoá vật lý và công thức động lực, được bàn luận một cách phê phán.",
    "y": "«are discussed critically» — bàn có phê phán, tức nêu cả điểm yếu chứ không chỉ mô tả."
   }
  },
  {
   "id": "qualitative",
   "term": "qualitative",
   "pos": "adj",
   "vi": "mang tính định tính",
   "en": "describing qualities rather than numbers",
   "deck": "academic",
   "freq": 18,
   "ex": "However, the method underpinning directed qualitative content analysis is insufficiently delineated in international literature.",
   "src": "Directed qualitative content analysis: the description and elaboration of its underpinning methods and data analysis process",
   "ipa": "ˈkwɑləˌteɪtɪv",
   "note": {
    "d": "Tuy nhiên, phương pháp làm nền cho phân tích nội dung định tính có định hướng lại chưa được mô tả rõ ràng trong tài liệu quốc tế.",
    "y": "«directed qualitative content analysis» — phân tích nội dung định tính có khung định hướng sẵn."
   }
  },
  {
   "id": "consistent",
   "term": "consistent",
   "pos": "adj",
   "vi": "nhất quán, phù hợp",
   "en": "in agreement, not contradicting",
   "deck": "academic",
   "freq": 17,
   "ex": "The increased frequency of events is consistent with increases in a genesis potential index based on monthly mean global model output.",
   "src": "Downscaling CMIP5 climate models shows increased tropical cyclone activity over the 21st century",
   "ipa": "kənˈsɪstənt",
   "note": {
    "d": "Tần suất sự kiện tăng lên là phù hợp với mức tăng của chỉ số tiềm năng hình thành bão, tính từ kết quả trung bình tháng của mô hình toàn cầu.",
    "y": "«is consistent with increases in ...» = phù hợp với, ăn khớp với — cách nói thận trọng, không khẳng định nhân quả."
   }
  },
  {
   "id": "generate",
   "term": "generate",
   "pos": "v",
   "vi": "tạo ra, sinh ra",
   "en": "to produce something",
   "deck": "academic",
   "freq": 17,
   "ex": "Generated data from the WII shows very low percentage of water withdrawals in several districts with respect to available resources.",
   "src": "Utilization of a GIS-Based Water Infrastructure Inventory for Water Resources Assessment at Local Level: A Case Study in Mountainous Area of Vietnam",
   "ipa": "ˈdʒɛnərˌeɪt",
   "note": {
    "d": "Dữ liệu do WII tạo ra cho thấy tỉ lệ nước khai thác ở một số huyện là rất thấp so với lượng tài nguyên sẵn có.",
    "y": "«Generated data from the WII» — phân từ quá khứ đứng trước danh từ: dữ liệu do công cụ WII sinh ra."
   }
  },
  {
   "id": "implication",
   "term": "implication",
   "pos": "n",
   "vi": "hàm ý, hệ quả",
   "en": "a likely consequence or meaning of a result",
   "deck": "academic",
   "freq": 17,
   "ex": "We review complementary streams of research in the resilience literature and explore their implications for studies of crisis.",
   "src": "Organizational Response to Adversity: Fusing Crisis Management and Resilience Research Streams",
   "ipa": "ˌɪmpləˈkeɪʃən",
   "note": {
    "d": "Chúng tôi điểm lại những dòng nghiên cứu bổ trợ nhau trong tài liệu về khả năng chống chịu và tìm hiểu hàm ý của chúng cho nghiên cứu khủng hoảng.",
    "y": "«explore their implications for studies of crisis» = hàm ý của chúng đối với việc nghiên cứu khủng hoảng."
   }
  },
  {
   "id": "analyse",
   "term": "analyse",
   "pos": "v",
   "vi": "phân tích",
   "en": "to examine something in detail, part by part",
   "deck": "academic",
   "freq": 16,
   "ex": "Updated analyses of temperature and precipitation extreme indices since the beginning of the twentieth century: The HadEX2 dataset.",
   "src": "Updated analyses of temperature and precipitation extreme indices since the beginning of the twentieth century: The HadEX2 dataset",
   "ipa": "ˈænəˌlaɪz",
   "note": {
    "d": "Cập nhật phân tích các chỉ số cực đoan về nhiệt độ và giáng thủy tính từ đầu thế kỷ 20: bộ dữ liệu HadEX2.",
    "y": "«Updated analyses» — dạng danh từ số nhiều của analyse, nghĩa là các phân tích đã được cập nhật."
   }
  },
  {
   "id": "outcome",
   "term": "outcome",
   "pos": "n",
   "vi": "kết quả",
   "en": "what results from a process",
   "deck": "academic",
   "freq": 16,
   "ex": "This paper uses historical fluctuations in temperature within countries to identify its effects on aggregate economic outcomes.",
   "src": "Temperature Shocks and Economic Growth: Evidence from the Last Half Century",
   "ipa": "ˈaʊtˌkʌm",
   "note": {
    "d": "Bài báo dùng biến động nhiệt độ trong quá khứ ở từng quốc gia để xác định ảnh hưởng của nhiệt độ lên các chỉ tiêu kinh tế tổng hợp.",
    "y": "«aggregate economic outcomes» = các chỉ tiêu kinh tế gộp lại ở cấp quốc gia, ví dụ GDP."
   }
  },
  {
   "id": "study-area",
   "term": "study area",
   "pos": "n",
   "vi": "khu vực nghiên cứu",
   "en": "the place a study investigates",
   "deck": "academic",
   "freq": 16,
   "ex": "For further research, the model was recommended for application in other study areas with different flood scales.",
   "src": "Development of Flood Damage Estimation Model for Agriculture – Case Study in the Bago Floodplain, Myanmar",
   "ipa": "ˈstʌdi ˈɛriə",
   "note": {
    "d": "Với hướng nghiên cứu tiếp theo, mô hình được khuyến nghị áp dụng cho những khu vực nghiên cứu khác có quy mô lũ khác nhau.",
    "y": "«other study areas with different flood scales» — khuyến nghị thử mô hình ở nơi khác để kiểm tra tính tổng quát."
   }
  },
  {
   "id": "methodology",
   "term": "methodology",
   "pos": "n",
   "vi": "phương pháp luận",
   "en": "the set of methods and the reasoning behind them",
   "deck": "academic",
   "freq": 14,
   "ex": "A methodology of GIS utilization for surveying and analyzing nitrogen leaching in headwaters was demonstrated in this paper.",
   "src": "Using GIS for assessing stream water chemistry in a forested watershed",
   "ipa": "ˌmɛθəˈdɑlədʒi",
   "note": {
    "d": "Bài báo trình bày một phương pháp luận sử dụng GIS để điều tra và phân tích lượng đạm rửa trôi ở vùng đầu nguồn.",
    "y": "Khác method: methodology là cả hệ thống cách làm và lý lẽ đằng sau, không phải một thao tác đơn lẻ."
   }
  },
  {
   "id": "obtain",
   "term": "obtain",
   "pos": "v",
   "vi": "thu được",
   "en": "to get a result or a dataset",
   "deck": "academic",
   "freq": 14,
   "ex": "The hydrological model (SWAT) was designed in order to obtain the values of monthly discharge for all potential hydropwer sites.",
   "src": "Estimation of Run-of-River Hydropower Potential in the Myitnge River Basin",
   "ipa": "əbˈteɪn",
   "note": {
    "d": "Mô hình thuỷ văn SWAT được thiết lập nhằm thu được giá trị lưu lượng tháng cho tất cả các vị trí có tiềm năng làm thuỷ điện.",
    "y": "«in order to obtain the values of monthly discharge» — nêu mục đích lập mô hình: để có được số liệu mình cần."
   }
  },
  {
   "id": "construct",
   "term": "construct",
   "pos": "v",
   "vi": "xây dựng (mô hình, chỉ số)",
   "en": "to build something from parts",
   "deck": "academic",
   "freq": 13,
   "ex": "The model was constructed by simulating each farmer’s movement decision during floods based on different hydrological and economic circumstances.",
   "src": "Exploring the effect of abrupt society transformation on flood responses among farmers in China using an agent-based model",
   "ipa": "kənˈstrʌkt",
   "note": {
    "d": "Mô hình được dựng bằng cách mô phỏng quyết định di chuyển của từng nông dân trong lúc lũ, ứng với các hoàn cảnh thuỷ văn và kinh tế khác nhau.",
    "y": "«The model was constructed by simulating ...» — dựng mô hình bằng cách mô phỏng từng tác nhân nhỏ."
   }
  },
  {
   "id": "empirical",
   "term": "empirical",
   "pos": "adj",
   "vi": "thực nghiệm",
   "en": "based on observed data rather than theory",
   "deck": "academic",
   "freq": 13,
   "ex": "Preliminary Insights into Economic Well-Being from a Geospatial Perspective: Empirical Evidence from 6 Counties in China.",
   "src": "Preliminary Insights into Economic Well-Being from a Geospatial Perspective: Empirical Evidence from 6 Counties in China",
   "ipa": "ˌɛmˈpɪrɪkəl",
   "note": {
    "d": "Những hiểu biết sơ bộ về mức sống nhìn từ góc độ địa không gian: bằng chứng thực nghiệm từ 6 huyện ở Trung Quốc.",
    "y": "Tính từ đi với evidence, study, result: dựa trên quan sát và số liệu thực đo."
   }
  },
  {
   "id": "focus-on",
   "term": "focus on",
   "pos": "phr",
   "vi": "tập trung vào",
   "en": "to give attention mainly to one thing",
   "deck": "academic",
   "freq": 13,
   "ex": "The methodologies described focus on the evaluation of the probabilities of occurrence of different landslide types with certain characteristics.",
   "src": "Recommendations for the quantitative analysis of landslide risk",
   "ipa": "ˈfoʊkəs ɑn",
   "note": {
    "d": "Các phương pháp được mô tả đều tập trung vào việc đánh giá xác suất xảy ra của những kiểu sạt lở khác nhau với các đặc trưng nhất định.",
    "y": "«The methodologies described focus on ...» — nêu trọng tâm; described là phân từ rút gọn của which are described."
   }
  },
  {
   "id": "furthermore",
   "term": "furthermore",
   "pos": "adv",
   "vi": "hơn nữa",
   "en": "used to add another supporting point",
   "deck": "academic",
   "freq": 13,
   "ex": "Furthermore, we identify needs for further research and scope for improvement in this kind of scenario-based exposure analysis.",
   "src": "Future Coastal Population Growth and Exposure to Sea-Level Rise and Coastal Flooding - A Global Assessment",
   "ipa": "ˈfɜrðərˌmɔr",
   "note": {
    "d": "Hơn nữa, chúng tôi chỉ ra những nội dung cần nghiên cứu thêm và phần còn có thể cải thiện trong kiểu phân tích phơi nhiễm theo kịch bản này.",
    "y": "Từ nối đứng đầu câu, thêm một ý nữa vào phần kết luận."
   }
  },
  {
   "id": "in-addition",
   "term": "in addition",
   "pos": "phr",
   "vi": "ngoài ra",
   "en": "as an extra point",
   "deck": "academic",
   "freq": 13,
   "ex": "In addition, we introduce the Digital Object Identifier (DOI), a valuable tool for promoting data and model integration and open science.",
   "src": "Data Integration and Analysis System (DIAS) as a Platform for Data and Model Integration: Cases in the Field of Water Resources Management and Disaster Risk Reduction",
   "ipa": "ɪn əˈdɪʃən",
   "note": {
    "d": "Ngoài ra, chúng tôi giới thiệu mã định danh số DOI, một công cụ hữu ích để thúc đẩy tích hợp dữ liệu, tích hợp mô hình và khoa học mở.",
    "y": "Cụm nối đầu câu, tương đương furthermore, dùng khi thêm một đóng góp nữa của bài báo."
   }
  },
  {
   "id": "insight",
   "term": "insight",
   "pos": "n",
   "vi": "hiểu biết sâu sắc",
   "en": "a clear, useful understanding of something",
   "deck": "academic",
   "freq": 13,
   "ex": "This article reviews the main insights from selected literature on risk perception, particularly in connection with natural hazards.",
   "src": "The Risk Perception Paradox—Implications for Governance and Communication of Natural Hazards",
   "ipa": "ˈɪnˌsaɪt",
   "note": {
    "d": "Bài báo này điểm lại những hiểu biết chính rút ra từ các tài liệu chọn lọc về nhận thức rủi ro, đặc biệt là trong mối liên hệ với hiểm hoạ tự nhiên.",
    "y": "«the main insights from selected literature» = những hiểu biết chính rút ra từ tài liệu, không phải ý kiến riêng."
   }
  },
  {
   "id": "survey-data",
   "term": "survey data",
   "pos": "n",
   "vi": "dữ liệu khảo sát",
   "en": "information collected by questioning people",
   "deck": "academic",
   "freq": 13,
   "ex": "While the model was developed using household survey data from Bago, Myanmar, the framework should be applicable to other regions as well.",
   "src": "Quantitative Evaluation of Flood Control Measures and Educational Support to Reduce Disaster Vulnerability of the Poor Based on Household-level Savings Estimates",
   "ipa": "sərˈveɪ ˈdeɪtə",
   "note": {
    "d": "Tuy mô hình được xây dựng từ dữ liệu khảo sát hộ gia đình ở Bago, Myanmar, khung phân tích này vẫn nên áp dụng được cho các vùng khác.",
    "y": "«household survey data from Bago» — dữ liệu điều tra hộ, nền của mô hình."
   }
  },
  {
   "id": "approximately",
   "term": "approximately",
   "pos": "adv",
   "vi": "khoảng, xấp xỉ",
   "en": "close to but not exactly",
   "deck": "academic",
   "freq": 12,
   "ex": "Approximately 67% of the studies were conducted in developed countries, with the remaining 33% performed in developing countries.",
   "src": "A Systematic Review of Flood Damage Assessment: Insight for the Data-Scarce Regions",
   "ipa": "əˈprɑksəmətli",
   "note": {
    "d": "Khoảng 67% số nghiên cứu được tiến hành ở các nước phát triển, 33% còn lại thực hiện ở các nước đang phát triển.",
    "y": "Đứng trước con số 67% để nói đây là số làm tròn, không phải con số chính xác tuyệt đối."
   }
  },
  {
   "id": "constraint",
   "term": "constraint",
   "pos": "n",
   "vi": "ràng buộc",
   "en": "a limit on what is possible",
   "deck": "academic",
   "freq": 12,
   "ex": "Water scarcity has become a major constraint to socio-economic development and a threat to livelihood in increasing parts of the world.",
   "src": "Water scarcity assessments in the past, present, and future",
   "ipa": "kənˈstreɪnt",
   "note": {
    "d": "Khan hiếm nước đã trở thành một ràng buộc lớn với phát triển kinh tế - xã hội và là mối đe doạ với sinh kế ở ngày càng nhiều nơi trên thế giới.",
    "y": "«a major constraint to socio-economic development» — thứ chặn đường phát triển; constraint to something."
   }
  },
  {
   "id": "in-terms-of",
   "term": "in terms of",
   "pos": "phr",
   "vi": "xét về mặt",
   "en": "measured or described by a particular aspect",
   "deck": "academic",
   "freq": 12,
   "ex": "In terms of both climatological averages and extreme values, the new version of E‐OBS is broadly comparable to the earlier version.",
   "src": "An Ensemble Version of the E‐OBS Temperature and Precipitation Data Sets",
   "ipa": "ɪn tɜrmz ʌv",
   "note": {
    "d": "Xét cả về giá trị trung bình khí hậu lẫn giá trị cực trị, phiên bản E-OBS mới nhìn chung tương đương với phiên bản trước.",
    "y": "«In terms of both ... and ...» — cụm mở đầu nêu tiêu chí so sánh trước khi đưa nhận định."
   }
  },
  {
   "id": "robust",
   "term": "robust",
   "pos": "adj",
   "vi": "vững, ổn định trước nhiễu",
   "en": "still working well under changed or difficult conditions",
   "deck": "academic",
   "freq": 12,
   "ex": "The estimated decrease in burned area remained robust after adjusting for precipitation variability and was largest in savannas.",
   "src": "A human-driven decline in global burned area",
   "ipa": "roʊˈbʌst",
   "note": {
    "d": "Mức giảm diện tích cháy ước tính vẫn vững sau khi đã hiệu chỉnh theo biến động lượng mưa, và lớn nhất ở vùng xavan.",
    "y": "«remained robust after adjusting for ...» — kết quả không đổi dù đã loại trừ yếu tố gây nhiễu, dấu hiệu của kết luận đáng tin."
   }
  },
  {
   "id": "substantial",
   "term": "substantial",
   "pos": "adj",
   "vi": "đáng kể, lớn",
   "en": "large in size, value or importance",
   "deck": "academic",
   "freq": 12,
   "ex": "We find that affected suppliers impose substantial output losses on their customers, especially when they produce specific inputs.",
   "src": "Input Specificity and the Propagation of Idiosyncratic Shocks in Production Networks *",
   "ipa": "səbˈstænʃəl",
   "note": {
    "d": "Chúng tôi thấy rằng nhà cung ứng bị ảnh hưởng gây tổn thất sản lượng lớn cho khách hàng của họ, nhất là khi họ sản xuất những đầu vào chuyên biệt.",
    "y": "«substantial output losses» = tổn thất sản lượng lớn; substantial mạnh hơn considerable một chút."
   }
  },
  {
   "id": "summarize",
   "term": "summarize",
   "pos": "v",
   "vi": "tóm tắt",
   "en": "to state the main points briefly",
   "deck": "academic",
   "freq": 12,
   "ex": "This article gives an overview of DIAS and summarizes its application to climate change analysis and disaster risk reduction.",
   "src": "Data Integration and Analysis System (DIAS) Contributing to Climate Change Analysis and Disaster Risk Reduction",
   "ipa": "ˈsʌmərˌaɪz",
   "note": {
    "d": "Bài báo giới thiệu tổng quan về DIAS và tóm tắt việc ứng dụng hệ thống này trong phân tích biến đổi khí hậu và giảm nhẹ rủi ro thiên tai.",
    "y": "«gives an overview ... and summarizes its application» — hai động từ song song mô tả nội dung bài báo."
   }
  },
  {
   "id": "employ",
   "term": "employ",
   "pos": "v",
   "vi": "sử dụng (phương pháp)",
   "en": "to make use of a method or tool",
   "deck": "academic",
   "freq": 11,
   "ex": "A pseudo-global warming method using MIROC5 RCP 8.5 was employed to produce 12-km 30-y historical and future climate projections.",
   "src": "Impact of Bias-Correction Methods in Assessing the Potential Flood Frequency Change in the Bago River",
   "ipa": "ɛmˈplɔɪ",
   "note": {
    "d": "Phương pháp làm ấm toàn cầu giả định dựa trên MIROC5 kịch bản RCP 8.5 được dùng để tạo dự tính khí hậu 30 năm quá khứ và tương lai ở độ phân giải 12 km.",
    "y": "«was employed to produce ...» — nghĩa sử dụng một phương pháp, không phải tuyển dụng."
   }
  },
  {
   "id": "extent",
   "term": "extent",
   "pos": "n",
   "vi": "mức độ, quy mô",
   "en": "how far something reaches",
   "deck": "academic",
   "freq": 11,
   "ex": "Recently, global landslide databases have shown the extent to which landslides impact on society and identified areas most at risk.",
   "src": "Global fatal landslide occurrence from 2004 to 2016",
   "ipa": "ɪkˈstɛnt",
   "note": {
    "d": "Gần đây, các cơ sở dữ liệu sạt lở toàn cầu đã cho thấy sạt lở tác động tới xã hội tới mức nào và xác định được những vùng rủi ro cao nhất.",
    "y": "«the extent to which ...» = mức độ mà ... — cấu trúc hay gặp khi muốn nói «tới đâu, tới mức nào»."
   }
  },
  {
   "id": "limitation",
   "term": "limitation",
   "pos": "n",
   "vi": "hạn chế (của nghiên cứu)",
   "en": "a weakness or boundary of what the study can show",
   "deck": "academic",
   "freq": 11,
   "ex": "A limitation of the study includes a low response rate for both surveys (below 20%), making conclusions difficult to generalize.",
   "src": "International Journal Of Environmental Research And Public Health",
   "ipa": "ˌlɪmɪˈteɪʃən",
   "note": {
    "d": "Một hạn chế của nghiên cứu là tỉ lệ phản hồi của cả hai cuộc khảo sát đều thấp (dưới 20%), khiến kết luận khó khái quát hoá.",
    "y": "«A limitation of the study includes ...» — mục tự nêu điểm yếu, phần bắt buộc của một abstract trung thực."
   }
  },
  {
   "id": "novel",
   "term": "novel",
   "pos": "adj",
   "vi": "mới, chưa từng có",
   "en": "new and different from what existed before",
   "deck": "academic",
   "freq": 11,
   "ex": "Here, we show a novel method for estimating income levels of individual building in urban and peri-urban rural areas.",
   "src": "Estimating the level of income in individual buildings using data from household interview surveys and satellite imagery: Case study in Myanmar and Nicaragua",
   "ipa": "ˈnɑvəl",
   "note": {
    "d": "Ở đây chúng tôi trình bày một phương pháp mới để ước tính mức thu nhập của từng ngôi nhà ở khu đô thị và vùng nông thôn ven đô.",
    "y": "«a novel method» = phương pháp mới; novel mạnh hơn new, hàm ý chưa ai làm."
   }
  },
  {
   "id": "quantify",
   "term": "quantify",
   "pos": "v",
   "vi": "định lượng",
   "en": "to express something as a number or amount",
   "deck": "academic",
   "freq": 11,
   "ex": "We further advocate that uncertainties in the landslide projections must be quantified and communicated to decision makers and the public.",
   "src": "Landslides in a changing climate",
   "ipa": "ˈkwɑntɪˌfaɪ",
   "note": {
    "d": "Chúng tôi còn cho rằng độ bất định trong các dự tính sạt lở phải được định lượng và truyền đạt tới người ra quyết định lẫn công chúng.",
    "y": "«must be quantified and communicated» — không chỉ biết là có bất định, mà phải đo được rồi nói ra."
   }
  },
  {
   "id": "comprehensive",
   "term": "comprehensive",
   "pos": "adj",
   "vi": "toàn diện",
   "en": "covering all or nearly all aspects",
   "deck": "academic",
   "freq": 10,
   "ex": "This initial meta-analysis sets the stage for more comprehensive meta-analysis to revise PEC as new PMs and more data become available.",
   "src": "Hydrologic and Water Quality Models: Performance Measures and Evaluation Criteria",
   "ipa": "ˌkɑmpriˈhɛnsɪv",
   "note": {
    "d": "Phân tích tổng hợp bước đầu này đặt nền cho những phân tích tổng hợp toàn diện hơn, để cập nhật PEC khi có thêm mô hình và dữ liệu mới.",
    "y": "«more comprehensive meta-analysis» — toàn diện hơn, tức bao quát nhiều nghiên cứu và dữ liệu hơn lần đầu."
   }
  },
  {
   "id": "consideration",
   "term": "consideration",
   "pos": "n",
   "vi": "sự cân nhắc, xem xét",
   "en": "careful thought about something before deciding",
   "deck": "academic",
   "freq": 10,
   "ex": "This paper explores the consideration of topographical factors with and without hydrological factors as approaches for optimized site selection.",
   "src": "A systematic decision support tool for robust hydropower site selection in poorly gauged basins",
   "ipa": "kənˌsɪdərˈeɪʃən",
   "note": {
    "d": "Bài báo xem xét việc cân nhắc các yếu tố địa hình, có kèm và không kèm yếu tố thuỷ văn, như những hướng tiếp cận để chọn vị trí tối ưu.",
    "y": "«the consideration of topographical factors» — việc đưa các yếu tố địa hình vào xem xét."
   }
  },
  {
   "id": "implement",
   "term": "implement",
   "pos": "v",
   "vi": "triển khai, thực thi",
   "en": "to put a plan or method into action",
   "deck": "academic",
   "freq": 10,
   "ex": "We outline the major financial and governance challenges to implementing NbS at scale, highlighting avenues for further research.",
   "src": "Understanding the value and limits of nature-based solutions to climate change and other global challenges",
   "ipa": "ˈɪmpləmənt",
   "note": {
    "d": "Chúng tôi phác ra những rào cản lớn về tài chính và về quản trị khi nhân rộng giải pháp thuận thiên, đồng thời chỉ ra hướng nghiên cứu tiếp theo.",
    "y": "«challenges to implementing NbS» — sau to ở đây là danh động từ, vì challenge to doing something."
   }
  },
  {
   "id": "perform",
   "term": "perform",
   "pos": "v",
   "vi": "thực hiện",
   "en": "to carry out an action or analysis",
   "deck": "academic",
   "freq": 10,
   "ex": "Approximately 67% of the studies were conducted in developed countries, with the remaining 33% performed in developing countries.",
   "src": "A Systematic Review of Flood Damage Assessment: Insight for the Data-Scarce Regions",
   "ipa": "pərˈfɔrm",
   "note": {
    "d": "Khoảng 67% số nghiên cứu được tiến hành ở các nước phát triển, 33% còn lại thực hiện ở các nước đang phát triển.",
    "y": "«performed in developing countries» — dùng thay conducted ở vế sau để tránh lặp từ, nghĩa tương đương."
   }
  },
  {
   "id": "whereas",
   "term": "whereas",
   "pos": "adv",
   "vi": "trong khi đó (đối lập)",
   "en": "used to contrast two facts",
   "deck": "academic",
   "freq": 10,
   "ex": "The average consumer in the United States has a WF of 2,842 m(3)/y, whereas the average citizens in China and India have WFs of 1,071 and 1,089 m(3)/y, respectively.",
   "src": "The water footprint of humanity",
   "ipa": "wɛˈræz",
   "note": {
    "d": "Một người tiêu dùng trung bình ở Mỹ có dấu chân nước 2.842 m³/năm, trong khi con số đó ở người dân Trung Quốc và Ấn Độ lần lượt là 1.071 và 1.089 m³/năm.",
    "y": "Nối hai vế đối lập trong cùng một câu: Mỹ một đằng, Trung Quốc và Ấn Độ một nẻo."
   }
  },
  {
   "id": "conclude",
   "term": "conclude",
   "pos": "v",
   "vi": "kết luận",
   "en": "to state a final judgement from evidence",
   "deck": "academic",
   "freq": 9,
   "ex": "We conclude, therefore, that the current focus on risk perceptions as a means to explain and promote private flood mitigation behavior is not supported on either theoretical or empirical grounds.",
   "src": "A Review of Risk Perceptions and Other Factors that Influence Flood Mitigation Behavior",
   "ipa": "kənˈklud",
   "note": {
    "d": "Vì vậy chúng tôi kết luận rằng việc hiện nay lấy nhận thức rủi ro làm cách giải thích và thúc đẩy hành vi tự phòng chống lũ là không có cơ sở, cả về lý thuyết lẫn thực nghiệm.",
    "y": "«We conclude, therefore, that ...» — câu kết luận của abstract; therefore chèn giữa để nhấn rằng kết luận rút ra từ kết quả."
   }
  },
  {
   "id": "effectiveness",
   "term": "effectiveness",
   "pos": "n",
   "vi": "tính hiệu quả",
   "en": "how well something achieves its intended result",
   "deck": "academic",
   "freq": 9,
   "ex": "There are concerns over their reliability and cost-effectiveness compared to engineered alternatives, and their resilience to climate change.",
   "src": "Understanding the value and limits of nature-based solutions to climate change and other global challenges",
   "ipa": "ɪˈfɛktɪvnəs",
   "note": {
    "d": "Có những lo ngại về độ tin cậy và tính hiệu quả chi phí của chúng so với các giải pháp công trình, cũng như về khả năng chống chịu của chúng trước biến đổi khí hậu.",
    "y": "Trong «cost-effectiveness» — hiệu quả xét trên chi phí bỏ ra, tiêu chí thường dùng để so giải pháp thuận thiên với giải pháp công trình."
   }
  },
  {
   "id": "incorporate",
   "term": "incorporate",
   "pos": "v",
   "vi": "đưa vào, tích hợp vào",
   "en": "to include something as part of a whole",
   "deck": "academic",
   "freq": 9,
   "ex": "However, existing hazard maps have not incorporated the tidal effect and have not assessed the impact of these three future driving factors simultaneously.",
   "src": "Assessment of the tidal effect on flood inundation in a low‐lying river basin under composite future scenarios",
   "ipa": "ˌɪnˈkɔrpərˌeɪt",
   "note": {
    "d": "Tuy nhiên, các bản đồ hiểm hoạ hiện có chưa đưa yếu tố thuỷ triều vào và cũng chưa đánh giá đồng thời tác động của ba yếu tố chi phối tương lai này.",
    "y": "«have not incorporated the tidal effect» — chưa đưa yếu tố thuỷ triều vào bản đồ, một thiếu sót được nêu ra."
   }
  },
  {
   "id": "primarily",
   "term": "primarily",
   "pos": "adv",
   "vi": "chủ yếu",
   "en": "mainly, for the most part",
   "deck": "academic",
   "freq": 9,
   "ex": "All methods exhibited decreases in the flood peak discharge for 50-yr and 100-yr flood predictions, which may primarily be due to the MIROC5 GCM used.",
   "src": "Impact of Bias-Correction Methods in Assessing the Potential Flood Frequency Change in the Bago River",
   "ipa": "praɪˈmɛrəli",
   "note": {
    "d": "Mọi phương pháp đều cho thấy đỉnh lũ giảm ở dự báo lũ chu kỳ 50 năm và 100 năm, điều này chủ yếu có thể là do mô hình khí hậu MIROC5 đã dùng.",
    "y": "«may primarily be due to ...» — nêu nguyên nhân chính nhưng vẫn để ngỏ khả năng có nguyên nhân khác."
   }
  },
  {
   "id": "according-to",
   "term": "according to",
   "pos": "phr",
   "vi": "theo (nguồn nào đó)",
   "en": "as stated by a source",
   "deck": "academic",
   "freq": 8,
   "ex": "Which, according to PCP result, the observed rice production was 12% higher than potential in 1954, while it was 29% lower in 1931.",
   "src": "Flood protection in a changing society: a perspective from historical agriculture transformation during 1931 and 1954 floods in Yangtze River Basin, China",
   "ipa": "əˈkɔrdɪŋ tu",
   "note": {
    "d": "Theo kết quả PCP, sản lượng lúa thực tế năm 1954 cao hơn mức tiềm năng 12%, trong khi năm 1931 lại thấp hơn 29%.",
    "y": "«according to PCP result» — dẫn nguồn cho con số nêu ngay sau đó."
   }
  },
  {
   "id": "contribute-to",
   "term": "contribute to",
   "pos": "phr",
   "vi": "góp phần vào",
   "en": "to help cause or add to a result",
   "deck": "academic",
   "freq": 8,
   "ex": "We use physical factors like building area, elevation with rooftop images for transfer learning to contribute to the model’s accuracy.",
   "src": "A Machine Learning Approach to Map the Poor and Non-Poor Buildings in Developing Countries",
   "ipa": "kənˈtrɪbjut tu",
   "note": {
    "d": "Chúng tôi dùng các yếu tố vật lý như diện tích nhà, cao độ cùng với ảnh mái nhà để học chuyển giao, nhằm góp phần nâng độ chính xác của mô hình.",
    "y": "«contribute to the model's accuracy» — góp phần làm tăng độ chính xác; luôn có to đi kèm."
   }
  },
  {
   "id": "crucial",
   "term": "crucial",
   "pos": "adj",
   "vi": "then chốt",
   "en": "extremely important for the outcome",
   "deck": "academic",
   "freq": 8,
   "ex": "Very few previous studies have examined this crucial and challenging weather forecasting problem from the machine learning perspective.",
   "src": "Convolutional LSTM Network: A Machine Learning Approach for Precipitation Nowcasting",
   "ipa": "ˈkruʃəl",
   "note": {
    "d": "Rất ít nghiên cứu trước đây xem xét bài toán dự báo thời tiết then chốt và đầy thách thức này từ góc nhìn học máy.",
    "y": "Đi cùng challenging: bài toán vừa then chốt vừa khó — cách nói quen thuộc để biện minh cho nghiên cứu."
   }
  },
  {
   "id": "define",
   "term": "define",
   "pos": "v",
   "vi": "định nghĩa",
   "en": "to state exactly what a term means",
   "deck": "academic",
   "freq": 8,
   "ex": "Noncompliance, defined as drinking water that was not boiled, was 5% after the routine incident and 29.3% after the floods.",
   "src": "International Journal Of Environmental Research And Public Health",
   "ipa": "dɪˈfaɪn",
   "note": {
    "d": "Tỉ lệ không tuân thủ — định nghĩa là uống nước chưa đun sôi — là 5% sau sự cố thông thường và 29,3% sau các trận lũ.",
    "y": "«defined as drinking water that was not boiled» — định nghĩa chèn giữa câu, cho biết tác giả đo cái gì."
   }
  },
  {
   "id": "explicit",
   "term": "explicit",
   "pos": "adj",
   "vi": "rõ ràng, tường minh",
   "en": "stated openly and precisely",
   "deck": "academic",
   "freq": 8,
   "ex": "Most of the progress made in the last few decades has been on the quantification of water availability and use by applying spatially explicit models.",
   "src": "Water scarcity assessments in the past, present, and future",
   "ipa": "ɪkˈsplɪsət",
   "note": {
    "d": "Phần lớn tiến bộ vài thập kỷ qua nằm ở việc định lượng lượng nước sẵn có và lượng nước sử dụng, nhờ áp dụng các mô hình có phân bố không gian tường minh.",
    "y": "«spatially explicit models» — mô hình nói rõ cái gì xảy ra ở đâu, chứ không gộp cả vùng thành một số."
   }
  },
  {
   "id": "objective",
   "term": "objective",
   "pos": "n",
   "vi": "mục tiêu",
   "en": "the aim a study sets out to achieve",
   "deck": "academic",
   "freq": 8,
   "ex": "The objective of the study is to develop a GIS-based water infrastructure inventory (WII) for water resources assessment in the upper Srepok basin, Vietnam.",
   "src": "Utilization of a GIS-Based Water Infrastructure Inventory for Water Resources Assessment at Local Level: A Case Study in Mountainous Area of Vietnam",
   "ipa": "əbˈdʒɛktɪv",
   "note": {
    "d": "Mục tiêu của nghiên cứu là xây dựng bộ kiểm kê công trình cấp nước trên nền GIS (WII) phục vụ đánh giá tài nguyên nước ở thượng lưu vực Srepok, Việt Nam.",
    "y": "«The objective of the study is to ...» — câu nêu mục tiêu, thường nằm ngay đầu abstract."
   }
  },
  {
   "id": "outline",
   "term": "outline",
   "pos": "v",
   "vi": "phác thảo, trình bày sơ lược",
   "en": "to describe the main points briefly",
   "deck": "academic",
   "freq": 8,
   "ex": "We outline the major financial and governance challenges to implementing NbS at scale, highlighting avenues for further research.",
   "src": "Understanding the value and limits of nature-based solutions to climate change and other global challenges",
   "ipa": "ˈaʊtˌlaɪn",
   "note": {
    "d": "Chúng tôi phác ra những rào cản lớn về tài chính và về quản trị khi nhân rộng giải pháp thuận thiên, đồng thời chỉ ra hướng nghiên cứu tiếp theo.",
    "y": "«We outline the major ... challenges» — phác ra các ý lớn, không đi sâu từng cái."
   }
  },
  {
   "id": "as-a-result",
   "term": "as a result",
   "pos": "phr",
   "vi": "kết quả là",
   "en": "because of what was just stated",
   "deck": "academic",
   "freq": 7,
   "ex": "We also highlight opportunities as a result of the ongoing process and future impact on the disaster management system in the basin.",
   "src": "Development of a Hydrological Telemetry System in Bago River",
   "ipa": "æz ə rɪˈzʌlt",
   "note": {
    "d": "Chúng tôi cũng nêu bật những cơ hội nảy sinh từ tiến trình đang diễn ra và tác động tương lai của nó lên hệ thống quản lý thiên tai trong lưu vực.",
    "y": "«opportunities as a result of the ongoing process» — nêu quan hệ nhân quả: cơ hội sinh ra từ tiến trình đó."
   }
  },
  {
   "id": "in-contrast",
   "term": "in contrast",
   "pos": "phr",
   "vi": "ngược lại",
   "en": "used to mark an opposite case",
   "deck": "academic",
   "freq": 7,
   "ex": "The results showed that earth roads have suffered significant damage in contrast to Bituminous concrete (BC) roads.",
   "src": "Establishment of flood damage function model for rural roads: A case study in the Teesta River basin, Bangladesh",
   "ipa": "ɪn ˈkɑntræst",
   "note": {
    "d": "Kết quả cho thấy đường đất chịu hư hại đáng kể, trái ngược với đường bê tông nhựa.",
    "y": "«in contrast to Bituminous concrete roads» — cụm so sánh đối lập, làm nổi bật mức hư hại của đường đất."
   }
  },
  {
   "id": "relevant",
   "term": "relevant",
   "pos": "adj",
   "vi": "liên quan, thích đáng",
   "en": "closely connected to the matter at hand",
   "deck": "academic",
   "freq": 7,
   "ex": "This empirical analysis highlights a need for local-scale flood damage assessments, as offered in this article but seldom seen in other relevant literature.",
   "src": "Modeling the association between socioeconomic features and risk of flood damage: A local‐scale case study in Sri Lanka",
   "ipa": "ˈrɛləvənt",
   "note": {
    "d": "Phân tích thực nghiệm này cho thấy cần có những đánh giá thiệt hại lũ ở quy mô địa phương, như bài báo đưa ra nhưng ít thấy trong các tài liệu liên quan khác.",
    "y": "«other relevant literature» = các tài liệu liên quan khác; relevant luôn hàm ý liên quan tới vấn đề đang bàn."
   }
  },
  {
   "id": "respectively",
   "term": "respectively",
   "pos": "adv",
   "vi": "lần lượt (theo thứ tự đã nêu)",
   "en": "in the same order as the items just listed",
   "deck": "academic",
   "freq": 7,
   "ex": "The change in average seasonal flows under RCPs’ 4.5 and 8.5 are projected to vary from -29.1 to 130.7% and -49.4 to 171%, respectively.",
   "src": "The Impact of Climate Change on Reservoir Inflows Using Multi Climate-Model under RCPs’ Including Extreme Events—A Case of Mangla Dam, Pakistan",
   "ipa": "rɪˈspɛktɪvli",
   "note": {
    "d": "Mức thay đổi dòng chảy mùa trung bình theo kịch bản RCP 4.5 và 8.5 được dự tính dao động lần lượt từ -29,1 đến 130,7% và từ -49,4 đến 171%.",
    "y": "Buộc hai dãy số phải đọc theo đúng thứ tự: RCP 4.5 ứng với dãy đầu, RCP 8.5 ứng với dãy sau."
   }
  },
  {
   "id": "utilize",
   "term": "utilize",
   "pos": "v",
   "vi": "sử dụng, tận dụng",
   "en": "to make practical use of something",
   "deck": "academic",
   "freq": 7,
   "ex": "Arc Hydro is utilized by many organizations engaged in water resources and water basin management in the United States.",
   "src": "Outline of the water resources GIS application, Arc Hydro, and case studies in the United States",
   "ipa": "ˈjutəˌlaɪz",
   "note": {
    "d": "Arc Hydro đang được nhiều tổ chức làm về tài nguyên nước và quản lý lưu vực ở Mỹ sử dụng.",
    "y": "«is utilized by many organizations» — dạng bị động, trang trọng hơn use nhưng cùng nghĩa."
   }
  },
  {
   "id": "with-respect-to",
   "term": "with respect to",
   "pos": "phr",
   "vi": "đối với, xét theo",
   "en": "concerning or in relation to",
   "deck": "academic",
   "freq": 7,
   "ex": "Generated data from the WII shows very low percentage of water withdrawals in several districts with respect to available resources.",
   "src": "Utilization of a GIS-Based Water Infrastructure Inventory for Water Resources Assessment at Local Level: A Case Study in Mountainous Area of Vietnam",
   "ipa": "wɪð rɪˈspɛkt tu",
   "note": {
    "d": "Dữ liệu do WII tạo ra cho thấy tỉ lệ nước khai thác ở một số huyện là rất thấp so với lượng tài nguyên sẵn có.",
    "y": "«with respect to available resources» — so với lượng tài nguyên sẵn có; cụm này luôn dùng để nêu mốc so sánh."
   }
  },
  {
   "id": "argue",
   "term": "argue",
   "pos": "v",
   "vi": "lập luận",
   "en": "to give reasons for a position",
   "deck": "academic",
   "freq": 6,
   "ex": "It argues that their emergence and transformation are shaped by a historically contingent interplay of governance practices, land use policies, and socio-political dynamics.",
   "src": "The formation and transformation of informal settlements in Yangon, Myanmar: A historical analysis",
   "ipa": "ˈɑrɡju",
   "note": {
    "d": "Bài lập luận rằng sự hình thành và biến đổi của chúng được định hình bởi sự đan xen mang tính lịch sử giữa cách thức quản trị, chính sách sử dụng đất và các động lực chính trị - xã hội.",
    "y": "«It argues that ...» — chủ ngữ là bài báo chứ không phải tác giả; nghĩa là lập luận, không phải cãi nhau."
   }
  },
  {
   "id": "thereby",
   "term": "thereby",
   "pos": "adv",
   "vi": "nhờ đó, qua đó",
   "en": "as a result of that action",
   "deck": "academic",
   "freq": 6,
   "ex": "Typhoon-induced flood events result in enormous property losses and lives, thereby jeopardizing the prospects of sustainable societal growth.",
   "src": "Remote Sensing for Typhoon Flood Economic Loss Estimation: Current State and Digital Twin Prospects",
   "ipa": "ˈðɛrˈbaɪ",
   "note": {
    "d": "Những trận lũ do bão gây ra kéo theo thiệt hại tài sản và sinh mạng khổng lồ, qua đó đe doạ triển vọng phát triển bền vững của xã hội.",
    "y": "«thereby jeopardizing ...» — nối hệ quả gián tiếp, luôn đi với V-ing."
   }
  },
  {
   "id": "a-wide-range-of",
   "term": "a wide range of",
   "pos": "phr",
   "vi": "một loạt, nhiều loại",
   "en": "a large variety of",
   "deck": "academic",
   "freq": 5,
   "ex": "Designed to serve both research and operational needs, it has grown to offer a spectrum of options and capabilities for a wide range of applications.",
   "src": "The Weather Research and Forecasting Model: Overview, System Efforts, and Future Directions",
   "ipa": "ə waɪd reɪndʒ ʌv",
   "note": {
    "d": "Được thiết kế để phục vụ cả nhu cầu nghiên cứu lẫn nghiệp vụ, nó đã phát triển thành một hệ thống nhiều lựa chọn và tính năng cho rất nhiều loại ứng dụng.",
    "y": "«for a wide range of applications» — cụm định lượng mơ hồ, nghĩa là dùng được cho rất nhiều việc."
   }
  },
  {
   "id": "further-research",
   "term": "further research",
   "pos": "n",
   "vi": "nghiên cứu tiếp theo",
   "en": "work still needed on the topic",
   "deck": "academic",
   "freq": 5,
   "ex": "We outline the major financial and governance challenges to implementing NbS at scale, highlighting avenues for further research.",
   "src": "Understanding the value and limits of nature-based solutions to climate change and other global challenges",
   "ipa": "ˈfɜrðər riˈsɜrtʃ",
   "note": {
    "d": "Chúng tôi phác ra những rào cản lớn về tài chính và về quản trị khi nhân rộng giải pháp thuận thiên, đồng thời chỉ ra hướng nghiên cứu tiếp theo.",
    "y": "«highlighting avenues for further research» — chỉ ra hướng cho nghiên cứu tiếp theo, câu kết quen thuộc của abstract."
   }
  },
  {
   "id": "preliminary",
   "term": "preliminary",
   "pos": "adj",
   "vi": "sơ bộ",
   "en": "coming before the full or final version",
   "deck": "academic",
   "freq": 5,
   "ex": "Preliminary Insights into Economic Well-Being from a Geospatial Perspective: Empirical Evidence from 6 Counties in China.",
   "src": "Preliminary Insights into Economic Well-Being from a Geospatial Perspective: Empirical Evidence from 6 Counties in China",
   "ipa": "prɪˈlɪməˌnɛri",
   "note": {
    "d": "Những hiểu biết sơ bộ về mức sống nhìn từ góc độ địa không gian: bằng chứng thực nghiệm từ 6 huyện ở Trung Quốc.",
    "y": "«Preliminary Insights» — tác giả tự nhận kết quả mới là bước đầu, một cách nói khiêm tốn thường gặp."
   }
  },
  {
   "id": "previous-study",
   "term": "previous study",
   "pos": "n",
   "vi": "nghiên cứu trước đây",
   "en": "research published before the present one",
   "deck": "academic",
   "freq": 5,
   "ex": "Very few previous studies have examined this crucial and challenging weather forecasting problem from the machine learning perspective.",
   "src": "Convolutional LSTM Network: A Machine Learning Approach for Precipitation Nowcasting",
   "ipa": "ˈpriviəs ˈstʌdi",
   "note": {
    "d": "Rất ít nghiên cứu trước đây xem xét bài toán dự báo thời tiết then chốt và đầy thách thức này từ góc nhìn học máy.",
    "y": "«Very few previous studies have examined» — công thức chỉ ra khoảng trống nghiên cứu."
   }
  },
  {
   "id": "state-of-the-art",
   "term": "state-of-the-art",
   "pos": "adj",
   "vi": "tiên tiến nhất hiện nay",
   "en": "using the most advanced methods available",
   "deck": "academic",
   "freq": 5,
   "ex": "Using state-of-the-art poverty and flood data, our findings highlight the scale and priority regions for flood mitigation measures to support resilient development.",
   "src": "Flood exposure and poverty in 188 countries",
   "ipa": "ˌsteɪtəvðɪˈɑrt",
   "note": {
    "d": "Dùng dữ liệu nghèo đói và dữ liệu lũ tiên tiến nhất hiện nay, phát hiện của chúng tôi chỉ rõ quy mô và những vùng cần ưu tiên áp dụng biện pháp giảm nhẹ lũ để hỗ trợ phát triển bền vững.",
    "y": "«state-of-the-art poverty and flood data» — dữ liệu tốt nhất hiện có; luôn viết có gạch nối khi đứng trước danh từ."
   }
  },
  {
   "id": "underestimate",
   "term": "underestimate",
   "pos": "v",
   "vi": "đánh giá thấp hơn thực tế",
   "en": "to give a value that is too low",
   "deck": "academic",
   "freq": 5,
   "ex": "By concentrating on changes in climate means, the full impacts of climate change on biological and human systems are probably being seriously underestimated.",
   "src": "Climate variability and vulnerability to climate change: a review",
   "ipa": "ˈʌndərˈɛstəˌmeɪt",
   "note": {
    "d": "Do chỉ chăm chú vào thay đổi của giá trị trung bình khí hậu, có lẽ chúng ta đang đánh giá quá thấp toàn bộ tác động của biến đổi khí hậu lên hệ sinh học và hệ xã hội.",
    "y": "«are probably being seriously underestimated» — bị động tiếp diễn, ý là ngay lúc này ta vẫn đang đánh giá thấp."
   }
  },
  {
   "id": "compile",
   "term": "compile",
   "pos": "v",
   "vi": "tổng hợp, biên soạn",
   "en": "to gather material into one organised whole",
   "deck": "academic",
   "freq": 4,
   "ex": "Here, we compiled the largest global dataset to date of two diverse taxa in cities: birds (54 cities) and plants (110 cities).",
   "src": "A global analysis of the impacts of urbanization on bird and plant diversity reveals key anthropogenic drivers",
   "ipa": "kəmˈpaɪl",
   "note": {
    "d": "Ở đây, chúng tôi tổng hợp bộ dữ liệu toàn cầu lớn nhất cho tới nay về hai nhóm sinh vật khác nhau trong đô thị: chim (54 thành phố) và thực vật (110 thành phố).",
    "y": "«we compiled the largest global dataset» — gom góp và biên soạn dữ liệu từ nhiều nguồn thành một bộ."
   }
  },
  {
   "id": "criterion",
   "term": "criterion",
   "pos": "n",
   "vi": "tiêu chí",
   "en": "a standard used to judge or decide",
   "deck": "academic",
   "freq": 4,
   "ex": "The consistency of this model has been examined by estimating statistical parameters, such as the Akaike information criterion, correlation coefficient, and variance inflation factor.",
   "src": "Establishment of flood damage function model for rural roads: A case study in the Teesta River basin, Bangladesh",
   "ipa": "kraɪˈtɪriən",
   "note": {
    "d": "Tính nhất quán của mô hình này được kiểm tra bằng cách ước tính các tham số thống kê như tiêu chí thông tin Akaike, hệ số tương quan và hệ số phóng đại phương sai.",
    "y": "«the Akaike information criterion» — dạng số ít của criteria; tiêu chí AIC dùng để chọn mô hình gọn mà vẫn tốt."
   }
  },
  {
   "id": "illustrate",
   "term": "illustrate",
   "pos": "v",
   "vi": "minh hoạ",
   "en": "to make a point clear with an example or figure",
   "deck": "academic",
   "freq": 4,
   "ex": "While this trend was illustrated conceptually and qualitatively, this study offers the first quantitative evidence that floods widen the economic disparity gap between the rich and poor in flooded and non-flooded areas.",
   "src": "Do floods widen the economic disparity gap?",
   "ipa": "ˈɪləˌstreɪt",
   "note": {
    "d": "Trong khi xu hướng này mới chỉ được minh hoạ về mặt khái niệm và định tính, nghiên cứu của chúng tôi đưa ra bằng chứng định lượng đầu tiên cho thấy lũ làm giãn rộng khoảng cách kinh tế giữa người giàu và người nghèo ở vùng bị ngập và không bị ngập.",
    "y": "«was illustrated conceptually and qualitatively» — mới chỉ minh hoạ bằng khái niệm, chưa có số liệu; đó là khoảng trống bài này lấp."
   }
  },
  {
   "id": "nevertheless",
   "term": "nevertheless",
   "pos": "adv",
   "vi": "tuy nhiên, dù vậy",
   "en": "in spite of what was just said",
   "deck": "academic",
   "freq": 4,
   "ex": "Nevertheless, these studies developed poverty maps for study areas located in the same geographical region and did not map the location of poor people at the finest level (building level).",
   "src": "A Machine Learning Approach to Map the Poor and Non-Poor Buildings in Developing Countries",
   "ipa": "ˌnɛvərðəˈlɛs",
   "note": {
    "d": "Dù vậy, các nghiên cứu này chỉ lập bản đồ nghèo cho những khu vực nằm trong cùng một vùng địa lý và chưa xác định được vị trí người nghèo ở mức chi tiết nhất là từng ngôi nhà.",
    "y": "Từ nối đầu câu, thừa nhận các nghiên cứu trước có giá trị nhưng vẫn còn thiếu sót nêu ngay sau đó."
   }
  },
  {
   "id": "outperform",
   "term": "outperform",
   "pos": "v",
   "vi": "vượt trội hơn",
   "en": "to perform better than something else",
   "deck": "academic",
   "freq": 4,
   "ex": "A further assessment based on 5131 third-party test samples showed that the overall accuracy of CLCD outperforms that of MCD12Q1, ESACCI_LC, FROM_GLC and GlobeLand30.",
   "src": "The 30 m annual land cover dataset and its dynamics in China from 1990 to 2019",
   "ipa": "ˈaʊtpərˌfɔrm",
   "note": {
    "d": "Một đánh giá sâu hơn trên 5.131 mẫu kiểm tra độc lập cho thấy độ chính xác tổng thể của CLCD vượt trội so với MCD12Q1, ESACCI_LC, FROM_GLC và GlobeLand30.",
    "y": "«the overall accuracy of CLCD outperforms that of ...» — that of thay cho accuracy of, tránh lặp từ."
   }
  },
  {
   "id": "relatively",
   "term": "relatively",
   "pos": "adv",
   "vi": "tương đối",
   "en": "when compared with something else",
   "deck": "academic",
   "freq": 4,
   "ex": "It is possible to make sustainable improvements in the economic status of the poor with a relatively short-term intervention.",
   "src": "A multifaceted program causes lasting progress for the very poor: Evidence from six countries",
   "ipa": "ˈrɛlətɪvli",
   "note": {
    "d": "Hoàn toàn có thể cải thiện bền vững tình trạng kinh tế của người nghèo bằng một can thiệp tương đối ngắn hạn.",
    "y": "«a relatively short-term intervention» — tương đối ngắn, so ngầm với thời gian mà tác động kéo dài."
   }
  },
  {
   "id": "scope",
   "term": "scope",
   "pos": "n",
   "vi": "phạm vi",
   "en": "the extent of what a study covers",
   "deck": "academic",
   "freq": 4,
   "ex": "Furthermore, we identify needs for further research and scope for improvement in this kind of scenario-based exposure analysis.",
   "src": "Future Coastal Population Growth and Exposure to Sea-Level Rise and Coastal Flooding - A Global Assessment",
   "ipa": "skoʊp",
   "note": {
    "d": "Hơn nữa, chúng tôi chỉ ra những nội dung cần nghiên cứu thêm và phần còn có thể cải thiện trong kiểu phân tích phơi nhiễm theo kịch bản này.",
    "y": "«scope for improvement» = phần còn có thể cải thiện; scope ở đây là dư địa, không phải phạm vi nghiên cứu."
   }
  },
  {
   "id": "account-for",
   "term": "account for",
   "pos": "phr",
   "vi": "chiếm (tỉ lệ); giải thích cho",
   "en": "to make up a share of a total, or to explain a fact",
   "deck": "academic",
   "freq": 3,
   "ex": "Of these, 1.24 billion are located in South and East Asia, where China (395 million) and India (390 million) account for over one-third of global exposure.",
   "src": "Flood exposure and poverty in 188 countries",
   "ipa": "əˈkaʊnt fɔr",
   "note": {
    "d": "Trong số đó, 1,24 tỉ người sống ở Nam Á và Đông Á, nơi Trung Quốc (395 triệu) và Ấn Độ (390 triệu) chiếm hơn một phần ba tổng số người phơi nhiễm trên toàn cầu.",
    "y": "«account for over one-third of global exposure» — chiếm hơn một phần ba; đây là nghĩa tỉ lệ chứ không phải giải thích."
   }
  },
  {
   "id": "clarify",
   "term": "clarify",
   "pos": "v",
   "vi": "làm rõ",
   "en": "to make something easier to understand",
   "deck": "academic",
   "freq": 3,
   "ex": "In this study, because of the limitation of real-time data availability, the satellite-based precipitation was used for clarifying the characteristics of the flood.",
   "src": "Characteristics of the 2018 Bago River Flood of Myanmar",
   "ipa": "ˈklɛrəˌfaɪ",
   "note": {
    "d": "Trong nghiên cứu này, do hạn chế về dữ liệu thời gian thực, số liệu mưa từ vệ tinh đã được dùng để làm rõ đặc điểm của trận lũ.",
    "y": "«for clarifying the characteristics of the flood» — làm rõ đặc điểm trận lũ, mục đích của việc dùng số liệu vệ tinh."
   }
  },
  {
   "id": "confirm",
   "term": "confirm",
   "pos": "v",
   "vi": "xác nhận",
   "en": "to show that something is true",
   "deck": "academic",
   "freq": 3,
   "ex": "The successful completion of the individual assignments confirmed that the participants gained key skills related to the usage of DIAS and other tools.",
   "src": "Design and Implementation of a Training Course on Big Data Use in Water Management",
   "ipa": "kənˈfɜrm",
   "note": {
    "d": "Việc học viên hoàn thành tốt các bài tập cá nhân xác nhận rằng họ đã nắm được những kỹ năng cốt lõi khi sử dụng DIAS và các công cụ khác.",
    "y": "«The successful completion ... confirmed that ...» — sự việc làm chủ ngữ, khẳng định kết luận về kết quả đào tạo."
   }
  },
  {
   "id": "considerable",
   "term": "considerable",
   "pos": "adj",
   "vi": "đáng kể",
   "en": "large enough to matter",
   "deck": "academic",
   "freq": 3,
   "ex": "There is strong regional variability (most adverse impacts would be in Asia), and considerable variability between climate models.",
   "src": "The impacts of climate change on river flood risk at the global scale",
   "ipa": "kənˈsɪdərəbəl",
   "note": {
    "d": "Có sự khác biệt lớn giữa các vùng (tác động bất lợi nhất sẽ ở châu Á), và cũng khác biệt đáng kể giữa các mô hình khí hậu.",
    "y": "Đi cùng variability: mức chênh lệch giữa các mô hình là đáng kể, tức kết quả chưa thật chắc chắn."
   }
  },
  {
   "id": "discrepancy",
   "term": "discrepancy",
   "pos": "n",
   "vi": "sự sai lệch",
   "en": "a difference where agreement was expected",
   "deck": "academic",
   "freq": 3,
   "ex": "Although the simulated discharges showed good agreement with observed data, the simulated inundation extent showed some discrepancies due to lack of data.",
   "src": "Consideration of the rainfall-runoff-inundation (RRI) model for flood mapping in a deltaic area of Myanmar",
   "ipa": "dɪˈskrɛpənsi",
   "note": {
    "d": "Dù lưu lượng mô phỏng khớp tốt với số liệu thực đo, diện tích ngập mô phỏng vẫn có sai lệch nhất định do thiếu dữ liệu.",
    "y": "«showed some discrepancies» — có sai lệch giữa mô phỏng và thực tế; nêu thẳng cùng nguyên nhân là thiếu dữ liệu."
   }
  },
  {
   "id": "imply",
   "term": "imply",
   "pos": "v",
   "vi": "hàm ý",
   "en": "to suggest something without stating it directly",
   "deck": "academic",
   "freq": 3,
   "ex": "These results imply that N transport from Tanzawa forest ecosystems is related to hydrological and biological processes associated with catchment topography.",
   "src": "The influence of topography on the stream N concentration in the Tanzawa Mountains, Southern Kanto District, Japan",
   "ipa": "ˌɪmˈplaɪ",
   "note": {
    "d": "Những kết quả này hàm ý rằng lượng đạm di chuyển khỏi hệ sinh thái rừng Tanzawa có liên quan tới các quá trình thuỷ văn và sinh học gắn với địa hình lưu vực.",
    "y": "«These results imply that ...» — hàm ý, nhẹ hơn prove; thường dùng khi bằng chứng mới gián tiếp."
   }
  },
  {
   "id": "literature-review",
   "term": "literature review",
   "pos": "n",
   "vi": "tổng quan tài liệu",
   "en": "a survey of what has already been published",
   "deck": "academic",
   "freq": 3,
   "ex": "Our literature review shows, however, that, actually, this relationship is hardly observed in empirical studies.",
   "src": "A Review of Risk Perceptions and Other Factors that Influence Flood Mitigation Behavior",
   "ipa": "ˈlɪtərətʃər ˌriˈvju",
   "note": {
    "d": "Tuy nhiên, tổng quan tài liệu của chúng tôi cho thấy trên thực tế mối quan hệ này hầu như không quan sát được trong các nghiên cứu thực nghiệm.",
    "y": "«Our literature review shows» — kết quả rút ra từ việc đọc lại tài liệu, không phải từ số liệu mới."
   }
  },
  {
   "id": "on-the-other-hand",
   "term": "on the other hand",
   "pos": "phr",
   "vi": "mặt khác",
   "en": "used to give the opposing view",
   "deck": "academic",
   "freq": 3,
   "ex": "On the other hand flood impact is higher on households depend heavily on natural resources for their livelihood, and having lower income.",
   "src": "Socioeconomic Vulnerability to Disaster Risk: A Case Study of Flood and Drought Impact in a Rural Sri Lankan Community",
   "ipa": "ɑn ðə ˈʌðər hænd",
   "note": {
    "d": "Mặt khác, tác động của lũ nặng nề hơn với những hộ sống chủ yếu nhờ tài nguyên thiên nhiên và có thu nhập thấp.",
    "y": "Cụm nối mở đầu câu, báo hiệu vế đối lập với nhận định vừa nêu trước đó."
   }
  },
  {
   "id": "to-date",
   "term": "to date",
   "pos": "phr",
   "vi": "cho đến nay",
   "en": "up to the present time",
   "deck": "academic",
   "freq": 3,
   "ex": "Here, we compiled the largest global dataset to date of two diverse taxa in cities: birds (54 cities) and plants (110 cities).",
   "src": "A global analysis of the impacts of urbanization on bird and plant diversity reveals key anthropogenic drivers",
   "ipa": "tu deɪt",
   "note": {
    "d": "Ở đây, chúng tôi tổng hợp bộ dữ liệu toàn cầu lớn nhất cho tới nay về hai nhóm sinh vật khác nhau trong đô thị: chim (54 thành phố) và thực vật (110 thành phố).",
    "y": "«the largest global dataset to date» = lớn nhất tính đến thời điểm này; luôn đứng sau danh từ nó bổ nghĩa."
   }
  },
  {
   "id": "underlying",
   "term": "underlying",
   "pos": "adj",
   "vi": "nền tảng, cơ bản",
   "en": "lying beneath and explaining what is seen",
   "deck": "academic",
   "freq": 3,
   "ex": "The mechanisms underlying these consumption effects are increases in remittances received and the diversity of senders.",
   "src": "Risk Sharing and Transactions Costs: Evidence from Kenya's Mobile Money Revolution",
   "ipa": "ˌʌndərˈlaɪɪŋ",
   "note": {
    "d": "Cơ chế nằm sau những thay đổi tiêu dùng này là lượng tiền gửi về tăng lên và số người gửi cũng đa dạng hơn.",
    "y": "«The mechanisms underlying these consumption effects» — cơ chế nằm bên dưới hiện tượng quan sát được."
   }
  },
  {
   "id": "carry-out",
   "term": "carry out",
   "pos": "phr",
   "vi": "tiến hành",
   "en": "to perform a task or study",
   "deck": "academic",
   "freq": 2,
   "ex": "The aim of this study is to use a statistical approach to carry out a landslide susceptibility assessment in one area at great risk from landslides: the Sera River Basin located in the Eastern Black Sea Region.",
   "src": "Landslide susceptibility mapping of the Sera River Basin using logistic regression model",
   "ipa": "ˈkæri aʊt",
   "note": {
    "d": "Mục tiêu của nghiên cứu là dùng cách tiếp cận thống kê để tiến hành đánh giá nguy cơ sạt lở tại một khu vực rủi ro sạt lở rất cao: lưu vực sông Sera thuộc vùng Đông Biển Đen.",
    "y": "«to carry out a landslide susceptibility assessment» — tiến hành một việc đã định; cụm động từ rất phổ biến trong abstract."
   }
  },
  {
   "id": "distinct",
   "term": "distinct",
   "pos": "adj",
   "vi": "riêng biệt, rõ rệt",
   "en": "clearly different or separate",
   "deck": "academic",
   "freq": 2,
   "ex": "Finally, there is a distinct meridional variation, with the greatest sensitivity occurring in the tropics and higher latitudes and the minima around 13°S and 11°N.",
   "src": "Global Increasing Trends in Annual Maximum Daily Precipitation",
   "ipa": "dɪˈstɪŋkt",
   "note": {
    "d": "Cuối cùng, có sự biến thiên rõ rệt theo vĩ độ, với độ nhạy lớn nhất ở vùng nhiệt đới và vĩ độ cao, còn cực tiểu nằm quanh 13°N và 11°B.",
    "y": "«a distinct meridional variation» — biến thiên rõ rệt theo hướng bắc - nam, không phải ngẫu nhiên."
   }
  },
  {
   "id": "hence",
   "term": "hence",
   "pos": "adv",
   "vi": "do đó",
   "en": "for this reason",
   "deck": "academic",
   "freq": 2,
   "ex": "Linking the scarcity trajectories to other datasets may help further deepen understanding of how trajectories relate to historical and future drivers, and hence help tackle these evolving challenges.",
   "src": "The world’s road to water scarcity: shortage and stress in the 20th century and pathways towards sustainability",
   "ipa": "hɛns",
   "note": {
    "d": "Việc nối các quỹ đạo khan hiếm nước với những bộ dữ liệu khác có thể giúp hiểu sâu hơn quan hệ giữa chúng với các tác nhân quá khứ và tương lai, do đó giúp xử lý những thách thức đang biến đổi này.",
    "y": "«and hence help tackle ...» — nối kết quả suy ra trực tiếp; trang trọng hơn so với so."
   }
  },
  {
   "id": "inherent",
   "term": "inherent",
   "pos": "adj",
   "vi": "vốn có",
   "en": "existing as a natural part of something",
   "deck": "academic",
   "freq": 2,
   "ex": "Within land-use change models, methodological integration is recognized as an essential feature for a complete model, which can help to combine the strength of single modelling methods/techniques without inherent weaknesses.",
   "src": "A Review of Methodological Integration in Land-Use Change Models",
   "ipa": "ɪnˈhɪrənt",
   "note": {
    "d": "Trong các mô hình biến đổi sử dụng đất, tích hợp phương pháp được coi là đặc điểm thiết yếu của một mô hình hoàn chỉnh, giúp kết hợp thế mạnh của từng phương pháp riêng lẻ mà không mang theo điểm yếu vốn có của chúng.",
    "y": "«without inherent weaknesses» — điểm yếu vốn có, gắn liền với bản thân phương pháp chứ không do người dùng sai."
   }
  },
  {
   "id": "notably",
   "term": "notably",
   "pos": "adv",
   "vi": "đáng chú ý là",
   "en": "in a way worth pointing out",
   "deck": "academic",
   "freq": 2,
   "ex": "Notably, the integration with a distributed hydrological model and the incorporation of hydropower potential as a maximizing criterion for site selection revealed more economically attractive SHP sites.",
   "src": "A systematic decision support tool for robust hydropower site selection in poorly gauged basins",
   "ipa": "ˈnoʊtəbli",
   "note": {
    "d": "Đáng chú ý là việc tích hợp với mô hình thuỷ văn phân bố và đưa tiềm năng thuỷ điện vào làm tiêu chí cực đại hoá khi chọn vị trí đã tìm ra những điểm thuỷ điện nhỏ hấp dẫn hơn về kinh tế.",
    "y": "Mở đầu câu để nhấn phát hiện đáng chú ý nhất trong nhiều kết quả."
   }
  },
  {
   "id": "prominent",
   "term": "prominent",
   "pos": "adj",
   "vi": "nổi bật",
   "en": "standing out, important",
   "deck": "academic",
   "freq": 2,
   "ex": "Increases in tropical cyclone activity are most prominent in the western North Pacific, but are evident in other regions except for the southwestern Pacific.",
   "src": "Downscaling CMIP5 climate models shows increased tropical cyclone activity over the 21st century",
   "ipa": "ˈprɑmənənt",
   "note": {
    "d": "Mức tăng hoạt động của xoáy thuận nhiệt đới nổi bật nhất ở Tây Bắc Thái Bình Dương, nhưng cũng thấy rõ ở các vùng khác, trừ Tây Nam Thái Bình Dương.",
    "y": "«are most prominent in the western North Pacific» — rõ nét nhất ở vùng đó; so sánh mức độ giữa các vùng."
   }
  },
  {
   "id": "research-gap",
   "term": "research gap",
   "pos": "n",
   "vi": "khoảng trống nghiên cứu",
   "en": "a question the literature has not answered",
   "deck": "academic",
   "freq": 2,
   "ex": "Using data and insights from these and several other earthquakes, we analyze how such events initiate processes that change mountain landscapes, highlight research gaps, and suggest pathways toward a more complete understanding of the seismic effects on the Earth's surface.",
   "src": "Earthquake‐Induced Chains of Geologic Hazards: Patterns, Mechanisms, and Impacts",
   "ipa": "riˈsɜrtʃ ɡæp",
   "note": {
    "d": "Dùng dữ liệu và hiểu biết từ những trận động đất này cùng vài trận khác, chúng tôi phân tích cách các sự kiện đó khởi phát những quá trình làm biến đổi cảnh quan miền núi, chỉ ra khoảng trống nghiên cứu và gợi mở hướng đi để hiểu đầy đủ hơn tác động của động đất lên bề mặt Trái Đất.",
    "y": "«highlight research gaps» — chỉ ra chỗ khoa học còn chưa biết, phần gần như bắt buộc của bài tổng quan."
   }
  },
  {
   "id": "research-question",
   "term": "research question",
   "pos": "n",
   "vi": "câu hỏi nghiên cứu",
   "en": "the question a study sets out to answer",
   "deck": "academic",
   "freq": 2,
   "ex": "We highlight the need to reframe research questions in such a way that they can provide decision makers throughout the food system with actionable answers, and the need for investment in climate and environmental monitoring.",
   "src": "Climate variability and vulnerability to climate change: a review",
   "ipa": "riˈsɜrtʃ ˈkwɛstʃən",
   "note": {
    "d": "Chúng tôi nhấn mạnh cần đặt lại câu hỏi nghiên cứu sao cho chúng đem lại câu trả lời hành động được cho người ra quyết định trong toàn hệ thống lương thực, và cần đầu tư cho quan trắc khí hậu và môi trường.",
    "y": "«reframe research questions» — đặt lại câu hỏi nghiên cứu sao cho câu trả lời dùng được vào thực tế."
   }
  },
  {
   "id": "subsequent",
   "term": "subsequent",
   "pos": "adj",
   "vi": "tiếp theo",
   "en": "coming after in time or order",
   "deck": "academic",
   "freq": 2,
   "ex": "We found that participants used DIAS in subsequent studies and work, thus suggesting that the Program had long-lasting effects.",
   "src": "Design and Implementation of a Training Course on Big Data Use in Water Management",
   "ipa": "ˈsʌbsəkwənt",
   "note": {
    "d": "Chúng tôi thấy học viên tiếp tục dùng DIAS trong các nghiên cứu và công việc về sau, cho thấy chương trình có tác dụng lâu dài.",
    "y": "«in subsequent studies and work» = trong các nghiên cứu và công việc về sau, tức sau khi khoá học kết thúc."
   }
  },
  {
   "id": "aim-to",
   "term": "aim to",
   "pos": "phr",
   "vi": "nhằm mục đích",
   "en": "to have something as one's purpose",
   "deck": "academic",
   "freq": 1,
   "ex": "In this study, we aim to provide a common basis for CPM climate simulations by giving a holistic review of the topic.",
   "src": "A review on regional convection‐permitting climate modeling: Demonstrations, prospects, and challenges",
   "ipa": "eɪm tu",
   "note": {
    "d": "Trong nghiên cứu này, chúng tôi muốn tạo ra một nền chung cho các mô phỏng khí hậu bằng mô hình phân giải đối lưu, thông qua một bài tổng quan toàn cảnh về chủ đề đó.",
    "y": "«we aim to provide a common basis» — nêu mục đích của bài; sau aim to luôn là động từ nguyên thể."
   }
  },
  {
   "id": "constrain",
   "term": "constrain",
   "pos": "v",
   "vi": "ràng buộc, hạn chế",
   "en": "to limit what a value or system can do",
   "deck": "academic",
   "freq": 1,
   "ex": "The greatest uncertainty was near the equator because of the limited number of sufficiently long precipitation records, and there remains an urgent need to improve data collection in this region to better constrain future changes in tropical precipitation.",
   "src": "Global Increasing Trends in Annual Maximum Daily Precipitation",
   "ipa": "kənˈstreɪn",
   "note": {
    "d": "Độ bất định lớn nhất nằm ở gần xích đạo do có quá ít chuỗi số liệu mưa đủ dài, và vẫn rất cần cải thiện việc thu thập dữ liệu ở vùng này để khoanh hẹp hơn mức thay đổi mưa nhiệt đới trong tương lai.",
    "y": "«to better constrain future changes» — thu hẹp khoảng bất định lại; nghĩa chuyên ngành, không phải ép buộc."
   }
  },
  {
   "id": "depend-on",
   "term": "depend on",
   "pos": "phr",
   "vi": "phụ thuộc vào",
   "en": "to be determined by something else",
   "deck": "academic",
   "freq": 1,
   "ex": "There is strong evidence that climate change will increase drought risk and severity, but these conclusions depend on the regions, seasons, and drought metrics being considered.",
   "src": "Twenty‐First Century Drought Projections in the CMIP6 Forcing Scenarios",
   "ipa": "dɪˈpɛnd ɑn",
   "note": {
    "d": "Có bằng chứng mạnh cho thấy biến đổi khí hậu sẽ làm tăng rủi ro và mức khắc nghiệt của hạn hán, nhưng những kết luận đó còn phụ thuộc vào vùng, mùa và chỉ số hạn được xem xét.",
    "y": "«these conclusions depend on the regions, seasons, and drought metrics» — nêu điều kiện làm kết luận thay đổi."
   }
  },
  {
   "id": "distinguish",
   "term": "distinguish",
   "pos": "v",
   "vi": "phân biệt",
   "en": "to tell one thing apart from another",
   "deck": "academic",
   "freq": 1,
   "ex": "Water distinguishes our planet compared to all the others we know about.",
   "src": "Water management: Current and future challenges and research directions",
   "ipa": "dɪˈstɪŋɡwɪʃ",
   "note": {
    "d": "Nước là thứ làm hành tinh của chúng ta khác hẳn mọi hành tinh khác mà ta từng biết.",
    "y": "«Water distinguishes our planet» — làm cho khác biệt; ở đây nước là chủ ngữ, hành tinh là đối tượng được phân biệt."
   }
  },
  {
   "id": "hypothesis",
   "term": "hypothesis",
   "pos": "n",
   "vi": "giả thuyết",
   "en": "a proposed explanation to be tested",
   "deck": "academic",
   "freq": 1,
   "ex": "Surprisingly, the poor in our study differed from the hypothesis in that there was still improving economic growth, albeit small.",
   "src": "Do floods widen the economic disparity gap?",
   "ipa": "haɪˈpɑθəsəs",
   "note": {
    "d": "Đáng ngạc nhiên là nhóm nghèo trong nghiên cứu của chúng tôi lại khác với giả thuyết: kinh tế của họ vẫn tăng trưởng, dù mức tăng nhỏ.",
    "y": "«differed from the hypothesis in that ...» — kết quả trái với giả thuyết ban đầu, và mệnh đề sau giải thích trái ở chỗ nào."
   }
  },
  {
   "id": "likewise",
   "term": "likewise",
   "pos": "adv",
   "vi": "tương tự",
   "en": "in the same way",
   "deck": "academic",
   "freq": 1,
   "ex": "Likewise, it can be anticipated that food access and utilization will be affected indirectly via collateral effects on household and individual incomes, and food utilization could be impaired by loss of access to drinking water and damage to health.",
   "src": "Climate Change Impacts on Global Food Security",
   "ipa": "ˈlaɪˌkwaɪz",
   "note": {
    "d": "Tương tự, có thể dự đoán rằng khả năng tiếp cận và sử dụng lương thực sẽ bị ảnh hưởng gián tiếp qua tác động lan sang thu nhập của hộ và của cá nhân; việc sử dụng lương thực còn có thể bị cản trở do mất nguồn nước uống và do sức khoẻ suy giảm.",
    "y": "Từ nối đầu câu, báo rằng ý sắp nói cũng theo cùng lối lập luận với ý vừa nêu."
   }
  },
  {
   "id": "overestimate",
   "term": "overestimate",
   "pos": "v",
   "vi": "đánh giá cao hơn thực tế",
   "en": "to give a value that is too high",
   "deck": "academic",
   "freq": 1,
   "ex": "Fire models were unable to reproduce the pattern and magnitude of observed declines, suggesting that they may overestimate fire emissions in future projections.",
   "src": "A human-driven decline in global burned area",
   "ipa": "ˌoʊvərˈɛstəˌmeɪt",
   "note": {
    "d": "Các mô hình cháy không tái hiện được quy luật và độ lớn của mức suy giảm quan trắc được, cho thấy chúng có thể đang ước tính quá cao lượng phát thải từ cháy trong các dự tính tương lai.",
    "y": "«they may overestimate fire emissions» — ước tính cao hơn thực tế; trái nghĩa với underestimate."
   }
  },
  {
   "id": "plausible",
   "term": "plausible",
   "pos": "adj",
   "vi": "hợp lý, có thể tin được",
   "en": "seeming reasonable or probable",
   "deck": "academic",
   "freq": 1,
   "ex": "Downscaling was performed on future GCMs’ temperature and precipitation data, and plausible extreme events were generated.",
   "src": "The Impact of Climate Change on Reservoir Inflows Using Multi Climate-Model under RCPs’ Including Extreme Events—A Case of Mangla Dam, Pakistan",
   "ipa": "ˈplɔzəbəl",
   "note": {
    "d": "Việc hạ quy mô được thực hiện trên số liệu nhiệt độ và giáng thủy tương lai của các mô hình khí hậu toàn cầu, từ đó sinh ra các sự kiện cực đoan hợp lý.",
    "y": "«plausible extreme events» — sự kiện cực đoan chưa từng xảy ra nhưng hợp lý về mặt vật lý."
   }
  },
  {
   "id": "rationale",
   "term": "rationale",
   "pos": "n",
   "vi": "cơ sở lý luận",
   "en": "the reasoning behind a choice",
   "deck": "academic",
   "freq": 1,
   "ex": "This paper presents the rationale for the inclusive valuation of nature’s contributions to people (NCP) in decision making, as well as broad methodological steps for doing so.",
   "src": "Valuing nature’s contributions to people: the IPBES approach",
   "ipa": "ˌræʃəˈnæl",
   "note": {
    "d": "Bài báo trình bày cơ sở lý luận cho việc định giá bao trùm những đóng góp của thiên nhiên cho con người trong quá trình ra quyết định, cùng các bước phương pháp luận chung để làm việc đó.",
    "y": "«the rationale for the inclusive valuation» — lý lẽ nền tảng vì sao nên làm như vậy, đặt trước phần phương pháp."
   }
  },
  {
   "id": "subsequently",
   "term": "subsequently",
   "pos": "adv",
   "vi": "sau đó",
   "en": "at a later time",
   "deck": "academic",
   "freq": 1,
   "ex": "Those are subsequently applied to correct the future projections.",
   "src": "A trend-preserving bias correction – the ISI-MIP approach",
   "ipa": "ˈsʌbsəkwəntli",
   "note": {
    "d": "Những hệ số đó sau đó được dùng để hiệu chỉnh các dự tính tương lai.",
    "y": "«Those are subsequently applied to ...» — sau đó, chỉ trình tự các bước trong quy trình."
   }
  },
  {
   "id": "attribute-to",
   "term": "attribute to",
   "pos": "phr",
   "vi": "quy cho, cho là do",
   "en": "to say that something is caused by something else",
   "deck": "academic",
   "freq": 0,
   "ex": "",
   "src": "",
   "ipa": "ˈætrəˌbjut tu"
  },
  {
   "id": "feasible",
   "term": "feasible",
   "pos": "adj",
   "vi": "khả thi",
   "en": "possible to do in practice",
   "deck": "academic",
   "freq": 0,
   "ex": "",
   "src": "",
   "ipa": "ˈfizəbəl"
  },
  {
   "id": "climate-change",
   "term": "climate change",
   "pos": "n",
   "vi": "biến đổi khí hậu",
   "en": "long-term shifts in temperature and weather patterns",
   "deck": "climate",
   "freq": 144,
   "ex": "Assessment of Climate Change Impact on Reservoir Inflows Using Multi Climate-Models under RCPs—The Case of Mangla Dam in Pakistan.",
   "src": "Assessment of Climate Change Impact on Reservoir Inflows Using Multi Climate-Models under RCPs—The Case of Mangla Dam in Pakistan",
   "ipa": "ˈklaɪmət tʃeɪndʒ",
   "note": {
    "d": "Đánh giá tác động của biến đổi khí hậu lên lưu lượng nước về hồ chứa bằng nhiều mô hình khí hậu theo các kịch bản RCP — trường hợp đập Mangla ở Pakistan.",
    "y": "Trong «Climate Change Impact» — biến đổi khí hậu là nguyên nhân, tác động lên lưu lượng về hồ là hệ quả cần đánh giá."
   }
  },
  {
   "id": "trend",
   "term": "trend",
   "pos": "n",
   "vi": "xu thế",
   "en": "a general direction of change over time",
   "deck": "climate",
   "freq": 67,
   "ex": "The tropics were the only climate domain to exhibit a trend, with forest loss increasing by 2101 square kilometers per year.",
   "src": "High-Resolution Global Maps of 21st-Century Forest Cover Change",
   "ipa": "trɛnd",
   "note": {
    "d": "Vùng nhiệt đới là miền khí hậu duy nhất thể hiện một xu thế rõ rệt, với diện tích rừng mất đi tăng thêm 2101 km² mỗi năm.",
    "y": "«to exhibit a trend» = thể hiện một xu thế; con số 2101 km²/năm ngay sau đó chính là độ lớn của xu thế."
   }
  },
  {
   "id": "temperature",
   "term": "temperature",
   "pos": "n",
   "vi": "nhiệt độ",
   "en": "how hot or cold the air, water or surface is",
   "deck": "climate",
   "freq": 65,
   "ex": "Updated analyses of temperature and precipitation extreme indices since the beginning of the twentieth century: The HadEX2 dataset.",
   "src": "Updated analyses of temperature and precipitation extreme indices since the beginning of the twentieth century: The HadEX2 dataset",
   "ipa": "ˈtɛmprətʃər",
   "note": {
    "d": "Cập nhật phân tích các chỉ số cực đoan về nhiệt độ và giáng thủy tính từ đầu thế kỷ 20: bộ dữ liệu HadEX2.",
    "y": "Đi cặp với precipitation trong «temperature and precipitation extreme indices» — hai biến khí hậu cơ bản nhất."
   }
  },
  {
   "id": "project",
   "term": "project",
   "pos": "v",
   "vi": "dự tính, chiếu tới tương lai",
   "en": "to estimate a future value from a model",
   "deck": "climate",
   "freq": 63,
   "ex": "The annual tendency of the GCMs’ is bi-vocal: six GCMs’ projected a rise in annual flow, while one GCM projected a decrease in flow.",
   "src": "The Impact of Climate Change on Reservoir Inflows Using Multi Climate-Model under RCPs’ Including Extreme Events—A Case of Mangla Dam, Pakistan",
   "ipa": "ˈprɑdʒɛkt",
   "note": {
    "d": "Xu hướng năm mà các mô hình khí hậu toàn cầu đưa ra bị chia hai: sáu mô hình dự tính dòng chảy năm tăng, còn một mô hình dự tính giảm.",
    "y": "Dùng hai lần: projected a rise và projected a decrease — nghĩa dự tính tương lai, không phải «dự án»."
   }
  },
  {
   "id": "projection",
   "term": "projection",
   "pos": "n",
   "vi": "dự tính tương lai",
   "en": "a model-based estimate of a future condition under assumptions",
   "deck": "climate",
   "freq": 50,
   "ex": "Integrating biophysical and socio-economic factors for land-use and land-cover change projection in agricultural economic regions.",
   "src": "Integrating biophysical and socio-economic factors for land-use and land-cover change projection in agricultural economic regions",
   "ipa": "prəˈdʒɛkʃən",
   "note": {
    "d": "Tích hợp các yếu tố sinh - địa - lý và kinh tế - xã hội để dự tính thay đổi sử dụng đất và lớp phủ đất ở các vùng kinh tế nông nghiệp.",
    "y": "«land-use and land-cover change projection» — danh từ, chỉ kết quả dự tính chứ không phải hành động chiếu."
   }
  },
  {
   "id": "scenario",
   "term": "scenario",
   "pos": "n",
   "vi": "kịch bản",
   "en": "one plausible description of how the future may develop",
   "deck": "climate",
   "freq": 50,
   "ex": "Considering the 50- and 100-year return period flood scenario, the highest depth of inundation may affect the urban area of Bago.",
   "src": "River flood inundation mapping in the Bago River Basin, Myanmar",
   "ipa": "sɪˈnɛrioʊ",
   "note": {
    "d": "Xét kịch bản lũ có chu kỳ lặp 50 năm và 100 năm, độ ngập sâu nhất có thể ảnh hưởng tới khu vực đô thị của Bago.",
    "y": "«the 50- and 100-year return period flood scenario» — kịch bản lũ ứng với chu kỳ lặp 50 và 100 năm."
   }
  },
  {
   "id": "variability",
   "term": "variability",
   "pos": "n",
   "vi": "tính biến động",
   "en": "how much a quantity fluctuates around its average",
   "deck": "climate",
   "freq": 47,
   "ex": "There is strong regional variability (most adverse impacts would be in Asia), and considerable variability between climate models.",
   "src": "The impacts of climate change on river flood risk at the global scale",
   "ipa": "vɛriəˈbɪlɪti",
   "note": {
    "d": "Có sự khác biệt lớn giữa các vùng (tác động bất lợi nhất sẽ ở châu Á), và cũng khác biệt đáng kể giữa các mô hình khí hậu.",
    "y": "Xuất hiện hai lần: regional variability (khác nhau giữa vùng) và variability between climate models (khác nhau giữa mô hình)."
   }
  },
  {
   "id": "resilience",
   "term": "resilience",
   "pos": "n",
   "vi": "khả năng chống chịu và phục hồi",
   "en": "the ability to absorb a shock and recover quickly",
   "deck": "climate",
   "freq": 40,
   "ex": "Measuring capacities and protecting communities: strengthening regional resilience in the flooded industrial area in Thailand.",
   "src": "Measuring capacities and protecting communities: strengthening regional resilience in the flooded industrial area in Thailand",
   "ipa": "rɪˈzɪliəns",
   "note": {
    "d": "Đo lường năng lực và bảo vệ cộng đồng: tăng cường khả năng chống chịu cấp vùng ở khu công nghiệp bị ngập tại Thái Lan.",
    "y": "«strengthening regional resilience» = tăng cường khả năng chống chịu ở quy mô vùng, không chỉ từng nhà máy."
   }
  },
  {
   "id": "warming",
   "term": "warming",
   "pos": "n",
   "vi": "sự ấm lên",
   "en": "an increase in temperature over time",
   "deck": "climate",
   "freq": 38,
   "ex": "A pseudo-global warming method using MIROC5 RCP 8.5 was employed to produce 12-km 30-y historical and future climate projections.",
   "src": "Impact of Bias-Correction Methods in Assessing the Potential Flood Frequency Change in the Bago River",
   "ipa": "ˈwɔrmɪŋ",
   "note": {
    "d": "Phương pháp làm ấm toàn cầu giả định dựa trên MIROC5 kịch bản RCP 8.5 được dùng để tạo dự tính khí hậu 30 năm quá khứ và tương lai ở độ phân giải 12 km.",
    "y": "Trong «pseudo-global warming method» — phương pháp cộng mức ấm lên tương lai vào chuỗi khí hậu quá khứ."
   }
  },
  {
   "id": "adaptation",
   "term": "adaptation",
   "pos": "n",
   "vi": "sự thích ứng",
   "en": "adjusting systems and behaviour to cope with a changing climate",
   "deck": "climate",
   "freq": 30,
   "ex": "We base our approach on two complementary approaches for designing adaptive plans: ‘Adaptive Policymaking’ and ‘Adaptation Pathways’.",
   "src": "Dynamic adaptive policy pathways: A method for crafting robust decisions for a deeply uncertain world",
   "ipa": "ˌædəpˈteɪʃən",
   "note": {
    "d": "Chúng tôi dựa cách tiếp cận của mình trên hai hướng bổ trợ nhau để thiết kế kế hoạch thích ứng: «Hoạch định chính sách thích ứng» và «Lộ trình thích ứng».",
    "y": "Xuất hiện hai lần: Adaptive Policymaking và Adaptation Pathways — hai tên riêng của phương pháp lập kế hoạch thích ứng."
   }
  },
  {
   "id": "climate-model",
   "term": "climate model",
   "pos": "n",
   "vi": "mô hình khí hậu",
   "en": "a physics-based simulation of the climate system",
   "deck": "climate",
   "freq": 27,
   "ex": "There is strong regional variability (most adverse impacts would be in Asia), and considerable variability between climate models.",
   "src": "The impacts of climate change on river flood risk at the global scale",
   "ipa": "ˈklaɪmət ˈmɑdəl",
   "note": {
    "d": "Có sự khác biệt lớn giữa các vùng (tác động bất lợi nhất sẽ ở châu Á), và cũng khác biệt đáng kể giữa các mô hình khí hậu.",
    "y": "Nguồn bất định thứ hai của câu: cùng một câu hỏi, các mô hình khí hậu cho kết quả lệch nhau."
   }
  },
  {
   "id": "long-term",
   "term": "long-term",
   "pos": "adj",
   "vi": "dài hạn",
   "en": "covering or lasting a long period of time",
   "deck": "climate",
   "freq": 23,
   "ex": "However, for long-term flood simulation, the model may not be the ideal choice as it does not include any land-atmosphere interactions.",
   "src": "Consideration of the rainfall-runoff-inundation (RRI) model for flood mapping in a deltaic area of Myanmar",
   "ipa": "ˈlɔŋˈtɜrm",
   "note": {
    "d": "Tuy nhiên, với mô phỏng lũ dài hạn, mô hình này có thể không phải lựa chọn lý tưởng vì nó không xét tương tác giữa mặt đất và khí quyển.",
    "y": "«long-term flood simulation» — mô phỏng dài hạn mới cần tương tác đất - khí quyển, mô phỏng ngắn thì không."
   }
  },
  {
   "id": "climate-variability",
   "term": "climate variability",
   "pos": "n",
   "vi": "dao động khí hậu",
   "en": "natural swings of climate around its average",
   "deck": "climate",
   "freq": 18,
   "ex": "We present new analysis that tentatively links increases in climate variability with increasing food insecurity in the future.",
   "src": "Climate variability and vulnerability to climate change: a review",
   "ipa": "ˈklaɪmət vɛriəˈbɪlɪti",
   "note": {
    "d": "Chúng tôi đưa ra phân tích mới, bước đầu cho thấy dao động khí hậu gia tăng có liên hệ với mất an ninh lương thực trong tương lai.",
    "y": "Phân biệt với climate change: variability là dao động lên xuống, change là thay đổi dài hạn."
   }
  },
  {
   "id": "seasonal",
   "term": "seasonal",
   "pos": "adj",
   "vi": "theo mùa",
   "en": "varying with the seasons of the year",
   "deck": "climate",
   "freq": 18,
   "ex": "Both seasonal and annual mean precipitation and evaporation influence patterns of water availability impacting society and ecosystems.",
   "src": "Climate change will affect global water availability through compounding changes in seasonal precipitation and evaporation",
   "ipa": "ˈsizənəl",
   "note": {
    "d": "Cả lượng mưa và bốc hơi trung bình mùa lẫn trung bình năm đều chi phối cách phân bố lượng nước sẵn có, qua đó tác động tới xã hội và hệ sinh thái.",
    "y": "Đặt song song với annual: cả biến động theo mùa lẫn trung bình cả năm đều quan trọng."
   }
  },
  {
   "id": "climatic",
   "term": "climatic",
   "pos": "adj",
   "vi": "thuộc khí hậu",
   "en": "relating to climate",
   "deck": "climate",
   "freq": 17,
   "ex": "Sea‐level rise due to both climate change and non‐climatic factors threatens coastal settlements, infrastructure, and ecosystems.",
   "src": "Probabilistic 21st and 22nd century sea‐level projections at a global network of tide‐gauge sites",
   "ipa": "klaɪˈmætɪk",
   "note": {
    "d": "Nước biển dâng — do cả biến đổi khí hậu lẫn các yếu tố phi khí hậu — đang đe doạ các khu dân cư ven biển, cơ sở hạ tầng và hệ sinh thái.",
    "y": "Trong «non-climatic factors» — yếu tố phi khí hậu như sụt lún đất, khai thác nước ngầm."
   }
  },
  {
   "id": "ensemble",
   "term": "ensemble",
   "pos": "n",
   "vi": "tổ hợp (nhiều mô hình)",
   "en": "a set of model runs used together to show a range of outcomes",
   "deck": "climate",
   "freq": 16,
   "ex": "As with the original E‐OBS data set, the ensemble version is based on the station series collated as part of the ECA&D initiative.",
   "src": "An Ensemble Version of the E‐OBS Temperature and Precipitation Data Sets",
   "ipa": "ɑnˈsɑmbəl",
   "note": {
    "d": "Cũng như bộ dữ liệu E-OBS gốc, phiên bản tổ hợp được dựng trên các chuỗi số liệu trạm quan trắc do sáng kiến ECA&D tập hợp.",
    "y": "«the ensemble version» — bản tổ hợp gồm nhiều phương án khác nhau, dùng để thể hiện độ bất định."
   }
  },
  {
   "id": "anthropogenic",
   "term": "anthropogenic",
   "pos": "adj",
   "vi": "do con người gây ra",
   "en": "caused by human activity",
   "deck": "climate",
   "freq": 15,
   "ex": "It has not been possible to attribute rain-generated peak streamflow trends to anthropogenic climate change over the past several decades.",
   "src": "Flood risk and climate change: global and regional perspectives",
   "ipa": "ˌænθrəpəˈdʒɛnɪk",
   "note": {
    "d": "Cho đến nay vẫn chưa thể quy xu thế đỉnh dòng chảy do mưa trong vài thập kỷ qua là hệ quả của biến đổi khí hậu do con người gây ra.",
    "y": "«anthropogenic climate change» = biến đổi khí hậu do con người; đối lập với biến động tự nhiên."
   }
  },
  {
   "id": "atmospheric",
   "term": "atmospheric",
   "pos": "adj",
   "vi": "thuộc khí quyển",
   "en": "relating to the atmosphere",
   "deck": "climate",
   "freq": 13,
   "ex": "Its reach is global, and it can force climate variations of the tropical Atlantic and Indian Oceans by perturbing the global atmospheric circulation.",
   "src": "Pantropical climate interactions",
   "ipa": "ˌætməˈsfɛrɪk",
   "note": {
    "d": "Ảnh hưởng của nó mang tầm toàn cầu: nó có thể chi phối biến động khí hậu ở vùng nhiệt đới Đại Tây Dương và Ấn Độ Dương bằng cách làm nhiễu hoàn lưu khí quyển toàn cầu.",
    "y": "Trong «global atmospheric circulation» — tính từ của atmosphere."
   }
  },
  {
   "id": "reanalysis",
   "term": "reanalysis",
   "pos": "n",
   "vi": "dữ liệu tái phân tích",
   "en": "a consistent past weather record built by blending observations with a model",
   "deck": "climate",
   "freq": 13,
   "ex": "Improving Snow‐Process Modeling by Evaluating Reanalysis Vertical Temperature Profiles Using a Distributed Hydrological Model.",
   "src": "Improving Snow‐Process Modeling by Evaluating Reanalysis Vertical Temperature Profiles Using a Distributed Hydrological Model",
   "ipa": "ˌriəˈnæləsəs",
   "note": {
    "d": "Cải thiện mô hình hoá quá trình tuyết bằng cách đánh giá mặt cắt nhiệt độ theo phương đứng của dữ liệu tái phân tích, dùng một mô hình thuỷ văn phân bố.",
    "y": "«Reanalysis Vertical Temperature Profiles» — dữ liệu tái phân tích: ghép quan trắc quá khứ với mô hình để có chuỗi số liệu đầy đủ."
   }
  },
  {
   "id": "emission",
   "term": "emission",
   "pos": "n",
   "vi": "sự phát thải",
   "en": "the release of a gas or substance into the air",
   "deck": "climate",
   "freq": 12,
   "ex": "Base colors are temperature change under “Business as usual” (left, RCP 8.5) and “stringent emissions mitigation” (right, RCP 2.6).",
   "src": "Social and economic impacts of climate",
   "ipa": "ɪˈmɪʃən",
   "note": {
    "d": "Màu nền thể hiện mức thay đổi nhiệt độ theo kịch bản «phát triển như thường lệ» (trái, RCP 8.5) và «giảm phát thải nghiêm ngặt» (phải, RCP 2.6).",
    "y": "«stringent emissions mitigation» = giảm phát thải nghiêm ngặt, tên gọi khác của kịch bản RCP 2.6."
   }
  },
  {
   "id": "exacerbate",
   "term": "exacerbate",
   "pos": "v",
   "vi": "làm trầm trọng thêm",
   "en": "to make a bad situation worse",
   "deck": "climate",
   "freq": 12,
   "ex": "Our findings highlight how recurrent flooding not only entrenches poverty but also exacerbates disparities by disrupting education.",
   "src": "How recurrent floods create inequality in livelihood improvement through education",
   "ipa": "ɪɡˈzæsərˌbeɪt",
   "note": {
    "d": "Phát hiện của chúng tôi cho thấy lũ lặp đi lặp lại không chỉ khiến cái nghèo dai dẳng hơn mà còn khoét sâu bất bình đẳng do làm gián đoạn việc học hành.",
    "y": "«exacerbates disparities» = làm bất bình đẳng trầm trọng thêm — mạnh hơn increase."
   }
  },
  {
   "id": "carbon",
   "term": "carbon",
   "pos": "n",
   "vi": "các-bon",
   "en": "the element whose compounds drive greenhouse warming",
   "deck": "climate",
   "freq": 11,
   "ex": "Urban land-cover change threatens biodiversity and affects ecosystem productivity through loss of habitat, biomass, and carbon storage.",
   "src": "Global forecasts of urban expansion to 2030 and direct impacts on biodiversity and carbon pools",
   "ipa": "ˈkɑrbən",
   "note": {
    "d": "Thay đổi lớp phủ đất đô thị đe doạ đa dạng sinh học và ảnh hưởng tới năng suất hệ sinh thái, thông qua việc mất môi trường sống, mất sinh khối và mất khả năng lưu giữ các-bon.",
    "y": "«carbon storage» = khả năng lưu giữ các-bon của thảm thực vật, mất đi khi đô thị mở rộng."
   }
  },
  {
   "id": "baseline",
   "term": "baseline",
   "pos": "n",
   "vi": "thời kỳ nền, mốc so sánh",
   "en": "the reference period or value that changes are compared against",
   "deck": "climate",
   "freq": 10,
   "ex": "Global river hydrography and network routing: baseline data and new approaches to study the world's large river systems.",
   "src": "Global river hydrography and network routing: baseline data and new approaches to study the world's large river systems",
   "ipa": "ˈbeɪˌslaɪn",
   "note": {
    "d": "Thuỷ văn sông ngòi toàn cầu và định tuyến mạng lưới sông: dữ liệu nền và những cách tiếp cận mới để nghiên cứu các hệ thống sông lớn của thế giới.",
    "y": "«baseline data» = dữ liệu nền, mốc để so sánh khi có thay đổi hoặc có phương pháp mới."
   }
  },
  {
   "id": "global-warming",
   "term": "global warming",
   "pos": "n",
   "vi": "sự nóng lên toàn cầu",
   "en": "the long-term rise in Earth's average temperature",
   "deck": "climate",
   "freq": 10,
   "ex": "A pseudo-global warming method using MIROC5 RCP 8.5 was employed to produce 12-km 30-y historical and future climate projections.",
   "src": "Impact of Bias-Correction Methods in Assessing the Potential Flood Frequency Change in the Bago River",
   "ipa": "ˈɡloʊbəl ˈwɔrmɪŋ",
   "note": {
    "d": "Phương pháp làm ấm toàn cầu giả định dựa trên MIROC5 kịch bản RCP 8.5 được dùng để tạo dự tính khí hậu 30 năm quá khứ và tương lai ở độ phân giải 12 km.",
    "y": "Nằm trong tên phương pháp; pseudo- cho biết đây là kịch bản giả định chứ không phải quan trắc."
   }
  },
  {
   "id": "bias-correction",
   "term": "bias correction",
   "pos": "n",
   "vi": "hiệu chỉnh sai lệch",
   "en": "adjusting model output so it matches observed statistics",
   "deck": "climate",
   "freq": 9,
   "ex": "Bias Correction of GCM Precipitation by Quantile Mapping: How Well Do Methods Preserve Changes in Quantiles and Extremes?.",
   "src": "Bias Correction of GCM Precipitation by Quantile Mapping: How Well Do Methods Preserve Changes in Quantiles and Extremes?",
   "ipa": "ˈbaɪəs kərˈɛkʃən",
   "note": {
    "d": "Hiệu chỉnh sai lệch mưa của mô hình khí hậu toàn cầu bằng ánh xạ phân vị: các phương pháp giữ được mức thay đổi ở phân vị và ở cực trị tốt tới đâu?",
    "y": "Trong tên bài: chỉnh cho kết quả mô hình khớp với quan trắc trước khi đem dùng."
   }
  },
  {
   "id": "climate-change-impact",
   "term": "climate change impact",
   "pos": "n",
   "vi": "tác động của biến đổi khí hậu",
   "en": "the harm or benefit climate change brings to a system",
   "deck": "climate",
   "freq": 9,
   "ex": "Assessment of Climate Change Impact on Reservoir Inflows Using Multi Climate-Models under RCPs—The Case of Mangla Dam in Pakistan.",
   "src": "Assessment of Climate Change Impact on Reservoir Inflows Using Multi Climate-Models under RCPs—The Case of Mangla Dam in Pakistan",
   "ipa": "ˈklaɪmət tʃeɪndʒ ˌɪmˈpækt",
   "note": {
    "d": "Đánh giá tác động của biến đổi khí hậu lên lưu lượng nước về hồ chứa bằng nhiều mô hình khí hậu theo các kịch bản RCP — trường hợp đập Mangla ở Pakistan.",
    "y": "Cụm danh từ ba tầng: assessment of → climate change impact → on reservoir inflows. Đây là đối tượng của cả nghiên cứu."
   }
  },
  {
   "id": "quantile-mapping",
   "term": "quantile mapping",
   "pos": "n",
   "vi": "ánh xạ phân vị",
   "en": "a bias-correction method that matches distributions percentile by percentile",
   "deck": "climate",
   "freq": 9,
   "ex": "Bias Correction of GCM Precipitation by Quantile Mapping: How Well Do Methods Preserve Changes in Quantiles and Extremes?.",
   "src": "Bias Correction of GCM Precipitation by Quantile Mapping: How Well Do Methods Preserve Changes in Quantiles and Extremes?",
   "ipa": "ˈkwɑnˌtaɪl ˈmæpɪŋ",
   "note": {
    "d": "Hiệu chỉnh sai lệch mưa của mô hình khí hậu toàn cầu bằng ánh xạ phân vị: các phương pháp giữ được mức thay đổi ở phân vị và ở cực trị tốt tới đâu?",
    "y": "Phương pháp hiệu chỉnh bằng cách ánh xạ phân vị của mô hình sang phân vị của số liệu thực đo."
   }
  },
  {
   "id": "sustainable-development",
   "term": "sustainable development",
   "pos": "n",
   "vi": "phát triển bền vững",
   "en": "development that meets present needs without harming the future",
   "deck": "climate",
   "freq": 9,
   "ex": "It is said that poverty traps caused by floods have been hindering sustainable development and accelerating under climate change.",
   "src": "Accelerated widening of economic disparity due to recurrent floods",
   "ipa": "səˈsteɪnəbəl dɪˈvɛləpmənt",
   "note": {
    "d": "Người ta cho rằng bẫy nghèo do lũ gây ra đang cản trở phát triển bền vững và ngày càng nghiêm trọng hơn dưới tác động của biến đổi khí hậu.",
    "y": "Cái bị cản trở: bẫy nghèo do lũ khiến mục tiêu phát triển bền vững khó đạt."
   }
  },
  {
   "id": "extreme-precipitation",
   "term": "extreme precipitation",
   "pos": "n",
   "vi": "mưa cực đoan",
   "en": "rainfall far above normal intensity",
   "deck": "climate",
   "freq": 8,
   "ex": "Similarly, there is an increase in the intensification of extreme precipitation and flood with the seasonal cycle of water availability.",
   "src": "Climate change impact on flood and extreme precipitation increases with water availability",
   "ipa": "ɛkˈstrim prɪˌsɪpɪˈteɪʃən",
   "note": {
    "d": "Tương tự, mưa cực đoan và lũ cũng dữ dội hơn cùng với chu kỳ mùa của lượng nước sẵn có.",
    "y": "«the intensification of extreme precipitation» — mưa cực đoan không chỉ nhiều hơn mà còn dữ dội hơn."
   }
  },
  {
   "id": "global-mean",
   "term": "global mean",
   "pos": "n",
   "vi": "trung bình toàn cầu",
   "en": "the average over the whole planet",
   "deck": "climate",
   "freq": 8,
   "ex": "Despite some spread in model projections, irrigation water consumption is generally projected to increase with higher global mean temperatures.",
   "src": "Global water resources affected by human interventions and climate change",
   "ipa": "ˈɡloʊbəl min",
   "note": {
    "d": "Dù các mô hình dự tính còn phân tán, lượng nước tưới tiêu thụ nhìn chung vẫn được dự tính sẽ tăng khi nhiệt độ trung bình toàn cầu tăng cao hơn.",
    "y": "«higher global mean temperatures» — nhiệt độ trung bình toàn cầu, biến nền để so sánh các kịch bản."
   }
  },
  {
   "id": "weather-forecasting",
   "term": "weather forecasting",
   "pos": "n",
   "vi": "dự báo thời tiết",
   "en": "predicting weather over the coming hours and days",
   "deck": "climate",
   "freq": 8,
   "ex": "Very few previous studies have examined this crucial and challenging weather forecasting problem from the machine learning perspective.",
   "src": "Convolutional LSTM Network: A Machine Learning Approach for Precipitation Nowcasting",
   "ipa": "ˈwɛðər ˈfɔrˌkæstɪŋ",
   "note": {
    "d": "Rất ít nghiên cứu trước đây xem xét bài toán dự báo thời tiết then chốt và đầy thách thức này từ góc nhìn học máy.",
    "y": "«weather forecasting problem» — dự báo thời tiết được nhìn như một bài toán, để đưa học máy vào."
   }
  },
  {
   "id": "anomaly",
   "term": "anomaly",
   "pos": "n",
   "vi": "dị thường, chênh lệch so với chuẩn",
   "en": "the difference between a value and its long-term average",
   "deck": "climate",
   "freq": 7,
   "ex": "ERA5-Land describes the evolution of the water and energy cycles over land in a consistent manner over the production period, which, among others, could be used to analyse trends and anomalies.",
   "src": "ERA5-Land: a state-of-the-art global reanalysis dataset for land applications",
   "ipa": "əˈnɑməli",
   "note": {
    "d": "ERA5-Land mô tả diễn biến của vòng tuần hoàn nước và năng lượng trên đất liền một cách nhất quán suốt thời kỳ số liệu, nhờ đó có thể dùng để phân tích xu thế và dị thường.",
    "y": "«trends and anomalies» — dị thường là chênh lệch so với trung bình nhiều năm, khác với xu thế dài hạn."
   }
  },
  {
   "id": "climate-projection",
   "term": "climate projection",
   "pos": "n",
   "vi": "dự tính khí hậu",
   "en": "a model estimate of future climate under a scenario",
   "deck": "climate",
   "freq": 7,
   "ex": "A pseudo-global warming method using MIROC5 RCP 8.5 was employed to produce 12-km 30-y historical and future climate projections.",
   "src": "Impact of Bias-Correction Methods in Assessing the Potential Flood Frequency Change in the Bago River",
   "ipa": "ˈklaɪmət prəˈdʒɛkʃən",
   "note": {
    "d": "Phương pháp làm ấm toàn cầu giả định dựa trên MIROC5 kịch bản RCP 8.5 được dùng để tạo dự tính khí hậu 30 năm quá khứ và tương lai ở độ phân giải 12 km.",
    "y": "Sản phẩm đầu ra: dự tính khí hậu 30 năm, phân giải 12 km cho cả quá khứ và tương lai."
   }
  },
  {
   "id": "future-change",
   "term": "future change",
   "pos": "n",
   "vi": "thay đổi trong tương lai",
   "en": "how a variable is expected to differ later",
   "deck": "climate",
   "freq": 7,
   "ex": "Therefore, the current flood hazard and potential future changes in flooding due to climate change must be assessed.",
   "src": "Impact of Bias-Correction Methods in Assessing the Potential Flood Frequency Change in the Bago River",
   "ipa": "ˈfjutʃər tʃeɪndʒ",
   "note": {
    "d": "Do đó, cần đánh giá hiểm hoạ lũ hiện tại và cả những thay đổi có thể xảy ra trong tương lai của tình trạng ngập lụt do biến đổi khí hậu.",
    "y": "«potential future changes in flooding» — thay đổi có thể xảy ra; potential cho thấy đây là dự tính chứ chưa chắc."
   }
  },
  {
   "id": "model-intercomparison",
   "term": "model intercomparison",
   "pos": "n",
   "vi": "so sánh giữa các mô hình",
   "en": "running many models on the same setup to compare them",
   "deck": "climate",
   "freq": 7,
   "ex": "Next, methods are applied to phase 5 of the Coupled Model Intercomparison Project (CMIP5) daily precipitation projections over Canada.",
   "src": "Bias Correction of GCM Precipitation by Quantile Mapping: How Well Do Methods Preserve Changes in Quantiles and Extremes?",
   "ipa": "ˈmɑdəl ˌɪntərkəmˈpɛrəsən",
   "note": {
    "d": "Tiếp đó, các phương pháp được áp dụng cho dự tính giáng thủy ngày của Dự án So sánh Mô hình Ghép đôi giai đoạn 5 (CMIP5) trên lãnh thổ Canada.",
    "y": "Trong tên riêng CMIP: dự án cho nhiều nhóm chạy cùng kịch bản để so sánh mô hình với nhau."
   }
  },
  {
   "id": "future-period",
   "term": "future period",
   "pos": "n",
   "vi": "thời kỳ tương lai",
   "en": "the years a projection describes",
   "deck": "climate",
   "freq": 6,
   "ex": "An increase in seasonal as well as mean annual minimum and maximum temperature is projected for all three future periods.",
   "src": "Analysis of temperature projections in the Koshi River Basin, Nepal",
   "ipa": "ˈfjutʃər ˈpɪriəd",
   "note": {
    "d": "Nhiệt độ tối thấp và tối cao — cả theo mùa lẫn trung bình năm — đều được dự tính tăng lên trong cả ba thời kỳ tương lai.",
    "y": "«all three future periods» — thường là gần, giữa và cuối thế kỷ; chia thời kỳ để so mức thay đổi."
   }
  },
  {
   "id": "climate-data",
   "term": "climate data",
   "pos": "n",
   "vi": "dữ liệu khí hậu",
   "en": "records of temperature, rainfall and related variables",
   "deck": "climate",
   "freq": 5,
   "ex": "Bias-corrected climate data that are used as input for the impact simulations could be only provided over land areas.",
   "src": "A trend-preserving bias correction – the ISI-MIP approach",
   "ipa": "ˈklaɪmət ˈdeɪtə",
   "note": {
    "d": "Dữ liệu khí hậu đã hiệu chỉnh sai lệch, dùng làm đầu vào cho các mô phỏng tác động, chỉ có thể cung cấp cho phần đất liền.",
    "y": "«Bias-corrected climate data» — dữ liệu khí hậu đã chỉnh sai lệch, đầu vào cho mô phỏng tác động."
   }
  },
  {
   "id": "downscaling",
   "term": "downscaling",
   "pos": "n",
   "vi": "chi tiết hóa (hạ quy mô)",
   "en": "converting coarse global model output into local-scale detail",
   "deck": "climate",
   "freq": 5,
   "ex": "Downscaling was performed on future GCMs’ temperature and precipitation data, and plausible extreme events were generated.",
   "src": "The Impact of Climate Change on Reservoir Inflows Using Multi Climate-Model under RCPs’ Including Extreme Events—A Case of Mangla Dam, Pakistan",
   "ipa": "ˈdaʊnˌskeɪlɪŋ",
   "note": {
    "d": "Việc hạ quy mô được thực hiện trên số liệu nhiệt độ và giáng thủy tương lai của các mô hình khí hậu toàn cầu, từ đó sinh ra các sự kiện cực đoan hợp lý.",
    "y": "Danh từ: đưa kết quả mô hình toàn cầu ô lưới thô về quy mô địa phương đủ chi tiết để dùng."
   }
  },
  {
   "id": "future-scenario",
   "term": "future scenario",
   "pos": "n",
   "vi": "kịch bản tương lai",
   "en": "an assumed set of future conditions used for planning",
   "deck": "climate",
   "freq": 5,
   "ex": "Assessment of the tidal effect on flood inundation in a low‐lying river basin under composite future scenarios.",
   "src": "Assessment of the tidal effect on flood inundation in a low‐lying river basin under composite future scenarios",
   "ipa": "ˈfjutʃər sɪˈnɛrioʊ",
   "note": {
    "d": "Đánh giá ảnh hưởng của thuỷ triều tới ngập lũ ở một lưu vực sông trũng thấp dưới các kịch bản tương lai tổ hợp.",
    "y": "«composite future scenarios» — kịch bản tổ hợp, gộp nhiều yếu tố tương lai cùng lúc thay vì xét riêng."
   }
  },
  {
   "id": "global-change",
   "term": "global change",
   "pos": "n",
   "vi": "biến đổi toàn cầu",
   "en": "large-scale change in the earth system caused by humans",
   "deck": "climate",
   "freq": 5,
   "ex": "It represents the first of two volumes of the Fourth National Climate Assessment, mandated by the Global Change Research Act of 1990.",
   "src": "Climate Science Special Report: Fourth National Climate Assessment, Volume I",
   "ipa": "ˈɡloʊbəl tʃeɪndʒ",
   "note": {
    "d": "Đây là tập đầu trong hai tập của Báo cáo Đánh giá Khí hậu Quốc gia lần thứ tư, được thực hiện theo yêu cầu của Đạo luật Nghiên cứu Biến đổi Toàn cầu năm 1990.",
    "y": "Rộng hơn climate change: gồm cả thay đổi sử dụng đất, dân số, đa dạng sinh học."
   }
  },
  {
   "id": "climate-change-adaptation",
   "term": "climate change adaptation",
   "pos": "n",
   "vi": "thích ứng với biến đổi khí hậu",
   "en": "adjusting practices to live with a changed climate",
   "deck": "climate",
   "freq": 4,
   "ex": "Chapter 3 of Managing the Risks of Extreme Events and Disasters to Advance Climate Change Adaptation.",
   "src": "Changes in Climate Extremes and their Impacts on the Natural Physical Environment",
   "ipa": "ˈklaɪmət tʃeɪndʒ ˌædəpˈteɪʃən",
   "note": {
    "d": "Chương 3 của báo cáo «Quản lý rủi ro từ sự kiện cực đoan và thiên tai để thúc đẩy thích ứng với biến đổi khí hậu».",
    "y": "«to Advance Climate Change Adaptation» — thích ứng là sống chung với biến đổi khí hậu, khác mitigation là cắt phát thải."
   }
  },
  {
   "id": "climate-extremes",
   "term": "climate extremes",
   "pos": "n",
   "vi": "cực đoan khí hậu",
   "en": "rare, severe climate events such as heat waves",
   "deck": "climate",
   "freq": 4,
   "ex": "Changes in Climate Extremes and their Impacts on the Natural Physical Environment.",
   "src": "Changes in Climate Extremes and their Impacts on the Natural Physical Environment",
   "ipa": "ˈklaɪmət ɛkˈstrimz",
   "note": {
    "d": "Những thay đổi của cực đoan khí hậu và tác động của chúng lên môi trường vật lý tự nhiên.",
    "y": "Luôn ở số nhiều: các hiện tượng nằm ở đuôi phân bố như nắng nóng kỷ lục, mưa cực lớn."
   }
  },
  {
   "id": "climate-scenario",
   "term": "climate scenario",
   "pos": "n",
   "vi": "kịch bản khí hậu",
   "en": "an assumed future pathway of emissions and climate",
   "deck": "climate",
   "freq": 4,
   "ex": "Overlaid are composite satellite images of nighttime lights with rescaled intensity reflecting changes in economic productivity in each climate scenario.",
   "src": "Social and economic impacts of climate",
   "ipa": "ˈklaɪmət sɪˈnɛrioʊ",
   "note": {
    "d": "Chồng lên trên là ảnh vệ tinh tổ hợp về ánh sáng ban đêm, với cường độ đã chuẩn hoá lại để phản ánh mức thay đổi năng suất kinh tế trong từng kịch bản khí hậu.",
    "y": "«in each climate scenario» — mỗi kịch bản khí hậu cho một bức tranh kinh tế khác nhau trên bản đồ đèn đêm."
   }
  },
  {
   "id": "extreme-weather",
   "term": "extreme weather",
   "pos": "n",
   "vi": "thời tiết cực đoan",
   "en": "unusually severe weather such as storms or heat waves",
   "deck": "climate",
   "freq": 4,
   "ex": "Extreme weather and climate events, interacting with exposed and vulnerable human and natural systems, can lead to disasters.",
   "src": "Managing the Risks of Extreme Events and Disasters to Advance Climate Change Adaptation",
   "ipa": "ɛkˈstrim ˈwɛðər",
   "note": {
    "d": "Sự kiện thời tiết và khí hậu cực đoan, khi tác động lên hệ tự nhiên và hệ con người vốn đang phơi nhiễm và dễ tổn thương, có thể dẫn tới thảm hoạ.",
    "y": "Đứng cùng climate events: thời tiết là ngắn hạn vài ngày, khí hậu là dài hạn nhiều năm."
   }
  },
  {
   "id": "general-circulation-model",
   "term": "general circulation model",
   "pos": "n",
   "vi": "mô hình hoàn lưu chung (GCM)",
   "en": "a global model of atmosphere and ocean physics",
   "deck": "climate",
   "freq": 4,
   "ex": "Linear scaling was used as the bias-correction method for ten general circulation models (GCMs) participating in the fifth phase of the Coupled Model Intercomparison Project.",
   "src": "Projecting the Impact of Climate Change on Temperature, Precipitation, and Discharge in the Bago River Basin",
   "ipa": "ˈdʒɛnərəl ˈsɜrkjəˌleɪʃən ˈmɑdəl",
   "note": {
    "d": "Phép co giãn tuyến tính được dùng làm phương pháp hiệu chỉnh sai lệch cho mười mô hình hoàn lưu chung tham gia giai đoạn 5 của Dự án So sánh Mô hình Ghép đôi.",
    "y": "GCM mô phỏng khí quyển và đại dương cho cả hành tinh; vì ô lưới thô nên phải hiệu chỉnh và hạ quy mô."
   }
  },
  {
   "id": "adaptation-strategy",
   "term": "adaptation strategy",
   "pos": "n",
   "vi": "chiến lược thích ứng",
   "en": "a plan for coping with climate change",
   "deck": "climate",
   "freq": 3,
   "ex": "Our results emphasize the central role of long-term coastal adaptation strategies.",
   "src": "Coastal flood damage and adaptation costs under 21st century sea-level rise",
   "ipa": "ˌædəpˈteɪʃən ˈstrætədʒi",
   "note": {
    "d": "Kết quả của chúng tôi nhấn mạnh vai trò trung tâm của các chiến lược thích ứng ven biển dài hạn.",
    "y": "«long-term coastal adaptation strategies» — chiến lược thích ứng dài hạn cho vùng ven biển, thứ được nhấn là then chốt."
   }
  },
  {
   "id": "atmospheric-circulation",
   "term": "atmospheric circulation",
   "pos": "n",
   "vi": "hoàn lưu khí quyển",
   "en": "the large-scale movement of air around the planet",
   "deck": "climate",
   "freq": 3,
   "ex": "Its reach is global, and it can force climate variations of the tropical Atlantic and Indian Oceans by perturbing the global atmospheric circulation.",
   "src": "Pantropical climate interactions",
   "ipa": "ˌætməˈsfɛrɪk ˈsɜrkjəˌleɪʃən",
   "note": {
    "d": "Ảnh hưởng của nó mang tầm toàn cầu: nó có thể chi phối biến động khí hậu ở vùng nhiệt đới Đại Tây Dương và Ấn Độ Dương bằng cách làm nhiễu hoàn lưu khí quyển toàn cầu.",
    "y": "Hoàn lưu khí quyển là cầu nối để một hiện tượng ở vùng này gây ảnh hưởng khí hậu ở vùng khác rất xa."
   }
  },
  {
   "id": "climate-change-scenario",
   "term": "climate change scenario",
   "pos": "n",
   "vi": "kịch bản biến đổi khí hậu",
   "en": "an assumed future used to test climate impacts",
   "deck": "climate",
   "freq": 3,
   "ex": "Projected climate is subject to uncertainties related to climate change scenarios and Global Circulation Models (GCMs’).",
   "src": "The Impact of Climate Change on Reservoir Inflows Using Multi Climate-Model under RCPs’ Including Extreme Events—A Case of Mangla Dam, Pakistan",
   "ipa": "ˈklaɪmət tʃeɪndʒ sɪˈnɛrioʊ",
   "note": {
    "d": "Khí hậu dự tính luôn kèm theo độ bất định, đến từ kịch bản biến đổi khí hậu và từ chính các mô hình hoàn lưu toàn cầu.",
    "y": "Một trong hai nguồn bất định của dự tính; nguồn còn lại là bản thân mô hình khí hậu."
   }
  },
  {
   "id": "climate-impact",
   "term": "climate impact",
   "pos": "n",
   "vi": "tác động khí hậu",
   "en": "the effect of climate change on a system or sector",
   "deck": "climate",
   "freq": 3,
   "ex": "Climate and landslides act at only partially overlapping spatial and temporal scales, complicating the evaluation of the climate impacts on landslides.",
   "src": "Landslides in a changing climate",
   "ipa": "ˈklaɪmət ˌɪmˈpækt",
   "note": {
    "d": "Khí hậu và sạt lở chỉ trùng nhau một phần về thang không gian và thời gian, khiến việc đánh giá tác động của khí hậu lên sạt lở trở nên phức tạp.",
    "y": "«the climate impacts on landslides» — tác động của khí hậu lên sạt lở, khó đánh giá vì hai hiện tượng lệch thang thời gian."
   }
  },
  {
   "id": "climate-variable",
   "term": "climate variable",
   "pos": "n",
   "vi": "biến khí hậu",
   "en": "a measurable quantity such as rainfall or temperature",
   "deck": "climate",
   "freq": 3,
   "ex": "On the supply side, renewable water resources will be affected by projected changes in precipitation patterns, temperature, and other climate variables.",
   "src": "Multimodel assessment of water scarcity under climate change",
   "ipa": "ˈklaɪmət ˈvɛriəbəl",
   "note": {
    "d": "Về phía nguồn cung, tài nguyên nước tái tạo sẽ chịu ảnh hưởng từ những thay đổi dự tính của chế độ mưa, nhiệt độ và các biến khí hậu khác.",
    "y": "«precipitation patterns, temperature, and other climate variables» — mỗi biến khí hậu là một đại lượng đầu vào của bài toán nước."
   }
  },
  {
   "id": "concentration-pathway",
   "term": "concentration pathway",
   "pos": "n",
   "vi": "lộ trình nồng độ",
   "en": "an assumed trajectory of greenhouse gas concentrations",
   "deck": "climate",
   "freq": 3,
   "ex": "Between the years 2000 and 2100, we project a very likely (90% probability) GSL rise of 0.5–1.2 m under representative concentration pathway (RCP) 8.5, 0.4–0.9 m under RCP 4.5, and 0.3–0.8 m under RCP 2.6.",
   "src": "Probabilistic 21st and 22nd century sea‐level projections at a global network of tide‐gauge sites",
   "ipa": "ˌkɑnsənˈtreɪʃən ˈpæˌθweɪ",
   "note": {
    "d": "Trong giai đoạn 2000-2100, chúng tôi dự tính mực nước biển toàn cầu rất có khả năng (xác suất 90%) dâng 0,5-1,2 m theo kịch bản RCP 8.5, 0,4-0,9 m theo RCP 4.5 và 0,3-0,8 m theo RCP 2.6.",
    "y": "Lộ trình nồng độ khí nhà kính theo thời gian; số càng lớn (8.5) thì càng nhiều bức xạ giữ lại."
   }
  },
  {
   "id": "greenhouse-gas",
   "term": "greenhouse gas",
   "pos": "n",
   "vi": "khí nhà kính",
   "en": "a gas such as CO2 that traps heat in the atmosphere",
   "deck": "climate",
   "freq": 3,
   "ex": "No natural cause is apparent for these trends, whereas the observed drying and warming are consistent with model studies of the response to increases in greenhouse gases.",
   "src": "Climate change in the Fertile Crescent and implications of the recent Syrian drought",
   "ipa": "ˈɡrinˌhaʊs ɡæs",
   "note": {
    "d": "Không thấy nguyên nhân tự nhiên nào giải thích được các xu thế này, trong khi hiện tượng khô hạn và nóng lên quan trắc được lại phù hợp với các nghiên cứu mô hình về phản ứng trước lượng khí nhà kính tăng lên.",
    "y": "«increases in greenhouse gases» — nguyên nhân được mô hình chỉ ra, sau khi đã loại trừ nguyên nhân tự nhiên."
   }
  },
  {
   "id": "interannual",
   "term": "interannual",
   "pos": "adj",
   "vi": "giữa các năm",
   "en": "varying from one year to the next",
   "deck": "climate",
   "freq": 3,
   "ex": "There are high levels of interannual variation in the occurrence of landslides.",
   "src": "Global fatal landslide occurrence from 2004 to 2016",
   "ipa": "ˌɪntərˈænjuəl",
   "note": {
    "d": "Số vụ sạt lở dao động rất mạnh giữa các năm.",
    "y": "«interannual variation» — dao động giữa năm này với năm khác; inter- nghĩa là giữa, khác intra- là bên trong."
   }
  },
  {
   "id": "mean-temperature",
   "term": "mean temperature",
   "pos": "n",
   "vi": "nhiệt độ trung bình",
   "en": "the average temperature over a period",
   "deck": "climate",
   "freq": 3,
   "ex": "Despite some spread in model projections, irrigation water consumption is generally projected to increase with higher global mean temperatures.",
   "src": "Global water resources affected by human interventions and climate change",
   "ipa": "min ˈtɛmprətʃər",
   "note": {
    "d": "Dù các mô hình dự tính còn phân tán, lượng nước tưới tiêu thụ nhìn chung vẫn được dự tính sẽ tăng khi nhiệt độ trung bình toàn cầu tăng cao hơn.",
    "y": "Đi cùng global: giá trị trung bình trên cả hành tinh, chứ không phải nhiệt độ một nơi."
   }
  },
  {
   "id": "mitigation-measure",
   "term": "mitigation measure",
   "pos": "n",
   "vi": "biện pháp giảm nhẹ",
   "en": "an action that lowers emissions or damage",
   "deck": "climate",
   "freq": 3,
   "ex": "Second, it is pointed out that possible feedback from already-adopted mitigation measures on risk perceptions has hardly been considered by current studies.",
   "src": "A Review of Risk Perceptions and Other Factors that Influence Flood Mitigation Behavior",
   "ipa": "ˌmɪtɪˈɡeɪʃən ˈmɛʒər",
   "note": {
    "d": "Thứ hai, bài chỉ ra rằng các nghiên cứu hiện nay hầu như chưa xét tới tác động ngược của những biện pháp giảm nhẹ đã áp dụng lên chính nhận thức rủi ro.",
    "y": "«already-adopted mitigation measures» — biện pháp đã áp dụng rồi; chính chúng có thể làm người dân chủ quan hơn."
   }
  },
  {
   "id": "projected-change",
   "term": "projected change",
   "pos": "n",
   "vi": "mức thay đổi dự tính",
   "en": "the difference a model predicts between future and present",
   "deck": "climate",
   "freq": 3,
   "ex": "On the supply side, renewable water resources will be affected by projected changes in precipitation patterns, temperature, and other climate variables.",
   "src": "Multimodel assessment of water scarcity under climate change",
   "ipa": "prəˈdʒɛktəd tʃeɪndʒ",
   "note": {
    "d": "Về phía nguồn cung, tài nguyên nước tái tạo sẽ chịu ảnh hưởng từ những thay đổi dự tính của chế độ mưa, nhiệt độ và các biến khí hậu khác.",
    "y": "«projected changes in precipitation patterns» — mức thay đổi do mô hình dự tính, chưa phải quan trắc thật."
   }
  },
  {
   "id": "representative-concentration-pathway",
   "term": "representative concentration pathway",
   "pos": "n",
   "vi": "kịch bản nồng độ khí nhà kính (RCP)",
   "en": "a standard scenario of future greenhouse gas concentrations",
   "deck": "climate",
   "freq": 3,
   "ex": "Between the years 2000 and 2100, we project a very likely (90% probability) GSL rise of 0.5–1.2 m under representative concentration pathway (RCP) 8.5, 0.4–0.9 m under RCP 4.5, and 0.3–0.8 m under RCP 2.6.",
   "src": "Probabilistic 21st and 22nd century sea‐level projections at a global network of tide‐gauge sites",
   "ipa": "ˌrɛprəˈzɛntətɪv ˌkɑnsənˈtreɪʃən ˈpæˌθweɪ",
   "note": {
    "d": "Trong giai đoạn 2000-2100, chúng tôi dự tính mực nước biển toàn cầu rất có khả năng (xác suất 90%) dâng 0,5-1,2 m theo kịch bản RCP 8.5, 0,4-0,9 m theo RCP 4.5 và 0,3-0,8 m theo RCP 2.6.",
    "y": "RCP là bộ kịch bản chuẩn của IPCC; câu cho thấy mực nước biển dâng khác hẳn nhau giữa các RCP."
   }
  },
  {
   "id": "surface-temperature",
   "term": "surface temperature",
   "pos": "n",
   "vi": "nhiệt độ bề mặt",
   "en": "the temperature measured near the ground or sea surface",
   "deck": "climate",
   "freq": 3,
   "ex": "The paper presents impacts by region, and also presents relationships between change in global mean surface temperature and impacts on the global flood hazard.",
   "src": "The impacts of climate change on river flood risk at the global scale",
   "ipa": "ˈsɜrfəs ˈtɛmprətʃər",
   "note": {
    "d": "Bài báo trình bày tác động theo từng vùng, đồng thời nêu quan hệ giữa mức tăng nhiệt độ bề mặt trung bình toàn cầu và tác động lên hiểm hoạ lũ toàn cầu.",
    "y": "«global mean surface temperature» — nhiệt độ trung bình bề mặt toàn cầu, thước đo chuẩn của mức nóng lên."
   }
  },
  {
   "id": "climate-adaptation",
   "term": "climate adaptation",
   "pos": "n",
   "vi": "thích ứng khí hậu",
   "en": "adjusting systems to reduce harm from climate change",
   "deck": "climate",
   "freq": 2,
   "ex": "There is also hope that flood control as a climate adaptation measure will bring significant socioeconomic benefits in the long term, such as improving the livelihoods of the poor, but the effects have yet to be proven.",
   "src": "How did old Tokyo overcome floods and poverty?",
   "ipa": "ˈklaɪmət ˌædəpˈteɪʃən",
   "note": {
    "d": "Cũng có hy vọng rằng kiểm soát lũ, với tư cách một biện pháp thích ứng khí hậu, sẽ mang lại lợi ích kinh tế - xã hội đáng kể về dài hạn, chẳng hạn cải thiện sinh kế người nghèo, nhưng tác dụng đó vẫn chưa được chứng minh.",
    "y": "«flood control as a climate adaptation measure» — kiểm soát lũ được xếp vào nhóm biện pháp thích ứng."
   }
  },
  {
   "id": "climate-condition",
   "term": "climate condition",
   "pos": "n",
   "vi": "điều kiện khí hậu",
   "en": "the state of climate in a place and period",
   "deck": "climate",
   "freq": 2,
   "ex": "Crop yields are projected to decrease under future climate conditions, and recent research suggests that yields have already been impacted.",
   "src": "Climate change has likely already affected global food production",
   "ipa": "ˈklaɪmət kənˈdɪʃən",
   "note": {
    "d": "Năng suất cây trồng được dự tính sẽ giảm trong điều kiện khí hậu tương lai, và nghiên cứu gần đây cho thấy năng suất thực ra đã bị ảnh hưởng rồi.",
    "y": "«under future climate conditions» — cụm giới từ nêu bối cảnh mà năng suất được dự tính."
   }
  },
  {
   "id": "climate-mitigation",
   "term": "climate mitigation",
   "pos": "n",
   "vi": "giảm nhẹ biến đổi khí hậu",
   "en": "cutting greenhouse gas emissions",
   "deck": "climate",
   "freq": 2,
   "ex": "Trade-offs can arise if climate mitigation policy encourages NbS with low biodiversity value, such as afforestation with non-native monocultures.",
   "src": "Understanding the value and limits of nature-based solutions to climate change and other global challenges",
   "ipa": "ˈklaɪmət ˌmɪtɪˈɡeɪʃən",
   "note": {
    "d": "Có thể nảy sinh đánh đổi nếu chính sách giảm nhẹ biến đổi khí hậu lại khuyến khích những giải pháp thuận thiên nghèo đa dạng sinh học, chẳng hạn trồng rừng thuần loài bằng cây ngoại lai.",
    "y": "«climate mitigation policy» — chính sách cắt phát thải; câu cảnh báo nó có thể xung đột với mục tiêu đa dạng sinh học."
   }
  },
  {
   "id": "climate-policy",
   "term": "climate policy",
   "pos": "n",
   "vi": "chính sách khí hậu",
   "en": "government rules addressing climate change",
   "deck": "climate",
   "freq": 2,
   "ex": "As climate policy turns increasingly towards greenhouse gas removal approaches such as afforestation, we stress the urgent need for natural and social scientists to engage with policy makers.",
   "src": "Understanding the value and limits of nature-based solutions to climate change and other global challenges",
   "ipa": "ˈklaɪmət ˈpɑləsi",
   "note": {
    "d": "Khi chính sách khí hậu ngày càng nghiêng về các cách loại bỏ khí nhà kính như trồng rừng, chúng tôi nhấn mạnh rằng giới khoa học tự nhiên và xã hội cần khẩn trương tham gia cùng nhà hoạch định chính sách.",
    "y": "«As climate policy turns increasingly towards ...» — chính sách khí hậu đang chuyển hướng, đó là bối cảnh của lời kêu gọi."
   }
  },
  {
   "id": "climate-system",
   "term": "climate system",
   "pos": "n",
   "vi": "hệ thống khí hậu",
   "en": "the coupled atmosphere, ocean, ice and land",
   "deck": "climate",
   "freq": 2,
   "ex": "Warming of the Earth climate system is unequivocal.",
   "src": "Landslides in a changing climate",
   "ipa": "ˈklaɪmət ˈsɪstəm",
   "note": {
    "d": "Việc hệ thống khí hậu Trái Đất đang nóng lên là điều không còn gì phải bàn cãi.",
    "y": "«the Earth climate system» — cả hệ khí quyển, đại dương, băng và sinh quyển, không chỉ không khí."
   }
  },
  {
   "id": "decadal",
   "term": "decadal",
   "pos": "adj",
   "vi": "theo thập kỷ",
   "en": "happening or measured over ten-year spans",
   "deck": "climate",
   "freq": 2,
   "ex": "We identify an autocyclic process in a sedimentary system driving large-scale channel migration in decadal to multidecadal cycles.",
   "src": "Large-Scale Channel Migration in the Sittang River Estuary",
   "ipa": "dɪˈkædəl",
   "note": {
    "d": "Chúng tôi xác định được một quá trình tự tuần hoàn trong hệ trầm tích, gây ra dịch chuyển lòng sông quy mô lớn theo chu kỳ hàng chục năm.",
    "y": "«decadal to multidecadal cycles» = chu kỳ hàng chục năm đến nhiều chục năm."
   }
  },
  {
   "id": "emission-scenario",
   "term": "emission scenario",
   "pos": "n",
   "vi": "kịch bản phát thải",
   "en": "an assumed future path of greenhouse gas releases",
   "deck": "climate",
   "freq": 2,
   "ex": "This study analyzes temperature projections in the Koshi River Basin in Nepal using data obtained from ten General Circulation Models (GCMs) for three IPCC Special Range of Emission Scenarios (SRES): B1, A1B and A2.",
   "src": "Analysis of temperature projections in the Koshi River Basin, Nepal",
   "ipa": "ɪˈmɪʃən sɪˈnɛrioʊ",
   "note": {
    "d": "Nghiên cứu này phân tích dự tính nhiệt độ ở lưu vực sông Koshi tại Nepal, dùng số liệu từ mười mô hình hoàn lưu chung theo ba kịch bản phát thải đặc biệt của IPCC: B1, A1B và A2.",
    "y": "«IPCC Special Range of Emission Scenarios (SRES)» — bộ kịch bản phát thải thế hệ trước, tiền thân của RCP."
   }
  },
  {
   "id": "sea-level-rise",
   "term": "sea level rise",
   "pos": "n",
   "vi": "nước biển dâng",
   "en": "the long-term increase of ocean surface height",
   "deck": "climate",
   "freq": 2,
   "ex": "Sea level rise will likely contribute toward increased storm surge risk.",
   "src": "Tropical cyclones and climate change",
   "ipa": "si ˈlɛvəl raɪz",
   "note": {
    "d": "Nước biển dâng nhiều khả năng sẽ góp phần làm tăng rủi ro nước dâng do bão.",
    "y": "Chủ ngữ của câu; nước biển dâng làm nền cao hơn nên nước dâng do bão càng dễ tràn vào."
   }
  },
  {
   "id": "uncertainty-range",
   "term": "uncertainty range",
   "pos": "n",
   "vi": "khoảng bất định",
   "en": "the spread of plausible values around an estimate",
   "deck": "climate",
   "freq": 2,
   "ex": "In the medium range (RCP 4.5) impact scenario, the uncertainty range of average runoff is relatively low.",
   "src": "The Impact of Climate Change on Reservoir Inflows Using Multi Climate-Model under RCPs’ Including Extreme Events—A Case of Mangla Dam, Pakistan",
   "ipa": "ənˈsɜrtənti reɪndʒ",
   "note": {
    "d": "Ở kịch bản tác động mức trung bình (RCP 4.5), khoảng bất định của dòng chảy trung bình là tương đối hẹp.",
    "y": "«the uncertainty range of average runoff is relatively low» — khoảng bất định hẹp nghĩa là kết quả đáng tin hơn."
   }
  },
  {
   "id": "warming-trend",
   "term": "warming trend",
   "pos": "n",
   "vi": "xu thế nóng lên",
   "en": "a steady rise of temperature over time",
   "deck": "climate",
   "freq": 2,
   "ex": "There has been also a long-term warming trend in the Eastern Mediterranean, adding to the drawdown of soil moisture.",
   "src": "Climate change in the Fertile Crescent and implications of the recent Syrian drought",
   "ipa": "ˈwɔrmɪŋ trɛnd",
   "note": {
    "d": "Cũng đã xuất hiện một xu thế nóng lên dài hạn ở Đông Địa Trung Hải, khiến độ ẩm đất càng bị rút cạn thêm.",
    "y": "«a long-term warming trend» — xu thế nóng lên kéo dài, khác một năm nóng bất thường."
   }
  },
  {
   "id": "carbon-emission",
   "term": "carbon emission",
   "pos": "n",
   "vi": "phát thải các-bon",
   "en": "the release of carbon dioxide into the atmosphere",
   "deck": "climate",
   "freq": 1,
   "ex": "Here we show - employing CoastalDEM-that 190 M people (150-250 M, 90% CI) currently occupy global land below projected high tide lines for 2100 under low carbon emissions, up from 110 M today, for a median increase of 80 M.",
   "src": "New elevation data triple estimates of global vulnerability to sea-level rise and coastal flooding",
   "ipa": "ˈkɑrbən ɪˈmɪʃən",
   "note": {
    "d": "Ở đây, bằng CoastalDEM, chúng tôi cho thấy 190 triệu người (150-250 triệu, khoảng tin cậy 90%) hiện đang sống trên phần đất thấp hơn mực triều cao dự tính cho năm 2100 theo kịch bản phát thải các-bon thấp, tăng từ mức 110 triệu hiện nay, tức tăng thêm trung vị 80 triệu người.",
    "y": "«under low carbon emissions» — theo kịch bản phát thải thấp; ngay cả kịch bản tốt nhất vẫn có 190 triệu người bị đe doạ."
   }
  },
  {
   "id": "climate-variability-and-change",
   "term": "climate variability and change",
   "pos": "phr",
   "vi": "dao động và biến đổi khí hậu",
   "en": "both natural swings and long-term shifts of climate",
   "deck": "climate",
   "freq": 1,
   "ex": "However, the potential impact is less clear at regional scales, but it is likely that climate variability and change will exacerbate food insecurity in areas currently vulnerable to hunger and undernutrition.",
   "src": "Climate Change Impacts on Global Food Security",
   "ipa": "ˈklaɪmət vɛriəˈbɪlɪti ənd tʃeɪndʒ",
   "note": {
    "d": "Tuy nhiên, tác động tiềm tàng ở quy mô khu vực còn ít rõ ràng hơn; dù vậy nhiều khả năng dao động và biến đổi khí hậu sẽ làm trầm trọng thêm tình trạng mất an ninh lương thực ở những vùng vốn đã dễ bị đói và suy dinh dưỡng.",
    "y": "Cụm ghép cố định: variability là dao động ngắn hạn, change là xu thế dài hạn; cả hai cùng đe doạ an ninh lương thực."
   }
  },
  {
   "id": "far-future",
   "term": "far future",
   "pos": "n",
   "vi": "tương lai xa",
   "en": "the late part of this century",
   "deck": "climate",
   "freq": 1,
   "ex": "Future climate scenarios are predicted for three 27-year periods: the near future (2020–2046), middle future (2047–2073), and far future (2074–2100) with a baseline period of (1981–2005) under two Representative Concentration Pathway (RCP) scenarios: RCP4.5 and RCP8.5 of the IPCC Assessment Report 5 (AR5).",
   "src": "Projecting the Impact of Climate Change on Temperature, Precipitation, and Discharge in the Bago River Basin",
   "ipa": "fɑr ˈfjutʃər",
   "note": {
    "d": "Kịch bản khí hậu tương lai được dự báo cho ba giai đoạn 27 năm: tương lai gần (2020-2046), tương lai giữa (2047-2073) và tương lai xa (2074-2100), với thời kỳ nền 1981-2005, theo hai kịch bản RCP4.5 và RCP8.5 của Báo cáo Đánh giá lần thứ 5 của IPCC.",
    "y": "Giai đoạn 2074-2100, thời kỳ xa nhất trong ba thời kỳ dự tính."
   }
  },
  {
   "id": "near-future",
   "term": "near future",
   "pos": "n",
   "vi": "tương lai gần",
   "en": "roughly the next two or three decades",
   "deck": "climate",
   "freq": 1,
   "ex": "Future climate scenarios are predicted for three 27-year periods: the near future (2020–2046), middle future (2047–2073), and far future (2074–2100) with a baseline period of (1981–2005) under two Representative Concentration Pathway (RCP) scenarios: RCP4.5 and RCP8.5 of the IPCC Assessment Report 5 (AR5).",
   "src": "Projecting the Impact of Climate Change on Temperature, Precipitation, and Discharge in the Bago River Basin",
   "ipa": "nɪr ˈfjutʃər",
   "note": {
    "d": "Kịch bản khí hậu tương lai được dự báo cho ba giai đoạn 27 năm: tương lai gần (2020-2046), tương lai giữa (2047-2073) và tương lai xa (2074-2100), với thời kỳ nền 1981-2005, theo hai kịch bản RCP4.5 và RCP8.5 của Báo cáo Đánh giá lần thứ 5 của IPCC.",
    "y": "Giai đoạn 2020-2046; chia ba thời kỳ để thấy tác động lớn dần theo thời gian."
   }
  },
  {
   "id": "regional-climate-model",
   "term": "regional climate model",
   "pos": "n",
   "vi": "mô hình khí hậu khu vực",
   "en": "a fine-scale climate model nested in a global one",
   "deck": "climate",
   "freq": 1,
   "ex": "In this study, projected future rainfall from a regional climate models (RCM) were utilized to assess the impact of potential change in rainfall on streamflow over the 3S Sub-Basin that encompasses Sekong, Sesan, Srepok Joint River Basins (3S Sub-Basins), a 78,650 km2 tributary of the Lower Mekong Basin.",
   "src": "Assessment of Future Rainfall Change and Its Impact on Water Resources in the Mekong River 3S Sub-Basins",
   "ipa": "ˈridʒənəl ˈklaɪmət ˈmɑdəl",
   "note": {
    "d": "Trong nghiên cứu này, lượng mưa tương lai dự tính từ mô hình khí hậu khu vực được dùng để đánh giá tác động của thay đổi mưa lên dòng chảy ở tiểu lưu vực 3S — gồm ba lưu vực Sekong, Sesan, Srepok — một phụ lưu rộng 78.650 km² của hạ lưu vực Mê Kông.",
    "y": "RCM chạy trên một vùng với ô lưới mịn hơn GCM, nên tả được địa hình và mưa địa phương tốt hơn."
   }
  },
  {
   "id": "warming-climate",
   "term": "warming climate",
   "pos": "n",
   "vi": "khí hậu đang ấm lên",
   "en": "a climate whose average temperature is rising",
   "deck": "climate",
   "freq": 1,
   "ex": "Finally, we give recommendations for landslide adaptation and risk reduction strategies in the framework of a warming climate.",
   "src": "Landslides in a changing climate",
   "ipa": "ˈwɔrmɪŋ ˈklaɪmət",
   "note": {
    "d": "Cuối cùng, chúng tôi đưa ra khuyến nghị cho các chiến lược thích ứng và giảm nhẹ rủi ro sạt lở trong bối cảnh khí hậu đang ấm lên.",
    "y": "«in the framework of a warming climate» — đặt trong bối cảnh khí hậu đang ấm lên, chứ không phải khí hậu tĩnh."
   }
  },
  {
   "id": "disaster",
   "term": "disaster",
   "pos": "n",
   "vi": "thảm họa, thiên tai",
   "en": "an event causing serious damage that overwhelms local capacity",
   "deck": "drr",
   "freq": 128,
   "ex": "Investigation of the relationships between socioeconomic factors and water-related disasters, such as floods, is rather complex.",
   "src": "A local-scale analysis to understand differences in socioeconomic factors affecting economic loss due to floods among different communities",
   "ipa": "dɪˈzæstər",
   "note": {
    "d": "Việc tìm hiểu quan hệ giữa các yếu tố kinh tế - xã hội và thiên tai liên quan đến nước, chẳng hạn lũ lụt, là khá phức tạp.",
    "y": "«water-related disasters» = thiên tai liên quan đến nước; floods được nêu làm ví dụ ngay sau such as."
   }
  },
  {
   "id": "household",
   "term": "household",
   "pos": "n",
   "vi": "hộ gia đình",
   "en": "all the people living together in one home, as a survey unit",
   "deck": "drr",
   "freq": 73,
   "ex": "Data was collected using a questionnaire survey delivered to randomly selected households in Rathnapura, Sri Lanka, in September 2017.",
   "src": "A local-scale analysis to understand differences in socioeconomic factors affecting economic loss due to floods among different communities",
   "ipa": "ˈhaʊsˌhoʊld",
   "note": {
    "d": "Dữ liệu được thu thập bằng khảo sát bảng hỏi gửi tới các hộ gia đình chọn ngẫu nhiên ở Rathnapura, Sri Lanka, vào tháng 9 năm 2017.",
    "y": "«randomly selected households» — hộ gia đình là đơn vị lấy mẫu của khảo sát."
   }
  },
  {
   "id": "hazard",
   "term": "hazard",
   "pos": "n",
   "vi": "hiểm họa",
   "en": "a process or event that may cause harm",
   "deck": "drr",
   "freq": 54,
   "ex": "This article reviews the main insights from selected literature on risk perception, particularly in connection with natural hazards.",
   "src": "The Risk Perception Paradox—Implications for Governance and Communication of Natural Hazards",
   "ipa": "ˈhæzərd",
   "note": {
    "d": "Bài báo này điểm lại những hiểu biết chính rút ra từ các tài liệu chọn lọc về nhận thức rủi ro, đặc biệt là trong mối liên hệ với hiểm hoạ tự nhiên.",
    "y": "«natural hazards» — hiểm hoạ là hiện tượng tự nhiên; nó chỉ thành rủi ro khi gặp con người và tài sản."
   }
  },
  {
   "id": "agricultural",
   "term": "agricultural",
   "pos": "adj",
   "vi": "thuộc nông nghiệp",
   "en": "relating to farming and crop production",
   "deck": "drr",
   "freq": 43,
   "ex": "Integrating biophysical and socio-economic factors for land-use and land-cover change projection in agricultural economic regions.",
   "src": "Integrating biophysical and socio-economic factors for land-use and land-cover change projection in agricultural economic regions",
   "ipa": "ˌæɡrəˈkʌltʃərəl",
   "note": {
    "d": "Tích hợp các yếu tố sinh - địa - lý và kinh tế - xã hội để dự tính thay đổi sử dụng đất và lớp phủ đất ở các vùng kinh tế nông nghiệp.",
    "y": "«agricultural economic regions» = các vùng kinh tế nông nghiệp — phạm vi không gian của nghiên cứu."
   }
  },
  {
   "id": "income",
   "term": "income",
   "pos": "n",
   "vi": "thu nhập",
   "en": "the money a person or household receives",
   "deck": "drr",
   "freq": 41,
   "ex": "On the other hand flood impact is higher on households depend heavily on natural resources for their livelihood, and having lower income.",
   "src": "Socioeconomic Vulnerability to Disaster Risk: A Case Study of Flood and Drought Impact in a Rural Sri Lankan Community",
   "ipa": "ˈɪnˌkʌm",
   "note": {
    "d": "Mặt khác, tác động của lũ nặng nề hơn với những hộ sống chủ yếu nhờ tài nguyên thiên nhiên và có thu nhập thấp.",
    "y": "«having lower income» — thu nhập thấp là một trong hai đặc điểm khiến hộ chịu tác động nặng hơn."
   }
  },
  {
   "id": "vulnerability",
   "term": "vulnerability",
   "pos": "n",
   "vi": "tính dễ bị tổn thương",
   "en": "the conditions that make people or assets easily harmed",
   "deck": "drr",
   "freq": 39,
   "ex": "Household per capita income and education level of the household head had a significant influence on vulnerability to cut slope failures.",
   "src": "Assessment of physical vulnerability of buildings and socio-economic vulnerability of residents to rainfall induced cut slope failures: A case study in central highlands, Sri Lanka",
   "ipa": "ˌvʌlnərəˈbɪlɪti",
   "note": {
    "d": "Thu nhập bình quân đầu người của hộ và trình độ học vấn của chủ hộ có ảnh hưởng đáng kể tới mức dễ tổn thương trước sự cố sạt mái dốc đào.",
    "y": "«vulnerability to cut slope failures» — dễ tổn thương trước sự cố sạt mái dốc đào."
   }
  },
  {
   "id": "poverty",
   "term": "poverty",
   "pos": "n",
   "vi": "nghèo đói",
   "en": "the state of lacking enough income and resources to live well",
   "deck": "drr",
   "freq": 38,
   "ex": "It is said that poverty traps caused by floods have been hindering sustainable development and accelerating under climate change.",
   "src": "Accelerated widening of economic disparity due to recurrent floods",
   "ipa": "ˈpɑvərti",
   "note": {
    "d": "Người ta cho rằng bẫy nghèo do lũ gây ra đang cản trở phát triển bền vững và ngày càng nghiêm trọng hơn dưới tác động của biến đổi khí hậu.",
    "y": "«poverty traps» = bẫy nghèo — vòng luẩn quẩn nghèo vì lũ, rồi vì nghèo mà càng dễ tổn thương trước lũ."
   }
  },
  {
   "id": "risk-reduction",
   "term": "risk reduction",
   "pos": "n",
   "vi": "giảm nhẹ rủi ro",
   "en": "lowering the chance or severity of harm",
   "deck": "drr",
   "freq": 37,
   "ex": "Landslide susceptibility mapping is one of the most important counter measures in landslide risk reduction, as this paper will show.",
   "src": "Landslide Susceptibility Analysis Using GIS and Logistic Regression Model A Case Study In Malang, Indonesia",
   "ipa": "rɪsk rəˈdʌkʃən",
   "note": {
    "d": "Lập bản đồ nguy cơ sạt lở là một trong những biện pháp đối phó quan trọng nhất để giảm nhẹ rủi ro sạt lở, như bài báo này sẽ chỉ ra.",
    "y": "«landslide risk reduction» — mục tiêu cuối; lập bản đồ chỉ là một biện pháp phục vụ mục tiêu này."
   }
  },
  {
   "id": "disaster-risk-reduction",
   "term": "disaster risk reduction",
   "pos": "n",
   "vi": "giảm nhẹ rủi ro thiên tai",
   "en": "the practice of reducing damage caused by natural hazards",
   "deck": "drr",
   "freq": 33,
   "ex": "This may be the case for disaster risk reduction, which involves transformation rather than preservation of the \"state of the system\".",
   "src": "Resilience and disaster risk reduction: an etymological journey",
   "ipa": "dɪˈzæstər rɪsk rəˈdʌkʃən",
   "note": {
    "d": "Điều này có thể đúng với giảm nhẹ rủi ro thiên tai, vốn đòi hỏi chuyển đổi hệ thống chứ không phải giữ nguyên «trạng thái của hệ thống».",
    "y": "Cụm cố định của ngành (viết tắt DRR); câu nhấn rằng DRR đòi hỏi chuyển đổi chứ không phải giữ nguyên hiện trạng."
   }
  },
  {
   "id": "infrastructure",
   "term": "infrastructure",
   "pos": "n",
   "vi": "cơ sở hạ tầng",
   "en": "the basic physical systems such as roads, power and water",
   "deck": "drr",
   "freq": 32,
   "ex": "Sea‐level rise due to both climate change and non‐climatic factors threatens coastal settlements, infrastructure, and ecosystems.",
   "src": "Probabilistic 21st and 22nd century sea‐level projections at a global network of tide‐gauge sites",
   "ipa": "ˌɪnfrəˈstrʌktʃər",
   "note": {
    "d": "Nước biển dâng — do cả biến đổi khí hậu lẫn các yếu tố phi khí hậu — đang đe doạ các khu dân cư ven biển, cơ sở hạ tầng và hệ sinh thái.",
    "y": "Nằm trong chuỗi ba đối tượng bị đe doạ: khu dân cư, cơ sở hạ tầng và hệ sinh thái."
   }
  },
  {
   "id": "developing-country",
   "term": "developing country",
   "pos": "n",
   "vi": "nước đang phát triển",
   "en": "a country with lower income and industrial capacity",
   "deck": "drr",
   "freq": 28,
   "ex": "Approximately 67% of the studies were conducted in developed countries, with the remaining 33% performed in developing countries.",
   "src": "A Systematic Review of Flood Damage Assessment: Insight for the Data-Scarce Regions",
   "ipa": "dɪˈvɛləpɪŋ ˈkʌntri",
   "note": {
    "d": "Khoảng 67% số nghiên cứu được tiến hành ở các nước phát triển, 33% còn lại thực hiện ở các nước đang phát triển.",
    "y": "Nhóm 33% còn lại; đối lập trực tiếp với developed countries ở vế trước."
   }
  },
  {
   "id": "socioeconomic",
   "term": "socioeconomic",
   "pos": "adj",
   "vi": "kinh tế - xã hội",
   "en": "relating to both social and economic conditions",
   "deck": "drr",
   "freq": 25,
   "ex": "Investigation of the relationships between socioeconomic factors and water-related disasters, such as floods, is rather complex.",
   "src": "A local-scale analysis to understand differences in socioeconomic factors affecting economic loss due to floods among different communities",
   "ipa": "soʊˌsiˌoʊˌɛkəˈnɑmɪk",
   "note": {
    "d": "Việc tìm hiểu quan hệ giữa các yếu tố kinh tế - xã hội và thiên tai liên quan đến nước, chẳng hạn lũ lụt, là khá phức tạp.",
    "y": "«socioeconomic factors» — tính từ ghép, chỉ nhóm yếu tố con người đặt cạnh yếu tố tự nhiên là thiên tai."
   }
  },
  {
   "id": "land-use",
   "term": "land use",
   "pos": "n",
   "vi": "sử dụng đất",
   "en": "how humans use an area of land",
   "deck": "drr",
   "freq": 21,
   "ex": "Assessment of potential impacts of climate and land use changes on stream flow: a case study of the Nam Xong watershed in Lao PDR.",
   "src": "Assessment of potential impacts of climate and land use changes on stream flow: a case study of the Nam Xong watershed in Lao PDR",
   "ipa": "lænd jus",
   "note": {
    "d": "Đánh giá tác động tiềm tàng của biến đổi khí hậu và biến đổi sử dụng đất lên dòng chảy sông: nghiên cứu điển hình lưu vực Nam Xong, CHDCND Lào.",
    "y": "Đi cặp với climate: hai nhóm thay đổi cùng tác động lên dòng chảy, một do trời một do người."
   }
  },
  {
   "id": "stakeholder",
   "term": "stakeholder",
   "pos": "n",
   "vi": "bên liên quan",
   "en": "a person or group affected by, or able to affect, a decision",
   "deck": "drr",
   "freq": 21,
   "ex": "Data Communication for Efficient Water Resource Management Among Multiple Stakeholders – A Case Study in the Bago River Basin, Myanmar –.",
   "src": "Data Communication for Efficient Water Resource Management Among Multiple Stakeholders – A Case Study in the Bago River Basin, Myanmar –",
   "ipa": "ˈsteɪkˌhoʊldər",
   "note": {
    "d": "Truyền thông dữ liệu phục vụ quản lý tài nguyên nước hiệu quả giữa nhiều bên liên quan — nghiên cứu điển hình tại lưu vực sông Bago, Myanmar.",
    "y": "«Among Multiple Stakeholders» — nhiều bên cùng dùng chung nguồn nước nên phải chia sẻ dữ liệu với nhau."
   }
  },
  {
   "id": "education",
   "term": "education",
   "pos": "n",
   "vi": "giáo dục",
   "en": "teaching that builds knowledge and skills",
   "deck": "drr",
   "freq": 18,
   "ex": "Our findings highlight how recurrent flooding not only entrenches poverty but also exacerbates disparities by disrupting education.",
   "src": "How recurrent floods create inequality in livelihood improvement through education",
   "ipa": "ˌɛdʒəˈkeɪʃən",
   "note": {
    "d": "Phát hiện của chúng tôi cho thấy lũ lặp đi lặp lại không chỉ khiến cái nghèo dai dẳng hơn mà còn khoét sâu bất bình đẳng do làm gián đoạn việc học hành.",
    "y": "«by disrupting education» — cơ chế trung gian: lũ làm gián đoạn việc học, từ đó khoét sâu bất bình đẳng."
   }
  },
  {
   "id": "farmer",
   "term": "farmer",
   "pos": "n",
   "vi": "nông dân",
   "en": "a person who grows crops or raises animals",
   "deck": "drr",
   "freq": 17,
   "ex": "Exploring the effect of abrupt society transformation on flood responses among farmers in China using an agent-based model.",
   "src": "Exploring the effect of abrupt society transformation on flood responses among farmers in China using an agent-based model",
   "ipa": "ˈfɑrmər",
   "note": {
    "d": "Tìm hiểu tác động của biến chuyển xã hội đột ngột lên cách nông dân Trung Quốc ứng phó với lũ, bằng mô hình dựa trên tác nhân.",
    "y": "«flood responses among farmers in China» — nông dân là tác nhân được mô phỏng trong mô hình dựa trên tác nhân."
   }
  },
  {
   "id": "exposed",
   "term": "exposed",
   "pos": "adj",
   "vi": "bị phơi nhiễm (trước hiểm hoạ)",
   "en": "located where a hazard can reach it",
   "deck": "drr",
   "freq": 16,
   "ex": "The number of large cities exposed to water scarcity is projected to increase from 193 to 193-284, including 10-20 megacities.",
   "src": "Future global urban water scarcity and potential solutions",
   "ipa": "ɪkˈspoʊzd",
   "note": {
    "d": "Số thành phố lớn phải đối mặt với khan hiếm nước được dự tính tăng từ 193 lên 193-284, trong đó có 10-20 siêu đô thị.",
    "y": "«cities exposed to water scarcity» — bị phơi nhiễm, tức nằm trong vùng chịu tác động."
   }
  },
  {
   "id": "governance",
   "term": "governance",
   "pos": "n",
   "vi": "quản trị",
   "en": "the way decisions and rules are made and enforced",
   "deck": "drr",
   "freq": 16,
   "ex": "We outline the major financial and governance challenges to implementing NbS at scale, highlighting avenues for further research.",
   "src": "Understanding the value and limits of nature-based solutions to climate change and other global challenges",
   "ipa": "ˈɡʌvərnəns",
   "note": {
    "d": "Chúng tôi phác ra những rào cản lớn về tài chính và về quản trị khi nhân rộng giải pháp thuận thiên, đồng thời chỉ ra hướng nghiên cứu tiếp theo.",
    "y": "Đi cặp với financial: hai nhóm rào cản khi nhân rộng — một là tiền, hai là thể chế và cách ra quyết định."
   }
  },
  {
   "id": "land-use-change",
   "term": "land-use change",
   "pos": "n",
   "vi": "biến đổi sử dụng đất",
   "en": "a shift in how land is used over time",
   "deck": "drr",
   "freq": 15,
   "ex": "An integrated approach to evaluate potential impact of precipitation and land-use change on streamflow in Srepok River Basin.",
   "src": "An integrated approach to evaluate potential impact of precipitation and land-use change on streamflow in Srepok River Basin",
   "ipa": "ˈlænˈdjus tʃeɪndʒ",
   "note": {
    "d": "Một cách tiếp cận tích hợp để đánh giá tác động tiềm tàng của giáng thủy và biến đổi sử dụng đất lên dòng chảy ở lưu vực sông Srepok.",
    "y": "Cùng với precipitation là hai tác nhân được đánh giá; một do khí hậu, một do con người."
   }
  },
  {
   "id": "asset",
   "term": "asset",
   "pos": "n",
   "vi": "tài sản",
   "en": "something of value owned by a household or firm",
   "deck": "drr",
   "freq": 13,
   "ex": "Their flood experience is also collected to explore the practical risk management solutions and preserve those as their local assets.",
   "src": "Measuring capacities and protecting communities: strengthening regional resilience in the flooded industrial area in Thailand",
   "ipa": "ˈæˌsɛt",
   "note": {
    "d": "Kinh nghiệm ứng phó lũ của họ cũng được thu thập để tìm ra giải pháp quản lý rủi ro thiết thực và giữ lại chúng như một tài sản của địa phương.",
    "y": "«their local assets» — kinh nghiệm ứng phó được coi như tài sản của cộng đồng, nghĩa bóng chứ không phải tiền bạc."
   }
  },
  {
   "id": "economic-development",
   "term": "economic development",
   "pos": "n",
   "vi": "phát triển kinh tế",
   "en": "long-term improvement in living standards and structure",
   "deck": "drr",
   "freq": 13,
   "ex": "There are many regions where our freshwater resources are inadequate to meet domestic, economic development and environmental needs.",
   "src": "Water management: Current and future challenges and research directions",
   "ipa": "ˌɛkəˈnɑmɪk dɪˈvɛləpmənt",
   "note": {
    "d": "Có nhiều vùng mà nguồn nước ngọt không đủ để đáp ứng cùng lúc nhu cầu sinh hoạt, phát triển kinh tế và nhu cầu môi trường.",
    "y": "Một trong ba nhu cầu cạnh tranh nhau: sinh hoạt, phát triển kinh tế và môi trường."
   }
  },
  {
   "id": "inequality",
   "term": "inequality",
   "pos": "n",
   "vi": "bất bình đẳng",
   "en": "unequal distribution of income or opportunity",
   "deck": "drr",
   "freq": 13,
   "ex": "Gini coefficient predictions confirmed that educational support is effective in reducing income inequality.",
   "src": "Quantitative Evaluation of Flood Control Measures and Educational Support to Reduce Disaster Vulnerability of the Poor Based on Household-level Savings Estimates",
   "ipa": "ˌɪnɪˈkwɑləti",
   "note": {
    "d": "Dự tính hệ số Gini khẳng định rằng hỗ trợ giáo dục có hiệu quả trong việc thu hẹp bất bình đẳng thu nhập.",
    "y": "«income inequality» = bất bình đẳng thu nhập, thứ mà hệ số Gini đo được."
   }
  },
  {
   "id": "livelihood",
   "term": "livelihood",
   "pos": "n",
   "vi": "sinh kế",
   "en": "the way people make a living",
   "deck": "drr",
   "freq": 13,
   "ex": "Coastal inundations are an increasing threat to the lives and livelihoods of people living in low-lying, highlypopulated coastal areas.",
   "src": "Development of an Impact-Oriented Quantitative Coastal Inundation forecasting and early warning system with social and economic assessment",
   "ipa": "ˈlaɪvliˌhʊd",
   "note": {
    "d": "Ngập ven biển đang ngày càng đe doạ tính mạng và sinh kế của người dân sống ở những vùng ven biển trũng thấp, đông dân.",
    "y": "«the lives and livelihoods» — cặp từ quen thuộc: mất mạng và mất kế sinh nhai là hai loại tổn thất khác nhau."
   }
  },
  {
   "id": "risk-perception",
   "term": "risk perception",
   "pos": "n",
   "vi": "nhận thức rủi ro",
   "en": "how people judge the danger they face",
   "deck": "drr",
   "freq": 13,
   "ex": "This article reviews the main insights from selected literature on risk perception, particularly in connection with natural hazards.",
   "src": "The Risk Perception Paradox—Implications for Governance and Communication of Natural Hazards",
   "ipa": "rɪsk pərˈsɛpʃən",
   "note": {
    "d": "Bài báo này điểm lại những hiểu biết chính rút ra từ các tài liệu chọn lọc về nhận thức rủi ro, đặc biệt là trong mối liên hệ với hiểm hoạ tự nhiên.",
    "y": "Chủ đề của bài tổng quan: người dân cảm nhận rủi ro thế nào, khác với rủi ro tính bằng số liệu."
   }
  },
  {
   "id": "urbanization",
   "term": "urbanization",
   "pos": "n",
   "vi": "đô thị hóa",
   "en": "the growth of towns and cities over rural land",
   "deck": "drr",
   "freq": 13,
   "ex": "Urbanization and climate change are together exacerbating water scarcity-where water demand exceeds availability-for the world's cities.",
   "src": "Future global urban water scarcity and potential solutions",
   "ipa": "ˌɜrbənəˈzeɪʃən",
   "note": {
    "d": "Đô thị hoá và biến đổi khí hậu đang cùng nhau làm trầm trọng thêm tình trạng khan hiếm nước — khi nhu cầu vượt quá lượng nước có được — tại các thành phố trên thế giới.",
    "y": "Đứng cùng climate change làm chủ ngữ kép: một sức ép do người, một do khí hậu."
   }
  },
  {
   "id": "exposure",
   "term": "exposure",
   "pos": "n",
   "vi": "mức phơi bày (trước hiểm họa)",
   "en": "the people and assets located in hazard-prone areas",
   "deck": "drr",
   "freq": 12,
   "ex": "Furthermore, we identify needs for further research and scope for improvement in this kind of scenario-based exposure analysis.",
   "src": "Future Coastal Population Growth and Exposure to Sea-Level Rise and Coastal Flooding - A Global Assessment",
   "ipa": "ɪkˈspoʊʒər",
   "note": {
    "d": "Hơn nữa, chúng tôi chỉ ra những nội dung cần nghiên cứu thêm và phần còn có thể cải thiện trong kiểu phân tích phơi nhiễm theo kịch bản này.",
    "y": "«scenario-based exposure analysis» — phân tích xem theo mỗi kịch bản thì bao nhiêu người và tài sản bị phơi ra trước hiểm hoạ."
   }
  },
  {
   "id": "income-level",
   "term": "income level",
   "pos": "n",
   "vi": "mức thu nhập",
   "en": "how much money a household or country earns",
   "deck": "drr",
   "freq": 12,
   "ex": "Here, we show a novel method for estimating income levels of individual building in urban and peri-urban rural areas.",
   "src": "Estimating the level of income in individual buildings using data from household interview surveys and satellite imagery: Case study in Myanmar and Nicaragua",
   "ipa": "ˈɪnˌkʌm ˈlɛvəl",
   "note": {
    "d": "Ở đây chúng tôi trình bày một phương pháp mới để ước tính mức thu nhập của từng ngôi nhà ở khu đô thị và vùng nông thôn ven đô.",
    "y": "«income levels of individual building» — ước tính thu nhập tới từng ngôi nhà, mức chi tiết hiếm có."
   }
  },
  {
   "id": "well-being",
   "term": "well-being",
   "pos": "n",
   "vi": "phúc lợi, chất lượng sống",
   "en": "a person's overall health, comfort and satisfaction",
   "deck": "drr",
   "freq": 12,
   "ex": "Preliminary Insights into Economic Well-Being from a Geospatial Perspective: Empirical Evidence from 6 Counties in China.",
   "src": "Preliminary Insights into Economic Well-Being from a Geospatial Perspective: Empirical Evidence from 6 Counties in China",
   "ipa": "ˌwɛlˈbiɪŋ",
   "note": {
    "d": "Những hiểu biết sơ bộ về mức sống nhìn từ góc độ địa không gian: bằng chứng thực nghiệm từ 6 huyện ở Trung Quốc.",
    "y": "«Economic Well-Being» = mức sống về mặt kinh tế, rộng hơn thu nhập đơn thuần."
   }
  },
  {
   "id": "decision-making",
   "term": "decision making",
   "pos": "n",
   "vi": "việc ra quyết định",
   "en": "the process of choosing among options",
   "deck": "drr",
   "freq": 11,
   "ex": "User Stories-Based Requirement Elicitation for Data Visualization to Support Decision Making in Water Resource Management at Bago River Basin.",
   "src": "User Stories-Based Requirement Elicitation for Data Visualization to Support Decision Making in Water Resource Management at Bago River Basin",
   "ipa": "dɪˈsɪʒən ˈmeɪkɪŋ",
   "note": {
    "d": "Thu thập yêu cầu dựa trên user story cho bài toán trực quan hoá dữ liệu, nhằm hỗ trợ ra quyết định trong quản lý tài nguyên nước ở lưu vực sông Bago.",
    "y": "«to Support Decision Making» — trực quan hoá dữ liệu phục vụ việc ra quyết định, không phải để trưng bày."
   }
  },
  {
   "id": "economic-growth",
   "term": "economic growth",
   "pos": "n",
   "vi": "tăng trưởng kinh tế",
   "en": "an increase in a country's output over time",
   "deck": "drr",
   "freq": 11,
   "ex": "Surprisingly, the poor in our study differed from the hypothesis in that there was still improving economic growth, albeit small.",
   "src": "Do floods widen the economic disparity gap?",
   "ipa": "ˌɛkəˈnɑmɪk ɡroʊθ",
   "note": {
    "d": "Đáng ngạc nhiên là nhóm nghèo trong nghiên cứu của chúng tôi lại khác với giả thuyết: kinh tế của họ vẫn tăng trưởng, dù mức tăng nhỏ.",
    "y": "«still improving economic growth, albeit small» — vẫn tăng trưởng, tuy nhỏ; albeit là cách nói trang trọng của although."
   }
  },
  {
   "id": "food-security",
   "term": "food security",
   "pos": "n",
   "vi": "an ninh lương thực",
   "en": "reliable access to enough safe, nutritious food",
   "deck": "drr",
   "freq": 11,
   "ex": "Based on research results desirable and tailored strategies for food security improvement in individual clusters were developed.",
   "src": "The Role of Agriculture in Ensuring Food Security in Developing Countries: Considerations in the Context of the Problem of Sustainable Food Production",
   "ipa": "fud sɪˈkjʊrəti",
   "note": {
    "d": "Dựa trên kết quả nghiên cứu, các chiến lược phù hợp và được thiết kế riêng cho từng cụm đã được xây dựng để cải thiện an ninh lương thực.",
    "y": "«strategies for food security improvement» — chiến lược cải thiện an ninh lương thực, thiết kế riêng cho từng cụm."
   }
  },
  {
   "id": "insurance",
   "term": "insurance",
   "pos": "n",
   "vi": "bảo hiểm",
   "en": "paying a premium to be compensated for losses",
   "deck": "drr",
   "freq": 11,
   "ex": "Binding credit market constraints and incomplete insurance can limit investment in activities with high expected profits.",
   "src": "Agricultural Decisions after Relaxing Credit and Risk Constraints *",
   "ipa": "ˌɪnˈʃʊrəns",
   "note": {
    "d": "Ràng buộc chặt của thị trường tín dụng và bảo hiểm không đầy đủ có thể khiến người ta không dám đầu tư vào những hoạt động hứa hẹn lợi nhuận cao.",
    "y": "«incomplete insurance» — bảo hiểm không phủ hết rủi ro, nên người nghèo không dám đầu tư mạo hiểm."
   }
  },
  {
   "id": "decision-maker",
   "term": "decision maker",
   "pos": "n",
   "vi": "người ra quyết định",
   "en": "a person with authority to choose a course of action",
   "deck": "drr",
   "freq": 10,
   "ex": "We further advocate that uncertainties in the landslide projections must be quantified and communicated to decision makers and the public.",
   "src": "Landslides in a changing climate",
   "ipa": "dɪˈsɪʒən ˈmeɪkər",
   "note": {
    "d": "Chúng tôi còn cho rằng độ bất định trong các dự tính sạt lở phải được định lượng và truyền đạt tới người ra quyết định lẫn công chúng.",
    "y": "Đối tượng nhận thông tin, đặt cạnh the public: nhà quản lý và người dân đều cần biết mức bất định."
   }
  },
  {
   "id": "household-survey",
   "term": "household survey",
   "pos": "n",
   "vi": "khảo sát hộ gia đình",
   "en": "collecting data by questioning families",
   "deck": "drr",
   "freq": 10,
   "ex": "While the model was developed using household survey data from Bago, Myanmar, the framework should be applicable to other regions as well.",
   "src": "Quantitative Evaluation of Flood Control Measures and Educational Support to Reduce Disaster Vulnerability of the Poor Based on Household-level Savings Estimates",
   "ipa": "ˈhaʊsˌhoʊld sərˈveɪ",
   "note": {
    "d": "Tuy mô hình được xây dựng từ dữ liệu khảo sát hộ gia đình ở Bago, Myanmar, khung phân tích này vẫn nên áp dụng được cho các vùng khác.",
    "y": "Cách thu thập dữ liệu ở cấp hộ gia đình; nhắc tới để nói rõ mô hình dựng từ số liệu của một địa phương cụ thể."
   }
  },
  {
   "id": "questionnaire-survey",
   "term": "questionnaire survey",
   "pos": "n",
   "vi": "khảo sát bằng bảng hỏi",
   "en": "data collection using a fixed set of written questions",
   "deck": "drr",
   "freq": 10,
   "ex": "Data was collected using a questionnaire survey delivered to randomly selected households in Rathnapura, Sri Lanka, in September 2017.",
   "src": "A local-scale analysis to understand differences in socioeconomic factors affecting economic loss due to floods among different communities",
   "ipa": "ˌkwɛstʃəˈnɛr sərˈveɪ",
   "note": {
    "d": "Dữ liệu được thu thập bằng khảo sát bảng hỏi gửi tới các hộ gia đình chọn ngẫu nhiên ở Rathnapura, Sri Lanka, vào tháng 9 năm 2017.",
    "y": "Công cụ thu thập dữ liệu; câu nêu đủ cả nơi chốn và thời điểm khảo sát, đúng chuẩn mô tả phương pháp."
   }
  },
  {
   "id": "training",
   "term": "training",
   "pos": "n",
   "vi": "tập huấn",
   "en": "practical instruction in a specific skill",
   "deck": "drr",
   "freq": 10,
   "ex": "Rather, the performance of CNNs strongly depends on their design, i.e., layer depth, input window sizes and training strategies.",
   "src": "Evaluation of Different Machine Learning Methods and Deep-Learning Convolutional Neural Networks for Landslide Detection",
   "ipa": "ˈtreɪnɪŋ",
   "note": {
    "d": "Đúng hơn, hiệu năng của mạng CNN phụ thuộc rất nhiều vào thiết kế của nó: số lớp, kích thước cửa sổ đầu vào và chiến lược huấn luyện.",
    "y": "«training strategies» — cách huấn luyện mạng, một trong ba yếu tố thiết kế quyết định hiệu năng."
   }
  },
  {
   "id": "disaster-response",
   "term": "disaster response",
   "pos": "n",
   "vi": "ứng phó thiên tai",
   "en": "the actions taken immediately during and after a disaster",
   "deck": "drr",
   "freq": 8,
   "ex": "Disaster response and river infrastructure management during the 2015 Myanmar floods: A case in the Bago River Basin.",
   "src": "Disaster response and river infrastructure management during the 2015 Myanmar floods: A case in the Bago River Basin",
   "ipa": "dɪˈzæstər rɪˈspɑns",
   "note": {
    "d": "Ứng phó thiên tai và quản lý công trình trên sông trong trận lũ Myanmar năm 2015: trường hợp lưu vực sông Bago.",
    "y": "Giai đoạn ngay trong và sau thiên tai; đặt cạnh quản lý công trình cho thấy hai việc phải ăn khớp nhau."
   }
  },
  {
   "id": "poor-household",
   "term": "poor household",
   "pos": "n",
   "vi": "hộ nghèo",
   "en": "a family living below the poverty line",
   "deck": "drr",
   "freq": 8,
   "ex": "We use a randomized controlled trial to study the response of poor households in rural Kenya to unconditional cash transfers from the NGO GiveDirectly.",
   "src": "The Short-term Impact of Unconditional Cash Transfers to the Poor: Experimental Evidence from Kenya*",
   "ipa": "pur ˈhaʊsˌhoʊld",
   "note": {
    "d": "Chúng tôi dùng thử nghiệm đối chứng ngẫu nhiên để nghiên cứu phản ứng của các hộ nghèo ở nông thôn Kenya trước khoản tiền mặt vô điều kiện do tổ chức phi chính phủ GiveDirectly trao.",
    "y": "«the response of poor households in rural Kenya» — hộ nghèo là đối tượng nhận tiền mặt trong thử nghiệm."
   }
  },
  {
   "id": "respondent",
   "term": "respondent",
   "pos": "n",
   "vi": "người trả lời khảo sát",
   "en": "a person who answers a survey",
   "deck": "drr",
   "freq": 8,
   "ex": "Lower‐income respondents also tended to be less aware of the government hotline; however, those that were aware of it were more likely to find it useful.",
   "src": "The impact of income disparity on vulnerability and information collection: an analysis of the 2011 Thai Flood",
   "ipa": "rɪˈspɑndənt",
   "note": {
    "d": "Người trả lời có thu nhập thấp cũng thường ít biết tới đường dây nóng của chính quyền; tuy nhiên, ai đã biết thì lại thấy nó hữu ích hơn.",
    "y": "«Lower-income respondents» — người trả lời khảo sát, phân nhóm theo thu nhập."
   }
  },
  {
   "id": "crop-yield",
   "term": "crop yield",
   "pos": "n",
   "vi": "năng suất cây trồng",
   "en": "the amount of crop produced per unit of land",
   "deck": "drr",
   "freq": 7,
   "ex": "Crop yields are projected to decrease under future climate conditions, and recent research suggests that yields have already been impacted.",
   "src": "Climate change has likely already affected global food production",
   "ipa": "krɑp jild",
   "note": {
    "d": "Năng suất cây trồng được dự tính sẽ giảm trong điều kiện khí hậu tương lai, và nghiên cứu gần đây cho thấy năng suất thực ra đã bị ảnh hưởng rồi.",
    "y": "Năng suất trên một đơn vị diện tích; câu cảnh báo tác động không phải chuyện tương lai mà đã bắt đầu."
   }
  },
  {
   "id": "disaster-prevention",
   "term": "disaster prevention",
   "pos": "n",
   "vi": "phòng ngừa thiên tai",
   "en": "stopping a hazard from becoming a disaster",
   "deck": "drr",
   "freq": 7,
   "ex": "In this paper, the utilization of existing documents is examined in order to support disaster prevention management in administration.",
   "src": "STATISTICAL RESEARCHES OF THE FACTORS AFFECTING SLOPE FAILURE IN YOKOHAMA : Utilization of existing document in order to support disaster prevention management in administration",
   "ipa": "dɪˈzæstər priˈvɛnʃən",
   "note": {
    "d": "Trong bài này, việc tận dụng các tài liệu sẵn có được xem xét nhằm hỗ trợ công tác quản lý phòng ngừa thiên tai trong bộ máy hành chính.",
    "y": "«disaster prevention management in administration» — quản lý phòng ngừa thiên tai trong cơ quan hành chính."
   }
  },
  {
   "id": "displacement",
   "term": "displacement",
   "pos": "n",
   "vi": "sự di dời (dân cư)",
   "en": "being forced to leave one's home",
   "deck": "drr",
   "freq": 7,
   "ex": "Ultimately, this can lead to gentrification and a displacement of the very residents the green space strategies were designed to benefit.",
   "src": "Urban green space, public health, and environmental justice: The challenge of making cities ‘just green enough’",
   "ipa": "dɪˈspleɪsmənt",
   "note": {
    "d": "Rốt cuộc, điều này có thể dẫn tới hiện tượng cao cấp hoá đô thị và đẩy đi chính những cư dân mà các chiến lược không gian xanh vốn định phục vụ.",
    "y": "«a displacement of the very residents» — cư dân bị đẩy đi nơi khác; the very nhấn mạnh đúng những người đó."
   }
  },
  {
   "id": "early-warning",
   "term": "early warning",
   "pos": "n",
   "vi": "cảnh báo sớm",
   "en": "information issued in time for people to act",
   "deck": "drr",
   "freq": 7,
   "ex": "Proposals to address this included improving dykes and early warning systems as well as offering compensation for lost earnings.",
   "src": "The Impact of the Thai Flood of 2011 on the Rural Poor Population Living on the Flood Plain",
   "ipa": "ˈɜrli ˈwɔrnɪŋ",
   "note": {
    "d": "Các đề xuất để xử lý việc này gồm nâng cấp đê và hệ thống cảnh báo sớm, cũng như bồi thường phần thu nhập bị mất.",
    "y": "Trong «early warning systems» — cảnh báo phải đến sớm thì người dân mới kịp phản ứng."
   }
  },
  {
   "id": "informal-settlement",
   "term": "informal settlement",
   "pos": "n",
   "vi": "khu dân cư tự phát",
   "en": "housing built without legal planning permission",
   "deck": "drr",
   "freq": 7,
   "ex": "Yangon’s informal settlements have long been shaped by historical residues of various governing systems and wider political economy since colonial times.",
   "src": "The formation and transformation of informal settlements in Yangon, Myanmar: A historical analysis",
   "ipa": "ˌɪnˈfɔrməl ˈsɛtəlmənt",
   "note": {
    "d": "Các khu dân cư tự phát ở Yangon từ lâu đã được định hình bởi dấu vết lịch sử của nhiều thể chế cai trị và bởi bối cảnh kinh tế chính trị rộng hơn kể từ thời thuộc địa.",
    "y": "Khu dân cư hình thành ngoài quy hoạch, không có giấy tờ chính thức về đất ở."
   }
  },
  {
   "id": "land-cover",
   "term": "land cover",
   "pos": "n",
   "vi": "lớp phủ mặt đất",
   "en": "the physical material on the surface, such as forest or water",
   "deck": "drr",
   "freq": 7,
   "ex": "Seven spatial parameters – elevation, slope, aspect, flow accumulation, land use/land cover, geology and soil – were used in the analysis.",
   "src": "Landslide Susceptibility Analysis Using GIS and Logistic Regression Model A Case Study In Malang, Indonesia",
   "ipa": "lænd ˈkʌvər",
   "note": {
    "d": "Bảy tham số không gian — cao độ, độ dốc, hướng dốc, tích luỹ dòng chảy, sử dụng đất/lớp phủ, địa chất và thổ nhưỡng — đã được dùng trong phân tích.",
    "y": "Trong «land use/land cover» — land use là con người dùng đất làm gì, land cover là bề mặt thực tế phủ gì."
   }
  },
  {
   "id": "migration",
   "term": "migration",
   "pos": "n",
   "vi": "di cư",
   "en": "people moving from one place to live in another",
   "deck": "drr",
   "freq": 7,
   "ex": "We identify an autocyclic process in a sedimentary system driving large-scale channel migration in decadal to multidecadal cycles.",
   "src": "Large-Scale Channel Migration in the Sittang River Estuary",
   "ipa": "maɪˈɡreɪʃən",
   "note": {
    "d": "Chúng tôi xác định được một quá trình tự tuần hoàn trong hệ trầm tích, gây ra dịch chuyển lòng sông quy mô lớn theo chu kỳ hàng chục năm.",
    "y": "Ở đây không phải di cư của người mà là dịch chuyển của lòng sông (channel migration)."
   }
  },
  {
   "id": "rice-production",
   "term": "rice production",
   "pos": "n",
   "vi": "sản lượng lúa gạo",
   "en": "the growing and output of rice",
   "deck": "drr",
   "freq": 7,
   "ex": "Which, according to PCP result, the observed rice production was 12% higher than potential in 1954, while it was 29% lower in 1931.",
   "src": "Flood protection in a changing society: a perspective from historical agriculture transformation during 1931 and 1954 floods in Yangtze River Basin, China",
   "ipa": "raɪs prəˈdʌkʃən",
   "note": {
    "d": "Theo kết quả PCP, sản lượng lúa thực tế năm 1954 cao hơn mức tiềm năng 12%, trong khi năm 1931 lại thấp hơn 29%.",
    "y": "«the observed rice production» — sản lượng lúa thực tế, đem so với mức tiềm năng do mô hình tính."
   }
  },
  {
   "id": "sendai-framework",
   "term": "Sendai Framework",
   "pos": "n",
   "vi": "Khung Sendai (về giảm nhẹ rủi ro thiên tai)",
   "en": "the UN 2015-2030 agreement on disaster risk reduction",
   "deck": "drr",
   "freq": 6,
   "ex": "During the Forum, seven working groups held presentations and panel discussions that corresponded to the four priorities for action in the Sendai Framework (1.",
   "src": "Special Issue on Global Forum on Science and Technology for Disaster Resilience 2017",
   "ipa": "ˈsɛnˌdaɪ ˈfreɪmˌwɜrk",
   "note": {
    "d": "Trong khuôn khổ Diễn đàn, bảy nhóm làm việc đã trình bày và thảo luận bàn tròn theo bốn ưu tiên hành động của Khung Sendai.",
    "y": "Khung hành động toàn cầu về giảm nhẹ rủi ro thiên tai 2015-2030, có bốn ưu tiên hành động như câu nhắc tới."
   }
  },
  {
   "id": "interview-survey",
   "term": "interview survey",
   "pos": "n",
   "vi": "khảo sát phỏng vấn",
   "en": "gathering data by talking to respondents",
   "deck": "drr",
   "freq": 6,
   "ex": "Estimation of Income Levels in Individual Buildings Using Satellite Imagery and Household Interview Survey Data.",
   "src": "Estimation of Income Levels in Individual Buildings Using Satellite Imagery and Household Interview Survey Data",
   "ipa": "ˈɪntərˌvju sərˈveɪ",
   "note": {
    "d": "Ước tính mức thu nhập của từng ngôi nhà bằng ảnh vệ tinh và dữ liệu khảo sát phỏng vấn hộ gia đình.",
    "y": "Đặt cạnh satellite imagery: một nguồn dữ liệu từ thực địa, một từ trên cao, ghép lại để ước tính thu nhập."
   }
  },
  {
   "id": "preparedness",
   "term": "preparedness",
   "pos": "n",
   "vi": "sự sẵn sàng ứng phó",
   "en": "the state of being ready to respond to a disaster",
   "deck": "drr",
   "freq": 5,
   "ex": "These findings have implications for future risk governance and communication as well as for the willingness of individuals to invest in risk preparedness or risk mitigation actions.",
   "src": "The Risk Perception Paradox—Implications for Governance and Communication of Natural Hazards",
   "ipa": "priˈpɛrədnəs",
   "note": {
    "d": "Những phát hiện này có ý nghĩa với việc quản trị và truyền thông rủi ro trong tương lai, cũng như với mức sẵn lòng đầu tư của người dân vào công tác chuẩn bị ứng phó hay giảm nhẹ rủi ro.",
    "y": "«risk preparedness or risk mitigation actions» — chuẩn bị sẵn sàng trước khi thiên tai xảy ra, khác với ứng phó lúc đang xảy ra."
   }
  },
  {
   "id": "recovery",
   "term": "recovery",
   "pos": "n",
   "vi": "phục hồi sau thiên tai",
   "en": "the process of restoring life and infrastructure after a disaster",
   "deck": "drr",
   "freq": 5,
   "ex": "Although this group was not as well prepared and experienced less damage than the non-poor group, they had fewer resources for recovery.",
   "src": "The Impact of the Thai Flood of 2011 on the Rural Poor Population Living on the Flood Plain",
   "ipa": "rɪˈkʌvri",
   "note": {
    "d": "Dù nhóm này chuẩn bị kém hơn nhưng lại chịu thiệt hại ít hơn nhóm không nghèo, họ vẫn có ít nguồn lực hơn để phục hồi.",
    "y": "«they had fewer resources for recovery» — phục hồi sau thiên tai; điểm mấu chốt là người nghèo thiệt hại ít hơn nhưng gượng dậy khó hơn."
   }
  },
  {
   "id": "relief",
   "term": "relief",
   "pos": "n",
   "vi": "cứu trợ",
   "en": "emergency aid given to disaster victims",
   "deck": "drr",
   "freq": 5,
   "ex": "Slope, angle, relief, the natural drainage network (including distance to rivers and the watershed index) and lithology were used as independent parameters in this study.",
   "src": "Landslide susceptibility mapping of the Sera River Basin using logistic regression model",
   "ipa": "rɪˈlif",
   "note": {
    "d": "Độ dốc, góc dốc, chênh cao địa hình, mạng lưới thoát nước tự nhiên (gồm khoảng cách tới sông và chỉ số lưu vực) và thạch học được dùng làm các tham số độc lập trong nghiên cứu này.",
    "y": "Cảnh báo: trong câu này relief KHÔNG phải cứu trợ mà là chênh cao địa hình, đứng cùng slope và angle."
   }
  },
  {
   "id": "resilient",
   "term": "resilient",
   "pos": "adj",
   "vi": "có khả năng chống chịu",
   "en": "able to recover quickly from a shock",
   "deck": "drr",
   "freq": 5,
   "ex": "Our findings will be useful in determining flood control measures and plans that are resilient to floods under climate change.",
   "src": "Accelerated widening of economic disparity due to recurrent floods",
   "ipa": "rɪˈzɪljənt",
   "note": {
    "d": "Phát hiện của chúng tôi sẽ hữu ích khi xác định các biện pháp và kế hoạch kiểm soát lũ đủ sức chống chịu với lũ trong điều kiện biến đổi khí hậu.",
    "y": "«plans that are resilient to floods» — kế hoạch vẫn trụ được khi lũ xảy ra, chứ không chỉ ngăn lũ."
   }
  },
  {
   "id": "urban-governance",
   "term": "urban governance",
   "pos": "n",
   "vi": "quản trị đô thị",
   "en": "how a city is planned, run and held accountable",
   "deck": "drr",
   "freq": 5,
   "ex": "This study therefore primarily seeks to answer (1) historically, how have Myanmar’s agrarian crises interacted with urban governance since colonial times?",
   "src": "The formation and transformation of informal settlements in Yangon, Myanmar: A historical analysis",
   "ipa": "ˈɜrbən ˈɡʌvərnəns",
   "note": {
    "d": "Vì vậy, nghiên cứu này trước hết tìm lời đáp cho câu hỏi: xét theo lịch sử, các cuộc khủng hoảng nông nghiệp của Myanmar đã tương tác với quản trị đô thị ra sao kể từ thời thuộc địa?",
    "y": "«how have agrarian crises interacted with urban governance» — cách chính quyền đô thị vận hành, đặt trong quan hệ với khủng hoảng nông thôn."
   }
  },
  {
   "id": "disaster-resilience",
   "term": "disaster resilience",
   "pos": "n",
   "vi": "khả năng chống chịu thiên tai",
   "en": "the ability to absorb a shock and recover quickly",
   "deck": "drr",
   "freq": 4,
   "ex": "The Global Forum on Science and Technology for Disaster Resilience was held in Tokyo from 23 to 25 November 2017 with 228 participants from 42 countries.",
   "src": "Special Issue on Global Forum on Science and Technology for Disaster Resilience 2017",
   "ipa": "dɪˈzæstər rɪˈzɪliəns",
   "note": {
    "d": "Diễn đàn Toàn cầu về Khoa học và Công nghệ cho Khả năng chống chịu Thiên tai được tổ chức tại Tokyo từ ngày 23 đến 25 tháng 11 năm 2017, với 228 đại biểu từ 42 quốc gia.",
    "y": "Trong tên diễn đàn: khả năng chống chịu và bật lại sau thiên tai, không chỉ chống đỡ lúc nó xảy ra."
   }
  },
  {
   "id": "poverty-reduction",
   "term": "poverty reduction",
   "pos": "n",
   "vi": "giảm nghèo",
   "en": "policies that lift people out of poverty",
   "deck": "drr",
   "freq": 4,
   "ex": "This information enables planning and policy making for more effective poverty reduction and disaster prevention measures tailored to local conditions.",
   "src": "Estimating the level of income in individual buildings using data from household interview surveys and satellite imagery: Case study in Myanmar and Nicaragua",
   "ipa": "ˈpɑvərti rəˈdʌkʃən",
   "note": {
    "d": "Thông tin này giúp việc quy hoạch và hoạch định chính sách đưa ra các biện pháp giảm nghèo và phòng ngừa thiên tai hiệu quả hơn, phù hợp với điều kiện từng địa phương.",
    "y": "Đặt cạnh disaster prevention: bản đồ nghèo chi tiết giúp làm tốt cả hai việc cùng lúc."
   }
  },
  {
   "id": "public-health",
   "term": "public health",
   "pos": "n",
   "vi": "y tế công cộng",
   "en": "protecting the health of a whole population",
   "deck": "drr",
   "freq": 4,
   "ex": "Green space also promotes physical activity , psychological well-being, and the general public health of urban residents.",
   "src": "Urban green space, public health, and environmental justice: The challenge of making cities ‘just green enough’",
   "ipa": "ˈpʌblɪk hɛlθ",
   "note": {
    "d": "Không gian xanh còn khuyến khích vận động thể chất, cải thiện sức khoẻ tinh thần và sức khoẻ cộng đồng nói chung của cư dân đô thị.",
    "y": "«the general public health of urban residents» — sức khoẻ cộng đồng, một lợi ích của không gian xanh ngoài chuyện làm mát."
   }
  },
  {
   "id": "agricultural-production",
   "term": "agricultural production",
   "pos": "n",
   "vi": "sản xuất nông nghiệp",
   "en": "the output of crops and livestock",
   "deck": "drr",
   "freq": 3,
   "ex": "Constraints and potentials of future irrigation water availability on agricultural production under climate change.",
   "src": "Constraints and potentials of future irrigation water availability on agricultural production under climate change",
   "ipa": "ˌæɡrəˈkʌltʃərəl prəˈdʌkʃən",
   "note": {
    "d": "Ràng buộc và tiềm năng của lượng nước tưới trong tương lai đối với sản xuất nông nghiệp dưới tác động của biến đổi khí hậu.",
    "y": "Đối tượng chịu tác động; câu nêu cả ràng buộc lẫn tiềm năng, tức không chỉ toàn tin xấu."
   }
  },
  {
   "id": "community-resilience",
   "term": "community resilience",
   "pos": "n",
   "vi": "sức chống chịu cộng đồng",
   "en": "a community's capacity to withstand and recover",
   "deck": "drr",
   "freq": 3,
   "ex": "Community Resilience: Toward an Integrated Approach.",
   "src": "Community Resilience: Toward an Integrated Approach",
   "ipa": "kəˈmjunəti rɪˈzɪliəns",
   "note": {
    "d": "Sức chống chịu của cộng đồng: hướng tới một cách tiếp cận tích hợp.",
    "y": "Sức chống chịu ở cấp cộng đồng, khác với sức chống chịu của từng hộ hay của công trình."
   }
  },
  {
   "id": "decision-support",
   "term": "decision support",
   "pos": "n",
   "vi": "hỗ trợ ra quyết định",
   "en": "tools and data that help people choose well",
   "deck": "drr",
   "freq": 3,
   "ex": "A systematic decision support tool for robust hydropower site selection in poorly gauged basins.",
   "src": "A systematic decision support tool for robust hydropower site selection in poorly gauged basins",
   "ipa": "dɪˈsɪʒən səˈpɔrt",
   "note": {
    "d": "Một công cụ hỗ trợ ra quyết định có hệ thống để chọn vị trí thuỷ điện một cách vững chắc ở những lưu vực thiếu trạm đo.",
    "y": "«a systematic decision support tool» — công cụ hỗ trợ ra quyết định, không tự quyết thay con người."
   }
  },
  {
   "id": "disaster-management",
   "term": "disaster management",
   "pos": "n",
   "vi": "quản lý thiên tai",
   "en": "coordinating response and recovery around an event",
   "deck": "drr",
   "freq": 3,
   "ex": "We also highlight opportunities as a result of the ongoing process and future impact on the disaster management system in the basin.",
   "src": "Development of a Hydrological Telemetry System in Bago River",
   "ipa": "dɪˈzæstər ˈmænədʒmənt",
   "note": {
    "d": "Chúng tôi cũng nêu bật những cơ hội nảy sinh từ tiến trình đang diễn ra và tác động tương lai của nó lên hệ thống quản lý thiên tai trong lưu vực.",
    "y": "Bao trùm cả phòng ngừa, ứng phó và phục hồi; câu nói tới tác động lên cả hệ thống này trong lưu vực."
   }
  },
  {
   "id": "smallholder",
   "term": "smallholder",
   "pos": "n",
   "vi": "nông hộ nhỏ",
   "en": "a farmer working a very small plot of land",
   "deck": "drr",
   "freq": 3,
   "ex": "Flood disasters and rural inequality under climate change: a survey-based agent-based model of smallholder farmers in the Pampanga River basin, Philippines.",
   "src": "Flood disasters and rural inequality under climate change: a survey-based agent-based model of smallholder farmers in the Pampanga River basin, Philippines",
   "ipa": "ˈsmɔlˌhoʊldər",
   "note": {
    "d": "Thiên tai lũ lụt và bất bình đẳng nông thôn dưới biến đổi khí hậu: mô hình dựa trên tác nhân xây từ số liệu khảo sát nông hộ nhỏ ở lưu vực sông Pampanga, Philippines.",
    "y": "«smallholder farmers» — nông dân canh tác trên mảnh đất nhỏ, nhóm dễ tổn thương nhất trước lũ."
   }
  },
  {
   "id": "awareness",
   "term": "awareness",
   "pos": "n",
   "vi": "nhận thức",
   "en": "knowing that a risk or issue exists",
   "deck": "drr",
   "freq": 2,
   "ex": "The result was presented visually as maps so that they would contribute for further discussion of warning dissemination strategy and for heightening of citizens’ disaster awareness.",
   "src": "An Empirical Study on Visualization of Efficiency of Disaster Warnings to Citizens",
   "ipa": "əˈwɛrnəs",
   "note": {
    "d": "Kết quả được trình bày trực quan dưới dạng bản đồ, để góp phần vào việc bàn thảo tiếp về chiến lược truyền tin cảnh báo và nâng cao nhận thức của người dân về thiên tai.",
    "y": "«heightening of citizens' disaster awareness» — nâng cao nhận thức người dân, mục đích thứ hai của việc làm bản đồ."
   }
  },
  {
   "id": "disaster-risk-management",
   "term": "disaster risk management",
   "pos": "n",
   "vi": "quản lý rủi ro thiên tai",
   "en": "organising actions to reduce and handle disaster risk",
   "deck": "drr",
   "freq": 2,
   "ex": "The flood hazard map can be utilized to enhance the effectiveness of disaster risk management activities.",
   "src": "Flood Hazard Assessment of Bago River Basin, Myanmar",
   "ipa": "dɪˈzæstər rɪsk ˈmænədʒmənt",
   "note": {
    "d": "Bản đồ hiểm hoạ lũ có thể được dùng để nâng cao hiệu quả của các hoạt động quản lý rủi ro thiên tai.",
    "y": "Rộng hơn disaster response: gồm cả đánh giá, phòng ngừa, ứng phó và phục hồi."
   }
  },
  {
   "id": "emergency-response",
   "term": "emergency response",
   "pos": "n",
   "vi": "ứng phó khẩn cấp",
   "en": "immediate action taken while a disaster unfolds",
   "deck": "drr",
   "freq": 2,
   "ex": "So far, however, the budgets for disaster risk reduction are mainly used for post-disaster emergency response, recovery, and reconstruction in many countries.",
   "src": "Investing in Disaster Risk Reduction for Resilience: Roles of Science, Technology, and Education",
   "ipa": "ɪˈmɜrdʒənsi rɪˈspɑns",
   "note": {
    "d": "Tuy nhiên, cho tới nay ngân sách dành cho giảm nhẹ rủi ro thiên tai ở nhiều nước vẫn chủ yếu dùng cho ứng phó khẩn cấp, phục hồi và tái thiết sau thiên tai.",
    "y": "«post-disaster emergency response» — ứng phó khẩn cấp sau thiên tai, giai đoạn ngốn phần lớn ngân sách."
   }
  },
  {
   "id": "gross-domestic-product",
   "term": "gross domestic product",
   "pos": "n",
   "vi": "tổng sản phẩm quốc nội (GDP)",
   "en": "the total value of goods and services a country produces",
   "deck": "drr",
   "freq": 2,
   "ex": "Without adaptation, 0.2-4.6% of global population is expected to be flooded annually in 2100 under 25-123 cm of global mean sea-level rise, with expected annual losses of 0.3-9.3% of global gross domestic product.",
   "src": "Coastal flood damage and adaptation costs under 21st century sea-level rise",
   "ipa": "ɡroʊs dəˈmɛstɪk ˈprɑdəkt",
   "note": {
    "d": "Nếu không thích ứng, dự kiến mỗi năm sẽ có 0,2-4,6% dân số thế giới bị ngập vào năm 2100 ứng với mực nước biển dâng 25-123 cm, kèm tổn thất kỳ vọng hằng năm bằng 0,3-9,3% GDP toàn cầu.",
    "y": "«0.3-9.3% of global gross domestic product» — quy tổn thất ra phần trăm GDP để so sánh giữa các nước."
   }
  },
  {
   "id": "local-knowledge",
   "term": "local knowledge",
   "pos": "n",
   "vi": "tri thức bản địa",
   "en": "understanding held by the community from experience",
   "deck": "drr",
   "freq": 2,
   "ex": "Harnessing local knowledge in the Australian high country Can community education contribute to effective emergency management?",
   "src": "Australian Journal of Emergency Management",
   "ipa": "ˈloʊkəl ˈnɑlədʒ",
   "note": {
    "d": "Tận dụng tri thức bản địa ở vùng cao nước Úc: liệu giáo dục cộng đồng có góp phần làm nên công tác quản lý tình huống khẩn cấp hiệu quả?",
    "y": "«Harnessing local knowledge» — tận dụng hiểu biết của người dân địa phương, thứ không có trong sách vở."
   }
  },
  {
   "id": "relief-effort",
   "term": "relief effort",
   "pos": "n",
   "vi": "hoạt động cứu trợ",
   "en": "aid delivered right after a disaster",
   "deck": "drr",
   "freq": 2,
   "ex": "It goes on to assess changes in the available dataset type and in geospatial disaster responders, as well as the impact of geospatial technological changes on disaster relief effort.",
   "src": "The growing role of web‐based geospatial technology in disaster response and support",
   "ipa": "rɪˈlif ˈɛfərt",
   "note": {
    "d": "Bài tiếp tục đánh giá những thay đổi về loại dữ liệu sẵn có và về lực lượng ứng phó dựa trên dữ liệu địa không gian, cũng như tác động của thay đổi công nghệ địa không gian lên hoạt động cứu trợ thiên tai.",
    "y": "«disaster relief effort» — hoạt động cứu trợ sau thiên tai; ở đây relief đúng nghĩa cứu trợ."
   }
  },
  {
   "id": "rural-area",
   "term": "rural area",
   "pos": "n",
   "vi": "khu vực nông thôn",
   "en": "countryside where farming dominates",
   "deck": "drr",
   "freq": 2,
   "ex": "Here, we show a novel method for estimating income levels of individual building in urban and peri-urban rural areas.",
   "src": "Estimating the level of income in individual buildings using data from household interview surveys and satellite imagery: Case study in Myanmar and Nicaragua",
   "ipa": "ˈrʊrəl ˈɛriə",
   "note": {
    "d": "Ở đây chúng tôi trình bày một phương pháp mới để ước tính mức thu nhập của từng ngôi nhà ở khu đô thị và vùng nông thôn ven đô.",
    "y": "«peri-urban rural areas» = vùng nông thôn ven đô, nơi giao giữa thành thị và nông thôn."
   }
  },
  {
   "id": "sustainable-development-goal",
   "term": "sustainable development goal",
   "pos": "n",
   "vi": "mục tiêu phát triển bền vững (SDG)",
   "en": "one of the UN targets for 2030",
   "deck": "drr",
   "freq": 2,
   "ex": "This led to the adoption of key agreements such as the Sustainable Development Goals.",
   "src": "Data Integration and Analysis System (DIAS) Contributing to Climate Change Analysis and Disaster Risk Reduction",
   "ipa": "səˈsteɪnəbəl dɪˈvɛləpmənt ɡoʊl",
   "note": {
    "d": "Điều này dẫn tới việc thông qua những thoả thuận quan trọng như bộ Mục tiêu Phát triển Bền vững.",
    "y": "17 mục tiêu của Liên Hợp Quốc tới năm 2030; câu nhắc tới như một thoả thuận then chốt."
   }
  },
  {
   "id": "urban-area",
   "term": "urban area",
   "pos": "n",
   "vi": "khu vực đô thị",
   "en": "a town or city with dense population",
   "deck": "drr",
   "freq": 2,
   "ex": "Considering the 50- and 100-year return period flood scenario, the highest depth of inundation may affect the urban area of Bago.",
   "src": "River flood inundation mapping in the Bago River Basin, Myanmar",
   "ipa": "ˈɜrbən ˈɛriə",
   "note": {
    "d": "Xét kịch bản lũ có chu kỳ lặp 50 năm và 100 năm, độ ngập sâu nhất có thể ảnh hưởng tới khu vực đô thị của Bago.",
    "y": "Đối tượng chịu ảnh hưởng: khu đô thị Bago nằm trong vùng ngập sâu nhất."
   }
  },
  {
   "id": "build-back-better",
   "term": "build back better",
   "pos": "phr",
   "vi": "tái thiết tốt hơn trước",
   "en": "rebuilding after a disaster so the result is safer than before",
   "deck": "drr",
   "freq": 1,
   "ex": "Investing in DDR; and 4. “Build Back Better”), as well as on Interdisciplinary collaboration, National platforms, and Synthesis report.",
   "src": "Special Issue on Global Forum on Science and Technology for Disaster Resilience 2017",
   "ipa": "bɪld bæk ˈbɛtər",
   "note": {
    "d": "Đầu tư cho giảm nhẹ rủi ro thiên tai; và 4. «Tái thiết tốt hơn trước»), cũng như về hợp tác liên ngành, các nền tảng quốc gia và báo cáo tổng hợp.",
    "y": "Ưu tiên thứ tư của Khung Sendai: tái thiết sau thiên tai phải làm tốt hơn trước, không phục hồi lại nguyên trạng dễ tổn thương."
   }
  },
  {
   "id": "capacity-building",
   "term": "capacity building",
   "pos": "n",
   "vi": "nâng cao năng lực",
   "en": "strengthening the skills and systems of people and institutions",
   "deck": "drr",
   "freq": 1,
   "ex": "The co-establishment of the system through intensive consultations, proactive roles in responsibility sharing, and capacity building efforts, is essential in developing a base platform for flood forecasting and an early warning system in the basin.",
   "src": "Development of a Hydrological Telemetry System in Bago River",
   "ipa": "kəˈpæsəti ˈbɪldɪŋ",
   "note": {
    "d": "Việc cùng nhau xây dựng hệ thống thông qua tham vấn sâu rộng, chủ động chia sẻ trách nhiệm và nỗ lực nâng cao năng lực là điều thiết yếu để dựng nền tảng cho dự báo lũ và hệ thống cảnh báo sớm trong lưu vực.",
    "y": "«capacity building efforts» — nâng cao năng lực cho địa phương, điều kiện để hệ thống cảnh báo vận hành lâu dài."
   }
  },
  {
   "id": "casualty",
   "term": "casualty",
   "pos": "n",
   "vi": "thương vong",
   "en": "a person killed or injured in a disaster",
   "deck": "drr",
   "freq": 1,
   "ex": "In 1931, the Yangtze River has manifested its force again with one of the deadliest floods ever recorded in Chinese history, causing 422,499 casualties, damages to more than 25.2 million people and 58.7 billion m2 farmland.",
   "src": "The interaction between society changes and hydrological extremes: the case of Yangtze River Basin, before and after the 1931 flood",
   "ipa": "ˈkæʒəwəlti",
   "note": {
    "d": "Năm 1931, sông Dương Tử lại một lần nữa cho thấy sức mạnh của nó với một trong những trận lũ chết chóc nhất lịch sử Trung Quốc, gây 422.499 thương vong, ảnh hưởng tới hơn 25,2 triệu người và 58,7 tỉ m² đất canh tác.",
    "y": "«causing 422,499 casualties» — thương vong gồm cả người chết và bị thương, nên số thường lớn hơn số tử vong."
   }
  },
  {
   "id": "compensation",
   "term": "compensation",
   "pos": "n",
   "vi": "bồi thường",
   "en": "money paid to make up for a loss",
   "deck": "drr",
   "freq": 1,
   "ex": "Proposals to address this included improving dykes and early warning systems as well as offering compensation for lost earnings.",
   "src": "The Impact of the Thai Flood of 2011 on the Rural Poor Population Living on the Flood Plain",
   "ipa": "ˌkɑmpənˈseɪʃən",
   "note": {
    "d": "Các đề xuất để xử lý việc này gồm nâng cấp đê và hệ thống cảnh báo sớm, cũng như bồi thường phần thu nhập bị mất.",
    "y": "«compensation for lost earnings» = bồi thường phần thu nhập đã mất, một biện pháp phi công trình."
   }
  },
  {
   "id": "coping-capacity",
   "term": "coping capacity",
   "pos": "n",
   "vi": "năng lực ứng phó",
   "en": "the resources people can use to face a hazard",
   "deck": "drr",
   "freq": 1,
   "ex": "While climate change is a global phenomenon, its negative impacts are more severely felt in poor countries because of their high dependence on natural resources and limited coping capacity to climate variability and extremes.",
   "src": "Socioeconomic Vulnerability to Disaster Risk: A Case Study of Flood and Drought Impact in a Rural Sri Lankan Community",
   "ipa": "ˈkoʊpɪŋ kəˈpæsəti",
   "note": {
    "d": "Dù biến đổi khí hậu là hiện tượng toàn cầu, tác động tiêu cực của nó lại được cảm nhận nặng nề hơn ở các nước nghèo, do họ phụ thuộc nhiều vào tài nguyên thiên nhiên và có năng lực ứng phó hạn chế trước dao động và cực đoan khí hậu.",
    "y": "«limited coping capacity» — năng lực ứng phó hạn chế; đây là lý do cùng một cú sốc lại gây hậu quả khác nhau giữa các nước."
   }
  },
  {
   "id": "developed-country",
   "term": "developed country",
   "pos": "n",
   "vi": "nước phát triển",
   "en": "a rich, industrialised country",
   "deck": "drr",
   "freq": 1,
   "ex": "Approximately 67% of the studies were conducted in developed countries, with the remaining 33% performed in developing countries.",
   "src": "A Systematic Review of Flood Damage Assessment: Insight for the Data-Scarce Regions",
   "ipa": "dɪˈvɛləpt ˈkʌntri",
   "note": {
    "d": "Khoảng 67% số nghiên cứu được tiến hành ở các nước phát triển, 33% còn lại thực hiện ở các nước đang phát triển.",
    "y": "Nơi tập trung 67% số nghiên cứu — chi tiết cho thấy sự lệch địa lý của tài liệu khoa học."
   }
  },
  {
   "id": "disaster-preparedness",
   "term": "disaster preparedness",
   "pos": "n",
   "vi": "sẵn sàng ứng phó thiên tai",
   "en": "planning and drills done before a disaster strikes",
   "deck": "drr",
   "freq": 1,
   "ex": "The proposed scheme is evaluated by the stakeholders, and it is shown that the benefits would include not only the strengthening of the current scheme for decision making but also a contribution to the design of long-term plans in areas such as agriculture, irrigation, and disaster preparedness.",
   "src": "Data Communication for Efficient Water Resource Management Among Multiple Stakeholders – A Case Study in the Bago River Basin, Myanmar –",
   "ipa": "dɪˈzæstər priˈpɛrədnəs",
   "note": {
    "d": "Phương án đề xuất được chính các bên liên quan đánh giá, và kết quả cho thấy lợi ích không chỉ là củng cố cơ chế ra quyết định hiện nay mà còn góp phần thiết kế kế hoạch dài hạn trong các lĩnh vực như nông nghiệp, thuỷ lợi và sẵn sàng ứng phó thiên tai.",
    "y": "Đứng cùng agriculture và irrigation trong danh sách lĩnh vực hưởng lợi từ kế hoạch dài hạn."
   }
  },
  {
   "id": "evacuation",
   "term": "evacuation",
   "pos": "n",
   "vi": "sơ tán",
   "en": "moving people away from a dangerous area",
   "deck": "drr",
   "freq": 1,
   "ex": "This guidance is used to facilitate evacuation route planning, post-disaster response and resource deployment, and critical infrastructure protection and securing, and it must be available within a time window in which decision makers can take appropriate action.",
   "src": "Development of an Impact-Oriented Quantitative Coastal Inundation forecasting and early warning system with social and economic assessment",
   "ipa": "ɪˌvækjəˈweɪʃən",
   "note": {
    "d": "Thông tin chỉ dẫn này được dùng để hỗ trợ lập tuyến sơ tán, ứng phó và điều động nguồn lực sau thiên tai, cùng việc bảo vệ hạ tầng thiết yếu; và nó phải có kịp trong khoảng thời gian mà người ra quyết định còn hành động được.",
    "y": "«evacuation route planning» — lập kế hoạch tuyến sơ tán, việc phải làm trước khi thiên tai xảy ra."
   }
  },
  {
   "id": "low-income",
   "term": "low-income",
   "pos": "adj",
   "vi": "thu nhập thấp",
   "en": "earning little money",
   "deck": "drr",
   "freq": 1,
   "ex": "Flooding is among the most prevalent natural hazards, with particularly disastrous impacts in low-income countries.",
   "src": "Flood exposure and poverty in 188 countries",
   "ipa": "ˌloʊˈɪnkəm",
   "note": {
    "d": "Ngập lụt là một trong những hiểm hoạ tự nhiên phổ biến nhất, với hậu quả đặc biệt thảm khốc ở các nước thu nhập thấp.",
    "y": "«low-income countries» — nước thu nhập thấp; cùng một trận lũ nhưng hậu quả nặng hơn hẳn ở đây."
   }
  },
  {
   "id": "policymaker",
   "term": "policymaker",
   "pos": "n",
   "vi": "nhà hoạch định chính sách",
   "en": "a person who sets rules and plans for a government or organisation",
   "deck": "drr",
   "freq": 1,
   "ex": "Prepared following strict IPCC procedures, SREX is an invaluable assessment for anyone interested in climate extremes, environmental disasters and adaptation to climate change, including policymakers, the private sector and academic researchers.",
   "src": "Managing the Risks of Extreme Events and Disasters to Advance Climate Change Adaptation",
   "ipa": "ˈpɑləsiˌmeɪkər",
   "note": {
    "d": "Được biên soạn theo đúng quy trình nghiêm ngặt của IPCC, SREX là một báo cáo đánh giá vô giá với bất kỳ ai quan tâm tới cực đoan khí hậu, thảm hoạ môi trường và thích ứng khí hậu — gồm nhà hoạch định chính sách, khu vực tư nhân và giới nghiên cứu.",
    "y": "Nằm trong danh sách người đọc mà báo cáo nhắm tới, cùng khu vực tư nhân và giới nghiên cứu."
   }
  },
  {
   "id": "resettlement",
   "term": "resettlement",
   "pos": "n",
   "vi": "tái định cư",
   "en": "moving a community to a new location",
   "deck": "drr",
   "freq": 1,
   "ex": "We discuss the resettlement of communities as an option for countering the effects of floods and alleviating poverty.",
   "src": "A local level relationship between floods and poverty: A case in Myanmar",
   "ipa": "riˈsɛtəlmənt",
   "note": {
    "d": "Chúng tôi bàn tới việc tái định cư cộng đồng như một phương án để đối phó với tác động của lũ và giảm nghèo.",
    "y": "«the resettlement of communities» — chuyển cả cộng đồng đi nơi khác, phương án cuối cùng khi không thể sống chung với lũ."
   }
  },
  {
   "id": "risk-assessment",
   "term": "risk assessment",
   "pos": "n",
   "vi": "đánh giá rủi ro",
   "en": "the process of estimating how likely and how damaging an event is",
   "deck": "drr",
   "freq": 0,
   "ex": "",
   "src": "",
   "ipa": "rɪsk əˈsɛsmənt"
  },
  {
   "id": "flood",
   "term": "flood",
   "pos": "n",
   "vi": "lũ, lụt",
   "en": "an overflow of water onto land that is normally dry",
   "deck": "flood",
   "freq": 380,
   "ex": "Even for minor floods, inundation depth is the most significant factor affecting relative loss, irrespective of the economic group.",
   "src": "A local-scale analysis to understand differences in socioeconomic factors affecting economic loss due to floods among different communities",
   "ipa": "flʌd",
   "note": {
    "d": "Ngay cả với những trận lũ nhỏ, độ sâu ngập vẫn là yếu tố ảnh hưởng lớn nhất đến mức thiệt hại tương đối, bất kể nhóm kinh tế nào.",
    "y": "«minor floods» = những trận lũ nhỏ; câu nói ngay cả lũ nhỏ cũng đã gây thiệt hại theo quy luật đó."
   }
  },
  {
   "id": "landslide",
   "term": "landslide",
   "pos": "n",
   "vi": "sạt lở đất",
   "en": "a mass of rock and soil sliding down a slope",
   "deck": "flood",
   "freq": 112,
   "ex": "The results showed that the natural drainage network plays a significant role in determining landslide occurrence and distribution.",
   "src": "Landslide susceptibility mapping of the Sera River Basin using logistic regression model",
   "ipa": "ˈlændˌslaɪd",
   "note": {
    "d": "Kết quả cho thấy mạng lưới thoát nước tự nhiên đóng vai trò quan trọng trong việc quyết định nơi xảy ra và cách phân bố của sạt lở đất.",
    "y": "«landslide occurrence and distribution» = nơi sạt lở xảy ra và cách phân bố của chúng."
   }
  },
  {
   "id": "flood-damage",
   "term": "flood damage",
   "pos": "n",
   "vi": "thiệt hại do lũ",
   "en": "the harm to property and people caused by a flood",
   "deck": "flood",
   "freq": 59,
   "ex": "Development of flood damage assessment method for residential areas considering various house types for Bago Region of Myanmar.",
   "src": "Development of flood damage assessment method for residential areas considering various house types for Bago Region of Myanmar",
   "ipa": "flʌd ˈdæmədʒ",
   "note": {
    "d": "Xây dựng phương pháp đánh giá thiệt hại do lũ cho khu dân cư, có xét tới nhiều kiểu nhà khác nhau, tại vùng Bago của Myanmar.",
    "y": "Trong tên bài: phương pháp đánh giá thiệt hại do lũ, xây riêng cho khu dân cư."
   }
  },
  {
   "id": "flooding",
   "term": "flooding",
   "pos": "n",
   "vi": "sự ngập lụt",
   "en": "the event or process of water covering land",
   "deck": "flood",
   "freq": 44,
   "ex": "These observations may be explained by the water company’s street campaigns to boil water, which was not possible during flooding.",
   "src": "International Journal Of Environmental Research And Public Health",
   "ipa": "ˈflʌdɪŋ",
   "note": {
    "d": "Những quan sát này có thể giải thích bằng chiến dịch vận động đun sôi nước của công ty cấp nước, điều không làm được trong lúc ngập lụt.",
    "y": "«not possible during flooding» — flooding là quá trình đang ngập, khác flood là bản thân trận lũ."
   }
  },
  {
   "id": "inundation",
   "term": "inundation",
   "pos": "n",
   "vi": "sự ngập nước",
   "en": "the covering of land by water",
   "deck": "flood",
   "freq": 42,
   "ex": "Even for minor floods, inundation depth is the most significant factor affecting relative loss, irrespective of the economic group.",
   "src": "A local-scale analysis to understand differences in socioeconomic factors affecting economic loss due to floods among different communities",
   "ipa": "ˌɪnənˈdeɪʃən",
   "note": {
    "d": "Ngay cả với những trận lũ nhỏ, độ sâu ngập vẫn là yếu tố ảnh hưởng lớn nhất đến mức thiệt hại tương đối, bất kể nhóm kinh tế nào.",
    "y": "«inundation depth» — inundation là danh từ chỉ trạng thái nước ngập, đứng làm định ngữ cho depth."
   }
  },
  {
   "id": "mitigation",
   "term": "mitigation",
   "pos": "n",
   "vi": "sự giảm nhẹ",
   "en": "action taken to reduce the severity of an impact",
   "deck": "flood",
   "freq": 27,
   "ex": "Base colors are temperature change under “Business as usual” (left, RCP 8.5) and “stringent emissions mitigation” (right, RCP 2.6).",
   "src": "Social and economic impacts of climate",
   "ipa": "ˌmɪtɪˈɡeɪʃən",
   "note": {
    "d": "Màu nền thể hiện mức thay đổi nhiệt độ theo kịch bản «phát triển như thường lệ» (trái, RCP 8.5) và «giảm phát thải nghiêm ngặt» (phải, RCP 2.6).",
    "y": "Phân biệt với adaptation: mitigation là cắt nguyên nhân (phát thải), adaptation là sống chung với hậu quả."
   }
  },
  {
   "id": "severe",
   "term": "severe",
   "pos": "adj",
   "vi": "nghiêm trọng",
   "en": "very bad, intense or serious",
   "deck": "flood",
   "freq": 27,
   "ex": "Most districts in the study basin will experience severe water scarcity in 2010 and 2020 in both physical and economic terms.",
   "src": "Utilization of a GIS-Based Water Infrastructure Inventory for Water Resources Assessment at Local Level: A Case Study in Mountainous Area of Vietnam",
   "ipa": "səˈvɪr",
   "note": {
    "d": "Phần lớn các huyện trong lưu vực nghiên cứu sẽ chịu khan hiếm nước nghiêm trọng vào năm 2010 và 2020, xét cả về mặt vật lý lẫn kinh tế.",
    "y": "«severe water scarcity» = khan hiếm nước nghiêm trọng; severe hay đi với các từ chỉ thiên tai và thiếu hụt."
   }
  },
  {
   "id": "flood-risk",
   "term": "flood risk",
   "pos": "n",
   "vi": "rủi ro lũ",
   "en": "hazard combined with exposure and vulnerability",
   "deck": "flood",
   "freq": 25,
   "ex": "This new information will enhance our understanding of flood risk in low‐lying areas and contribute further to disaster risk reduction.",
   "src": "Assessment of the tidal effect on flood inundation in a low‐lying river basin under composite future scenarios",
   "ipa": "flʌd rɪsk",
   "note": {
    "d": "Thông tin mới này sẽ giúp ta hiểu rõ hơn rủi ro lũ ở vùng trũng thấp và đóng góp thêm cho công tác giảm nhẹ rủi ro thiên tai.",
    "y": "Rủi ro lũ = hiểm hoạ × phơi nhiễm × dễ tổn thương; câu nói hiểu rõ nó sẽ giúp giảm nhẹ rủi ro thiên tai."
   }
  },
  {
   "id": "erosion",
   "term": "erosion",
   "pos": "n",
   "vi": "xói mòn",
   "en": "the wearing away of soil or riverbank by water",
   "deck": "flood",
   "freq": 21,
   "ex": "Different phase of soil conservation measures demonstrated the development of policies and techniques on soil erosion control.",
   "src": "SOIL EROSION, CONSERVATION, AND ECO‐ENVIRONMENT CHANGES IN THE LOESS PLATEAU OF CHINA",
   "ipa": "ɪˈroʊʒən",
   "note": {
    "d": "Các giai đoạn khác nhau của biện pháp bảo vệ đất cho thấy chính sách và kỹ thuật kiểm soát xói mòn đất đã tiến triển ra sao.",
    "y": "«soil erosion control» — chuỗi ba danh từ: việc kiểm soát xói mòn đất."
   }
  },
  {
   "id": "tropical-cyclone",
   "term": "tropical cyclone",
   "pos": "n",
   "vi": "xoáy thuận nhiệt đới",
   "en": "a rotating storm system formed over warm ocean",
   "deck": "flood",
   "freq": 17,
   "ex": "Recent research has strengthened the understanding of the links between climate and tropical cyclones (TCs) on various timescales.",
   "src": "Tropical cyclones and climate change",
   "ipa": "ˈtrɑpɪkəl sɪˈkloʊn",
   "note": {
    "d": "Các nghiên cứu gần đây đã củng cố hiểu biết về mối liên hệ giữa khí hậu và xoáy thuận nhiệt đới trên nhiều thang thời gian khác nhau.",
    "y": "Tên khoa học chung cho bão nhiệt đới; ở Tây Bắc Thái Bình Dương gọi là typhoon, ở Đại Tây Dương gọi là hurricane."
   }
  },
  {
   "id": "flood-hazard",
   "term": "flood hazard",
   "pos": "n",
   "vi": "hiểm họa lũ",
   "en": "the physical flood event that could cause harm",
   "deck": "flood",
   "freq": 16,
   "ex": "However, the impact of dam operation on flood hazards and associated damage was not considered well in previous assessments of flood risk.",
   "src": "Quantitative assessment of flood risk with evaluation of the effectiveness of dam operation for flood control: A case of the Bago River Basin of Myanmar",
   "ipa": "flʌd ˈhæzərd",
   "note": {
    "d": "Tuy nhiên, ảnh hưởng của việc vận hành đập tới hiểm hoạ lũ và thiệt hại kèm theo lại chưa được xét kỹ trong các đánh giá rủi ro lũ trước đây.",
    "y": "«impact of dam operation on flood hazards» — vận hành đập làm thay đổi chính bản thân hiểm hoạ lũ."
   }
  },
  {
   "id": "damage-function",
   "term": "damage function",
   "pos": "n",
   "vi": "hàm thiệt hại",
   "en": "a curve linking flood depth or duration to the loss it causes",
   "deck": "flood",
   "freq": 15,
   "ex": "The actual and potential flood damage data were combined to develop flood damage functions with improved accuracy for extreme floods.",
   "src": "Development of flood damage assessment method for residential areas considering various house types for Bago Region of Myanmar",
   "ipa": "ˈdæmədʒ ˈfʌŋkʃən",
   "note": {
    "d": "Số liệu thiệt hại lũ thực tế và thiệt hại tiềm năng được ghép lại để dựng hàm thiệt hại chính xác hơn cho các trận lũ cực đoan.",
    "y": "Hàm nối độ sâu ngập với mức thiệt hại; muốn dựng nó cần cả số liệu thiệt hại thật lẫn thiệt hại tiềm năng."
   }
  },
  {
   "id": "flood-inundation",
   "term": "flood inundation",
   "pos": "n",
   "vi": "ngập do lũ",
   "en": "the extent of land covered by water during a flood",
   "deck": "flood",
   "freq": 15,
   "ex": "Although the design of our study was not new, it is one of very few to have analyzed a flood inundation area in Myanmar.",
   "src": "River flood inundation mapping in the Bago River Basin, Myanmar",
   "ipa": "flʌd ˌɪnənˈdeɪʃən",
   "note": {
    "d": "Dù thiết kế nghiên cứu của chúng tôi không mới, đây vẫn là một trong số rất ít nghiên cứu từng phân tích vùng ngập lũ ở Myanmar.",
    "y": "«a flood inundation area» — vùng bị nước lũ phủ lên, thứ mà nghiên cứu này đo đạc và phân tích."
   }
  },
  {
   "id": "landslide-susceptibility",
   "term": "landslide susceptibility",
   "pos": "n",
   "vi": "mức nhạy cảm sạt lở",
   "en": "how likely a slope is to fail, mapped from terrain factors",
   "deck": "flood",
   "freq": 15,
   "ex": "Landslide susceptibility mapping is one of the most important counter measures in landslide risk reduction, as this paper will show.",
   "src": "Landslide Susceptibility Analysis Using GIS and Logistic Regression Model A Case Study In Malang, Indonesia",
   "ipa": "ˈlændˌslaɪd səˌsɛptəˈbɪləti",
   "note": {
    "d": "Lập bản đồ nguy cơ sạt lở là một trong những biện pháp đối phó quan trọng nhất để giảm nhẹ rủi ro sạt lở, như bài báo này sẽ chỉ ra.",
    "y": "Mức nhạy cảm: khả năng một sườn dốc bị sạt, chưa tính tới thiệt hại nếu sạt."
   }
  },
  {
   "id": "storm",
   "term": "storm",
   "pos": "n",
   "vi": "bão, giông",
   "en": "violent weather with strong wind and heavy rain",
   "deck": "flood",
   "freq": 14,
   "ex": "Other improvements include more accurate representations of storm intensity, smaller errors, and large‐scale reductions in model bias.",
   "src": "Towards a more reliable historical reanalysis: Improvements for version 3 of the Twentieth Century Reanalysis system",
   "ipa": "stɔrm",
   "note": {
    "d": "Các cải tiến khác gồm mô tả cường độ bão chính xác hơn, sai số nhỏ hơn, và giảm mạnh sai lệch hệ thống của mô hình trên diện rộng.",
    "y": "«storm intensity» = cường độ bão; đây là điểm mô hình mới mô tả chính xác hơn."
   }
  },
  {
   "id": "economic-loss",
   "term": "economic loss",
   "pos": "n",
   "vi": "thiệt hại kinh tế",
   "en": "the money value of the damage caused",
   "deck": "flood",
   "freq": 13,
   "ex": "A local-scale analysis to understand differences in socioeconomic factors affecting economic loss due to floods among different communities.",
   "src": "A local-scale analysis to understand differences in socioeconomic factors affecting economic loss due to floods among different communities",
   "ipa": "ˌɛkəˈnɑmɪk lɔs",
   "note": {
    "d": "Một phân tích ở quy mô địa phương nhằm hiểu vì sao các yếu tố kinh tế - xã hội tác động đến thiệt hại kinh tế do lũ lại khác nhau giữa các cộng đồng.",
    "y": "«economic loss due to floods» — thiệt hại quy ra tiền; câu hỏi của bài là vì sao mức thiệt hại khác nhau giữa các cộng đồng."
   }
  },
  {
   "id": "flood-control",
   "term": "flood control",
   "pos": "n",
   "vi": "kiểm soát lũ",
   "en": "measures taken to reduce flooding",
   "deck": "flood",
   "freq": 13,
   "ex": "Our findings will be useful in determining flood control measures and plans that are resilient to floods under climate change.",
   "src": "Accelerated widening of economic disparity due to recurrent floods",
   "ipa": "flʌd kənˈtroʊl",
   "note": {
    "d": "Phát hiện của chúng tôi sẽ hữu ích khi xác định các biện pháp và kế hoạch kiểm soát lũ đủ sức chống chịu với lũ trong điều kiện biến đổi khí hậu.",
    "y": "«flood control measures and plans» — kiểm soát lũ gồm cả công trình lẫn kế hoạch quản lý."
   }
  },
  {
   "id": "flood-prone",
   "term": "flood-prone",
   "pos": "adj",
   "vi": "dễ bị ngập",
   "en": "likely to flood repeatedly",
   "deck": "flood",
   "freq": 11,
   "ex": "Poor and non-poor groups from two flood-prone villages in central Thailand were compared following the flood of 2011.",
   "src": "The Impact of the Thai Flood of 2011 on the Rural Poor Population Living on the Flood Plain",
   "ipa": "ˈflʌdˈproʊn",
   "note": {
    "d": "Nhóm nghèo và nhóm không nghèo ở hai ngôi làng dễ ngập tại miền trung Thái Lan được đem so sánh sau trận lũ năm 2011.",
    "y": "«two flood-prone villages» — hậu tố -prone nghĩa là dễ gặp phải; landslide-prone, drought-prone dùng tương tự."
   }
  },
  {
   "id": "slope-failure",
   "term": "slope failure",
   "pos": "n",
   "vi": "phá hoại mái dốc",
   "en": "the collapse of a slope under gravity or water pressure",
   "deck": "flood",
   "freq": 10,
   "ex": "Household per capita income and education level of the household head had a significant influence on vulnerability to cut slope failures.",
   "src": "Assessment of physical vulnerability of buildings and socio-economic vulnerability of residents to rainfall induced cut slope failures: A case study in central highlands, Sri Lanka",
   "ipa": "sloʊp ˈfeɪljər",
   "note": {
    "d": "Thu nhập bình quân đầu người của hộ và trình độ học vấn của chủ hộ có ảnh hưởng đáng kể tới mức dễ tổn thương trước sự cố sạt mái dốc đào.",
    "y": "«cut slope» là mái dốc do người đào khi làm đường; failure là lúc mái dốc mất ổn định và sạt."
   }
  },
  {
   "id": "damage-assessment",
   "term": "damage assessment",
   "pos": "n",
   "vi": "đánh giá thiệt hại",
   "en": "surveying and valuing what a disaster destroyed",
   "deck": "flood",
   "freq": 9,
   "ex": "Development of flood damage assessment method for residential areas considering various house types for Bago Region of Myanmar.",
   "src": "Development of flood damage assessment method for residential areas considering various house types for Bago Region of Myanmar",
   "ipa": "ˈdæmədʒ əˈsɛsmənt",
   "note": {
    "d": "Xây dựng phương pháp đánh giá thiệt hại do lũ cho khu dân cư, có xét tới nhiều kiểu nhà khác nhau, tại vùng Bago của Myanmar.",
    "y": "«flood damage assessment method» — chuỗi định ngữ dài đặc trưng tiếng Anh kỹ thuật, đọc ngược từ phải sang."
   }
  },
  {
   "id": "extreme-event",
   "term": "extreme event",
   "pos": "n",
   "vi": "sự kiện cực đoan",
   "en": "a rare event of unusual magnitude",
   "deck": "flood",
   "freq": 9,
   "ex": "Downscaling was performed on future GCMs’ temperature and precipitation data, and plausible extreme events were generated.",
   "src": "The Impact of Climate Change on Reservoir Inflows Using Multi Climate-Model under RCPs’ Including Extreme Events—A Case of Mangla Dam, Pakistan",
   "ipa": "ɛkˈstrim ɪˈvɛnt",
   "note": {
    "d": "Việc hạ quy mô được thực hiện trên số liệu nhiệt độ và giáng thủy tương lai của các mô hình khí hậu toàn cầu, từ đó sinh ra các sự kiện cực đoan hợp lý.",
    "y": "Sản phẩm sau khi hạ quy mô; đây mới là thứ dùng để thiết kế công trình chống lũ."
   }
  },
  {
   "id": "flood-event",
   "term": "flood event",
   "pos": "n",
   "vi": "trận lũ",
   "en": "a single occurrence of flooding at a place and time",
   "deck": "flood",
   "freq": 9,
   "ex": "In this study, five flood events were selected to calibrate and validate the models, using discharge data measured at Bago station.",
   "src": "Developing Flood Inundation Map Using RRI and SOBEK Models: A Case Study of the Bago River Basin, Myanmar",
   "ipa": "flʌd ɪˈvɛnt",
   "note": {
    "d": "Trong nghiên cứu này, năm trận lũ được chọn để hiệu chỉnh và kiểm định mô hình, dùng số liệu lưu lượng đo tại trạm Bago.",
    "y": "«five flood events were selected» — mỗi trận lũ là một sự kiện riêng, dùng làm ca kiểm tra cho mô hình."
   }
  },
  {
   "id": "natural-disaster",
   "term": "natural disaster",
   "pos": "n",
   "vi": "thiên tai",
   "en": "a natural hazard that causes serious damage",
   "deck": "flood",
   "freq": 9,
   "ex": "THE INFLUENCE OF CIS BASED HAZARD MAP ON PEOPLE'S ATTITUDE TO NATURAL DISASTERS : The questionnaire and analysis in Yokohama.",
   "src": "THE INFLUENCE OF CIS BASED HAZARD MAP ON PEOPLE'S ATTITUDE TO NATURAL DISASTERS : The questionnaire and analysis in Yokohama",
   "ipa": "ˈnætʃərəl dɪˈzæstər",
   "note": {
    "d": "Ảnh hưởng của bản đồ hiểm hoạ lập bằng GIS tới thái độ của người dân với thiên tai: khảo sát bằng bảng hỏi và phân tích tại Yokohama.",
    "y": "«people's attitude to natural disasters» — thiên tai ở đây là đối tượng của thái độ, tức cách người dân nhìn nhận rủi ro."
   }
  },
  {
   "id": "coastal-flooding",
   "term": "coastal flooding",
   "pos": "n",
   "vi": "ngập lụt ven biển",
   "en": "flooding of the shore by sea water",
   "deck": "flood",
   "freq": 8,
   "ex": "Future Coastal Population Growth and Exposure to Sea-Level Rise and Coastal Flooding - A Global Assessment.",
   "src": "Future Coastal Population Growth and Exposure to Sea-Level Rise and Coastal Flooding - A Global Assessment",
   "ipa": "ˈkoʊstəl ˈflʌdɪŋ",
   "note": {
    "d": "Tăng trưởng dân số ven biển trong tương lai và mức phơi nhiễm trước nước biển dâng cùng ngập lụt ven biển — một đánh giá toàn cầu.",
    "y": "Đặt cạnh sea-level rise: nước biển dâng là nền, ngập ven biển là hiện tượng xảy ra trên nền đó."
   }
  },
  {
   "id": "countermeasure",
   "term": "countermeasure",
   "pos": "n",
   "vi": "biện pháp đối phó",
   "en": "an action taken to oppose a threat",
   "deck": "flood",
   "freq": 8,
   "ex": "However, with only traditional countermeasures failed to explain the relative success of agricultural product in 1954.",
   "src": "Flood protection in a changing society: a perspective from historical agriculture transformation during 1931 and 1954 floods in Yangtze River Basin, China",
   "ipa": "ˈkaʊntərˌmɛʒər",
   "note": {
    "d": "Tuy nhiên, chỉ với các biện pháp đối phó truyền thống thì không giải thích được vì sao sản xuất nông nghiệp năm 1954 lại tương đối thành công.",
    "y": "«traditional countermeasures» — biện pháp đối phó cổ truyền của địa phương, thứ không đủ để giải thích kết quả."
   }
  },
  {
   "id": "flood-vulnerability",
   "term": "flood vulnerability",
   "pos": "n",
   "vi": "tính dễ tổn thương trước lũ",
   "en": "how easily people or assets are harmed by flooding",
   "deck": "flood",
   "freq": 8,
   "ex": "We found that educational support is suitable for reducing the flood vulnerability of the poor cost-effectively, especially when the budgets are small.",
   "src": "Quantitative Evaluation of Flood Control Measures and Educational Support to Reduce Disaster Vulnerability of the Poor Based on Household-level Savings Estimates",
   "ipa": "flʌd ˌvʌlnərəˈbɪlɪti",
   "note": {
    "d": "Chúng tôi thấy rằng hỗ trợ giáo dục là cách hợp lý để giảm mức dễ tổn thương trước lũ của người nghèo với chi phí thấp, nhất là khi ngân sách eo hẹp.",
    "y": "Cái mà hỗ trợ giáo dục làm giảm; câu nêu thêm điều kiện: hiệu quả nhất khi ngân sách nhỏ."
   }
  },
  {
   "id": "hazard-map",
   "term": "hazard map",
   "pos": "n",
   "vi": "bản đồ hiểm hoạ",
   "en": "a map of areas exposed to a given hazard",
   "deck": "flood",
   "freq": 8,
   "ex": "THE INFLUENCE OF CIS BASED HAZARD MAP ON PEOPLE'S ATTITUDE TO NATURAL DISASTERS : The questionnaire and analysis in Yokohama.",
   "src": "THE INFLUENCE OF CIS BASED HAZARD MAP ON PEOPLE'S ATTITUDE TO NATURAL DISASTERS : The questionnaire and analysis in Yokohama",
   "ipa": "ˈhæzərd mæp",
   "note": {
    "d": "Ảnh hưởng của bản đồ hiểm hoạ lập bằng GIS tới thái độ của người dân với thiên tai: khảo sát bằng bảng hỏi và phân tích tại Yokohama.",
    "y": "«GIS based hazard map» — bản đồ hiểm hoạ lập bằng GIS; bài đo xem bản đồ có làm người dân đổi thái độ không."
   }
  },
  {
   "id": "natural-hazard",
   "term": "natural hazard",
   "pos": "n",
   "vi": "hiểm hoạ tự nhiên",
   "en": "a natural process that can harm people",
   "deck": "flood",
   "freq": 8,
   "ex": "This article reviews the main insights from selected literature on risk perception, particularly in connection with natural hazards.",
   "src": "The Risk Perception Paradox—Implications for Governance and Communication of Natural Hazards",
   "ipa": "ˈnætʃərəl ˈhæzərd",
   "note": {
    "d": "Bài báo này điểm lại những hiểu biết chính rút ra từ các tài liệu chọn lọc về nhận thức rủi ro, đặc biệt là trong mối liên hệ với hiểm hoạ tự nhiên.",
    "y": "Đặt sau «in connection with» để giới hạn phạm vi: nhận thức rủi ro trong bối cảnh thiên tai."
   }
  },
  {
   "id": "river-flood",
   "term": "river flood",
   "pos": "n",
   "vi": "lũ sông",
   "en": "flooding caused by a river overtopping its banks",
   "deck": "flood",
   "freq": 8,
   "ex": "Therefore, to prepare of the next flood disaster, it is essential to understand the characteristics of the 2011 Chao Phraya River Flood.",
   "src": "Characteristics of the 2011 Chao Phraya River flood in Central Thailand",
   "ipa": "ˈrɪvər flʌd",
   "note": {
    "d": "Vì vậy, để chuẩn bị cho trận lũ tiếp theo, việc hiểu rõ đặc điểm của trận lũ sông Chao Phraya năm 2011 là hết sức cần thiết.",
    "y": "«the 2011 Chao Phraya River Flood» — lũ trên sông, phân biệt với ngập do mưa tại chỗ hay nước dâng từ biển."
   }
  },
  {
   "id": "surge",
   "term": "surge",
   "pos": "n",
   "vi": "nước dâng",
   "en": "a sudden rise of water level",
   "deck": "flood",
   "freq": 8,
   "ex": "Climate strongly influences global wildfire activity, and recent wildfire surges may signal fire weather-induced pyrogeographic shifts.",
   "src": "Climate-induced variations in global wildfire danger from 1979 to 2013",
   "ipa": "sɜrdʒ",
   "note": {
    "d": "Khí hậu chi phối mạnh hoạt động cháy rừng toàn cầu, và những đợt cháy tăng vọt gần đây có thể là dấu hiệu của sự dịch chuyển vùng cháy do thời tiết dễ cháy gây ra.",
    "y": "Ở đây là «wildfire surges» — đợt tăng vọt của cháy rừng; surge chỉ sự vọt lên đột ngột nói chung."
   }
  },
  {
   "id": "severe-flood",
   "term": "severe flood",
   "pos": "n",
   "vi": "lũ nghiêm trọng",
   "en": "a flood large enough to cause major damage",
   "deck": "flood",
   "freq": 7,
   "ex": "Results suggest that poor households, located in vulnerable, low-lying areas near rivers, suffer the most from being exposed to frequent, severe floods.",
   "src": "Modeling the association between socioeconomic features and risk of flood damage: A local‐scale case study in Sri Lanka",
   "ipa": "səˈvɪr flʌd",
   "note": {
    "d": "Kết quả cho thấy các hộ nghèo, sống ở vùng trũng thấp dễ tổn thương gần sông, chịu thiệt hại nặng nhất do phơi mình trước những trận lũ nghiêm trọng và thường xuyên.",
    "y": "«frequent, severe floods» — hai tính từ đi cặp: vừa hay xảy ra vừa nghiêm trọng, nên hộ nghèo khó gượng dậy."
   }
  },
  {
   "id": "storm-surge",
   "term": "storm surge",
   "pos": "n",
   "vi": "nước dâng do bão",
   "en": "a rise in sea level pushed onshore by a storm",
   "deck": "flood",
   "freq": 7,
   "ex": "According to a World Bank Report in 2005, at least 2.6 million people may have drowned due to coastal inundation, particularly caused by storm surges, over the last 200 years.",
   "src": "Development of an Impact-Oriented Quantitative Coastal Inundation forecasting and early warning system with social and economic assessment",
   "ipa": "stɔrm sɜrdʒ",
   "note": {
    "d": "Theo báo cáo của Ngân hàng Thế giới năm 2005, ít nhất 2,6 triệu người có thể đã chết đuối vì ngập ven biển, chủ yếu do nước dâng do bão, trong vòng 200 năm qua.",
    "y": "Nước biển dâng cao do gió bão và áp suất thấp; câu chỉ ra đây là nguyên nhân chính gây chết đuối ven biển."
   }
  },
  {
   "id": "damage-estimation",
   "term": "damage estimation",
   "pos": "n",
   "vi": "ước tính thiệt hại",
   "en": "calculating expected losses before or after an event",
   "deck": "flood",
   "freq": 6,
   "ex": "Development of a flood damage estimation method that considers house type is important to evaluate the effectiveness of different adaptation options.",
   "src": "Development of flood damage assessment method for residential areas considering various house types for Bago Region of Myanmar",
   "ipa": "ˈdæmədʒ ˌɛstəˈmeɪʃən",
   "note": {
    "d": "Việc xây dựng phương pháp ước tính thiệt hại lũ có xét tới kiểu nhà là quan trọng, để đánh giá được hiệu quả của các phương án thích ứng khác nhau.",
    "y": "«a flood damage estimation method» — phương pháp ước tính thiệt hại; xét kiểu nhà mới so sánh được các phương án thích ứng."
   }
  },
  {
   "id": "flood-loss",
   "term": "flood loss",
   "pos": "n",
   "vi": "tổn thất do lũ",
   "en": "the value of what is destroyed or lost in a flood",
   "deck": "flood",
   "freq": 6,
   "ex": "Although early planting can mitigate flood losses under present climate conditions, its effectiveness declines under intensified future flooding.",
   "src": "Flood disasters and rural inequality under climate change: a survey-based agent-based model of smallholder farmers in the Pampanga River basin, Philippines",
   "ipa": "flʌd lɔs",
   "note": {
    "d": "Dù gieo sớm có thể giảm nhẹ tổn thất do lũ trong điều kiện khí hậu hiện tại, hiệu quả của cách này sẽ giảm đi khi lũ tương lai dữ dội hơn.",
    "y": "«mitigate flood losses» — giảm tổn thất do lũ, ở đây bằng biện pháp nông nghiệp là gieo sớm."
   }
  },
  {
   "id": "inundation-area",
   "term": "inundation area",
   "pos": "n",
   "vi": "diện tích ngập",
   "en": "the area covered by floodwater",
   "deck": "flood",
   "freq": 6,
   "ex": "Although the design of our study was not new, it is one of very few to have analyzed a flood inundation area in Myanmar.",
   "src": "River flood inundation mapping in the Bago River Basin, Myanmar",
   "ipa": "ˌɪnənˈdeɪʃən ˈɛriə",
   "note": {
    "d": "Dù thiết kế nghiên cứu của chúng tôi không mới, đây vẫn là một trong số rất ít nghiên cứu từng phân tích vùng ngập lũ ở Myanmar.",
    "y": "Diện tích ngập; đây là điểm khiến nghiên cứu có giá trị dù phương pháp không mới."
   }
  },
  {
   "id": "inundation-map",
   "term": "inundation map",
   "pos": "n",
   "vi": "bản đồ ngập lụt",
   "en": "a map showing which areas are under water",
   "deck": "flood",
   "freq": 6,
   "ex": "Using the Bago River basin, Myanmar, as a case study, we analyzed past extreme flooding events and developed flooding-inundation maps.",
   "src": "Consideration of the rainfall-runoff-inundation (RRI) model for flood mapping in a deltaic area of Myanmar",
   "ipa": "ˌɪnənˈdeɪʃən mæp",
   "note": {
    "d": "Lấy lưu vực sông Bago ở Myanmar làm nghiên cứu điển hình, chúng tôi phân tích các trận lũ cực đoan trong quá khứ và xây dựng bản đồ ngập lụt.",
    "y": "«flooding-inundation maps» — sản phẩm cuối của nghiên cứu, cho biết nước ngập tới đâu và sâu bao nhiêu."
   }
  },
  {
   "id": "recurrent-flood",
   "term": "recurrent flood",
   "pos": "n",
   "vi": "lũ lặp lại nhiều lần",
   "en": "flooding that happens repeatedly in the same place",
   "deck": "flood",
   "freq": 6,
   "ex": "From our results we first derived an original framework to measure how recurrent floods influence widening disparities within communities.",
   "src": "Accelerated widening of economic disparity due to recurrent floods",
   "ipa": "rɪˈkɜrənt flʌd",
   "note": {
    "d": "Từ kết quả thu được, trước hết chúng tôi rút ra một khung phân tích mới để đo xem lũ lặp đi lặp lại làm giãn rộng bất bình đẳng trong cộng đồng như thế nào.",
    "y": "«recurrent floods» — không phải một trận lũ lớn mà là lũ lặp lại, thứ bào mòn dần khả năng chống chịu."
   }
  },
  {
   "id": "residential-building",
   "term": "residential building",
   "pos": "n",
   "vi": "nhà ở",
   "en": "a building where people live",
   "deck": "flood",
   "freq": 6,
   "ex": "The reduction in expected annual damage by use of different flood adaptation options for residential buildings was also evaluated quantitatively.",
   "src": "Development of flood damage assessment method for residential areas considering various house types for Bago Region of Myanmar",
   "ipa": "ˌrɛzɪˈdɛnʃəl ˈbɪldɪŋ",
   "note": {
    "d": "Mức giảm thiệt hại kỳ vọng hằng năm khi áp dụng các phương án thích ứng với lũ cho nhà ở cũng được đánh giá một cách định lượng.",
    "y": "«adaptation options for residential buildings» — nhà ở, phân biệt với công trình thương mại hay công nghiệp."
   }
  },
  {
   "id": "return-period",
   "term": "return period",
   "pos": "n",
   "vi": "chu kỳ lặp lại",
   "en": "the average number of years between events of a given size",
   "deck": "flood",
   "freq": 6,
   "ex": "Considering the 50- and 100-year return period flood scenario, the highest depth of inundation may affect the urban area of Bago.",
   "src": "River flood inundation mapping in the Bago River Basin, Myanmar",
   "ipa": "rɪˈtɜrn ˈpɪriəd",
   "note": {
    "d": "Xét kịch bản lũ có chu kỳ lặp 50 năm và 100 năm, độ ngập sâu nhất có thể ảnh hưởng tới khu vực đô thị của Bago.",
    "y": "Chu kỳ lặp 100 năm nghĩa là mỗi năm có 1% khả năng xảy ra, không phải 100 năm mới có một lần."
   }
  },
  {
   "id": "early-warning-system",
   "term": "early warning system",
   "pos": "n",
   "vi": "hệ thống cảnh báo sớm",
   "en": "a system that alerts people before a disaster arrives",
   "deck": "flood",
   "freq": 5,
   "ex": "Proposals to address this included improving dykes and early warning systems as well as offering compensation for lost earnings.",
   "src": "The Impact of the Thai Flood of 2011 on the Rural Poor Population Living on the Flood Plain",
   "ipa": "ˈɜrli ˈwɔrnɪŋ ˈsɪstəm",
   "note": {
    "d": "Các đề xuất để xử lý việc này gồm nâng cấp đê và hệ thống cảnh báo sớm, cũng như bồi thường phần thu nhập bị mất.",
    "y": "Đặt cạnh dykes: đê là giải pháp công trình, hệ thống cảnh báo sớm là giải pháp phi công trình."
   }
  },
  {
   "id": "fatality",
   "term": "fatality",
   "pos": "n",
   "vi": "trường hợp tử vong",
   "en": "a death caused by a disaster",
   "deck": "flood",
   "freq": 5,
   "ex": "In total, 2620 fatal landslides were recorded worldwide during the 7 yr period of the study, causing a total of 32,322 recorded fatalities.",
   "src": "Global patterns of loss of life from landslides",
   "ipa": "fəˈtælɪti",
   "note": {
    "d": "Tổng cộng có 2.620 vụ sạt lở gây chết người được ghi nhận trên toàn thế giới trong 7 năm nghiên cứu, làm 32.322 người thiệt mạng.",
    "y": "«recorded fatalities» = số người chết được ghi nhận; fatal landslides ở đầu câu là các vụ sạt lở gây chết người."
   }
  },
  {
   "id": "flood-duration",
   "term": "flood duration",
   "pos": "n",
   "vi": "thời gian ngập",
   "en": "how long floodwater stays on the land",
   "deck": "flood",
   "freq": 5,
   "ex": "We found that water depth, flood duration, and building material were the most significant factors determining flood damage in the residential sector.",
   "src": "Multivariate Flood Loss Estimation of the 2018 Bago Flood in Myanmar",
   "ipa": "flʌd ˈdʊˈreɪʃən",
   "note": {
    "d": "Chúng tôi thấy độ sâu ngập, thời gian ngập và vật liệu xây nhà là ba yếu tố quyết định nhất tới thiệt hại lũ trong khu vực nhà ở.",
    "y": "Đứng cùng water depth: ngập sâu và ngập lâu là hai yếu tố khác nhau, cùng quyết định mức thiệt hại."
   }
  },
  {
   "id": "floodplain",
   "term": "floodplain",
   "pos": "n",
   "vi": "vùng bãi ngập lũ",
   "en": "the flat land beside a river that floods regularly",
   "deck": "flood",
   "freq": 5,
   "ex": "Development of Flood Damage Estimation Model for Agriculture – Case Study in the Bago Floodplain, Myanmar.",
   "src": "Development of Flood Damage Estimation Model for Agriculture – Case Study in the Bago Floodplain, Myanmar",
   "ipa": "ˈflʌdˌpleɪn",
   "note": {
    "d": "Xây dựng mô hình ước tính thiệt hại lũ cho nông nghiệp — nghiên cứu điển hình tại vùng bãi ngập Bago, Myanmar.",
    "y": "«the Bago Floodplain» — vùng đất bằng hai bên sông, bị ngập khi lũ tràn bờ; cũng là nơi canh tác chính."
   }
  },
  {
   "id": "loss-estimation",
   "term": "loss estimation",
   "pos": "n",
   "vi": "ước tính tổn thất",
   "en": "predicting the economic loss from a hazard",
   "deck": "flood",
   "freq": 5,
   "ex": "Knowing the relationship between flooding and its damaging factors, these models can be easily applied to a flood loss estimation model in further research.",
   "src": "Establishment of flood damage function models: A case study in the Bago River Basin, Myanmar",
   "ipa": "lɔs ˌɛstəˈmeɪʃən",
   "note": {
    "d": "Khi đã biết quan hệ giữa ngập lụt và các yếu tố gây thiệt hại, những mô hình này có thể dễ dàng đưa vào một mô hình ước tính tổn thất do lũ trong nghiên cứu tiếp theo.",
    "y": "«a flood loss estimation model» — mô hình quy thiệt hại ra con số, bước tiếp theo sau khi hiểu quan hệ nhân quả."
   }
  },
  {
   "id": "mitigate",
   "term": "mitigate",
   "pos": "v",
   "vi": "giảm nhẹ",
   "en": "to make something harmful less severe",
   "deck": "flood",
   "freq": 5,
   "ex": "Although early planting can mitigate flood losses under present climate conditions, its effectiveness declines under intensified future flooding.",
   "src": "Flood disasters and rural inequality under climate change: a survey-based agent-based model of smallholder farmers in the Pampanga River basin, Philippines",
   "ipa": "ˈmɪtəˌɡeɪt",
   "note": {
    "d": "Dù gieo sớm có thể giảm nhẹ tổn thất do lũ trong điều kiện khí hậu hiện tại, hiệu quả của cách này sẽ giảm đi khi lũ tương lai dữ dội hơn.",
    "y": "Đi với losses: làm nhẹ bớt hậu quả; khác prevent là ngăn không cho xảy ra."
   }
  },
  {
   "id": "physical-vulnerability",
   "term": "physical vulnerability",
   "pos": "n",
   "vi": "tính dễ tổn thương vật lý",
   "en": "how easily buildings and structures are damaged",
   "deck": "flood",
   "freq": 5,
   "ex": "Regression analysis was used to analyze the correlation between the physical vulnerability of buildings and socio-economic parameters, which was a novel approach.",
   "src": "Assessment of physical vulnerability of buildings and socio-economic vulnerability of residents to rainfall induced cut slope failures: A case study in central highlands, Sri Lanka",
   "ipa": "ˈfɪzɪkəl ˌvʌlnərəˈbɪlɪti",
   "note": {
    "d": "Phân tích hồi quy được dùng để tìm tương quan giữa mức dễ tổn thương vật lý của công trình và các tham số kinh tế - xã hội, và đây là một cách tiếp cận mới.",
    "y": "Mức dễ tổn thương của bản thân công trình (vật liệu, kết cấu), tách khỏi yếu tố con người."
   }
  },
  {
   "id": "reconstruction",
   "term": "reconstruction",
   "pos": "n",
   "vi": "tái thiết",
   "en": "rebuilding after a disaster",
   "deck": "flood",
   "freq": 5,
   "ex": "So far, however, the budgets for disaster risk reduction are mainly used for post-disaster emergency response, recovery, and reconstruction in many countries.",
   "src": "Investing in Disaster Risk Reduction for Resilience: Roles of Science, Technology, and Education",
   "ipa": "ˌrikənˈstrʌkʃən",
   "note": {
    "d": "Tuy nhiên, cho tới nay ngân sách dành cho giảm nhẹ rủi ro thiên tai ở nhiều nước vẫn chủ yếu dùng cho ứng phó khẩn cấp, phục hồi và tái thiết sau thiên tai.",
    "y": "Đứng cuối chuỗi ứng phó - phục hồi - tái thiết; câu ngầm phê rằng tiền nên chi cho phòng ngừa trước."
   }
  },
  {
   "id": "warning-system",
   "term": "warning system",
   "pos": "n",
   "vi": "hệ thống cảnh báo",
   "en": "equipment and procedures that alert people before a hazard",
   "deck": "flood",
   "freq": 5,
   "ex": "Proposals to address this included improving dykes and early warning systems as well as offering compensation for lost earnings.",
   "src": "The Impact of the Thai Flood of 2011 on the Rural Poor Population Living on the Flood Plain",
   "ipa": "ˈwɔrnɪŋ ˈsɪstəm",
   "note": {
    "d": "Các đề xuất để xử lý việc này gồm nâng cấp đê và hệ thống cảnh báo sớm, cũng như bồi thường phần thu nhập bị mất.",
    "y": "Dạng rút gọn của early warning system; ở đây gắn với việc cải thiện, tức hệ thống đã có sẵn."
   }
  },
  {
   "id": "agricultural-damage",
   "term": "agricultural damage",
   "pos": "n",
   "vi": "thiệt hại nông nghiệp",
   "en": "harm to farmland, crops and livestock",
   "deck": "flood",
   "freq": 4,
   "ex": "House damage, in-house damage, and income loss function models were established for residential areas, along with an agricultural damage function model.",
   "src": "Establishment of flood damage function models: A case study in the Bago River Basin, Myanmar",
   "ipa": "ˌæɡrəˈkʌltʃərəl ˈdæmədʒ",
   "note": {
    "d": "Các mô hình hàm thiệt hại nhà cửa, thiệt hại tài sản trong nhà và mất thu nhập đã được thiết lập cho khu dân cư, cùng với một mô hình hàm thiệt hại nông nghiệp.",
    "y": "«an agricultural damage function model» — hàm thiệt hại riêng cho cây trồng, tách khỏi ba hàm cho khu dân cư."
   }
  },
  {
   "id": "damage-cost",
   "term": "damage cost",
   "pos": "n",
   "vi": "chi phí thiệt hại",
   "en": "the money value of the harm done",
   "deck": "flood",
   "freq": 4,
   "ex": "The results were validated by collecting damage cost data from the Department of Agricultural Lands Management and Statistics (DALMS).",
   "src": "Development of Flood Damage Estimation Model for Agriculture – Case Study in the Bago Floodplain, Myanmar",
   "ipa": "ˈdæmədʒ kɑst",
   "note": {
    "d": "Kết quả được kiểm chứng bằng cách thu thập số liệu chi phí thiệt hại từ Cục Quản lý và Thống kê Đất Nông nghiệp (DALMS).",
    "y": "«damage cost data» — số liệu thiệt hại quy ra tiền do cơ quan nhà nước thống kê, dùng để kiểm chứng mô hình."
   }
  },
  {
   "id": "flood-control-measure",
   "term": "flood control measure",
   "pos": "n",
   "vi": "biện pháp kiểm soát lũ",
   "en": "an action taken to limit flooding",
   "deck": "flood",
   "freq": 4,
   "ex": "Our findings will be useful in determining flood control measures and plans that are resilient to floods under climate change.",
   "src": "Accelerated widening of economic disparity due to recurrent floods",
   "ipa": "flʌd kənˈtroʊl ˈmɛʒər",
   "note": {
    "d": "Phát hiện của chúng tôi sẽ hữu ích khi xác định các biện pháp và kế hoạch kiểm soát lũ đủ sức chống chịu với lũ trong điều kiện biến đổi khí hậu.",
    "y": "Biện pháp cụ thể như đê, hồ điều tiết; câu nhấn rằng chúng phải tính tới biến đổi khí hậu."
   }
  },
  {
   "id": "flood-frequency",
   "term": "flood frequency",
   "pos": "n",
   "vi": "tần suất lũ",
   "en": "how often floods of a given size occur",
   "deck": "flood",
   "freq": 4,
   "ex": "Impact of Bias-Correction Methods in Assessing the Potential Flood Frequency Change in the Bago River.",
   "src": "Impact of Bias-Correction Methods in Assessing the Potential Flood Frequency Change in the Bago River",
   "ipa": "flʌd ˈfrikwənsi",
   "note": {
    "d": "Ảnh hưởng của các phương pháp hiệu chỉnh sai lệch tới việc đánh giá thay đổi tần suất lũ trong tương lai ở sông Bago.",
    "y": "«Potential Flood Frequency Change» — tần suất lũ có thể thay đổi thế nào; đây là thứ chi phối thiết kế công trình."
   }
  },
  {
   "id": "debris-flow",
   "term": "debris flow",
   "pos": "n",
   "vi": "dòng bùn đá",
   "en": "a fast mixture of mud, rock and water rushing downslope",
   "deck": "flood",
   "freq": 3,
   "ex": "Landslide deposits on slopes can remobilize during heavy rainfall and evolve into debris flows.",
   "src": "Earthquake‐Induced Chains of Geologic Hazards: Patterns, Mechanisms, and Impacts",
   "ipa": "dəˈbri floʊ",
   "note": {
    "d": "Khối đất đá sạt còn nằm trên sườn dốc có thể bị cuốn đi lần nữa khi mưa lớn và biến thành dòng bùn đá.",
    "y": "Hỗn hợp bùn, đá và nước chảy xuống rất nhanh; nguy hiểm hơn sạt lở thường vì đi xa khỏi chân dốc."
   }
  },
  {
   "id": "flood-simulation",
   "term": "flood simulation",
   "pos": "n",
   "vi": "mô phỏng lũ",
   "en": "computing how a flood would spread",
   "deck": "flood",
   "freq": 3,
   "ex": "However, for long-term flood simulation, the model may not be the ideal choice as it does not include any land-atmosphere interactions.",
   "src": "Consideration of the rainfall-runoff-inundation (RRI) model for flood mapping in a deltaic area of Myanmar",
   "ipa": "flʌd ˌsɪmjəˈleɪʃən",
   "note": {
    "d": "Tuy nhiên, với mô phỏng lũ dài hạn, mô hình này có thể không phải lựa chọn lý tưởng vì nó không xét tương tác giữa mặt đất và khí quyển.",
    "y": "Việc mô hình được dùng để làm; câu nêu giới hạn sử dụng của mô hình, một kiểu viết trung thực."
   }
  },
  {
   "id": "housing-structure",
   "term": "housing structure",
   "pos": "n",
   "vi": "kết cấu nhà ở",
   "en": "the type and material of a house, affecting its strength",
   "deck": "flood",
   "freq": 3,
   "ex": "In landslide-prone areas, the vulnerability of housing structures is assessed so that adaptation methods can be introduced to reduce risk.",
   "src": "Assessment of physical vulnerability of buildings and socio-economic vulnerability of residents to rainfall induced cut slope failures: A case study in central highlands, Sri Lanka",
   "ipa": "ˈhaʊzɪŋ ˈstrʌktʃər",
   "note": {
    "d": "Ở những vùng dễ sạt lở, người ta đánh giá mức dễ tổn thương của kết cấu nhà ở để đưa ra các biện pháp thích ứng nhằm giảm rủi ro.",
    "y": "Đối tượng được đánh giá mức dễ tổn thương; structure ở đây là kết cấu nhà, không phải «cấu trúc» trừu tượng."
   }
  },
  {
   "id": "inundate",
   "term": "inundate",
   "pos": "v",
   "vi": "làm ngập",
   "en": "to cover an area with water",
   "deck": "flood",
   "freq": 3,
   "ex": "Furthermore, the difference between the worst and best scenarios was estimated as 3.68km2 in inundated area and approximately 0.5m in flood depth in the study area.",
   "src": "Impact of Future Land Use Change on Flood Inundation Area: Case study in the Bago River basin, Myanmar",
   "ipa": "ˈɪnənˌdeɪt",
   "note": {
    "d": "Hơn nữa, chênh lệch giữa kịch bản xấu nhất và tốt nhất được ước tính là 3,68 km² diện tích ngập và khoảng 0,5 m độ sâu ngập trong khu vực nghiên cứu.",
    "y": "«inundated area» — phân từ quá khứ làm định ngữ: diện tích đã bị ngập, đo bằng km²."
   }
  },
  {
   "id": "non-structural-measure",
   "term": "non-structural measure",
   "pos": "n",
   "vi": "biện pháp phi công trình",
   "en": "rules, warnings and planning rather than construction",
   "deck": "flood",
   "freq": 3,
   "ex": "Flood hazard mapping is an effective non-structural measure for sustainable urban planning, protecting human properties, lives, and disaster risk reduction.",
   "src": "Flood Hazard Assessment of Bago River Basin, Myanmar",
   "ipa": "ˈnɑnˈstrʌktʃərəl ˈmɛʒər",
   "note": {
    "d": "Lập bản đồ hiểm hoạ lũ là một biện pháp phi công trình hiệu quả cho quy hoạch đô thị bền vững, bảo vệ tài sản, tính mạng con người và giảm nhẹ rủi ro thiên tai.",
    "y": "Biện pháp phi công trình: bản đồ, cảnh báo, quy hoạch — không xây gì mà vẫn giảm rủi ro."
   }
  },
  {
   "id": "structural-measure",
   "term": "structural measure",
   "pos": "n",
   "vi": "biện pháp công trình",
   "en": "physical works such as dams and levees",
   "deck": "flood",
   "freq": 3,
   "ex": "Flood hazard mapping is an effective non-structural measure for sustainable urban planning, protecting human properties, lives, and disaster risk reduction.",
   "src": "Flood Hazard Assessment of Bago River Basin, Myanmar",
   "ipa": "ˈstrʌktʃərəl ˈmɛʒər",
   "note": {
    "d": "Lập bản đồ hiểm hoạ lũ là một biện pháp phi công trình hiệu quả cho quy hoạch đô thị bền vững, bảo vệ tài sản, tính mạng con người và giảm nhẹ rủi ro thiên tai.",
    "y": "Đối lập với biện pháp phi công trình trong câu: đê, kè, hồ chứa là biện pháp công trình."
   }
  },
  {
   "id": "typhoon",
   "term": "typhoon",
   "pos": "n",
   "vi": "bão nhiệt đới (Tây Bắc Thái Bình Dương)",
   "en": "a tropical cyclone in the northwest Pacific",
   "deck": "flood",
   "freq": 3,
   "ex": "Typhoon-induced flood events result in enormous property losses and lives, thereby jeopardizing the prospects of sustainable societal growth.",
   "src": "Remote Sensing for Typhoon Flood Economic Loss Estimation: Current State and Digital Twin Prospects",
   "ipa": "ˌtaɪˈfun",
   "note": {
    "d": "Những trận lũ do bão gây ra kéo theo thiệt hại tài sản và sinh mạng khổng lồ, qua đó đe doạ triển vọng phát triển bền vững của xã hội.",
    "y": "«Typhoon-induced flood events» — lũ do bão gây ra; -induced là hậu tố rất hay gặp: rainfall-induced, human-induced."
   }
  },
  {
   "id": "affected-population",
   "term": "affected population",
   "pos": "n",
   "vi": "dân số bị ảnh hưởng",
   "en": "the number of people harmed by an event",
   "deck": "flood",
   "freq": 2,
   "ex": "A survey was conducted to determine the economic damage to affected populations and properties during a large flood in 2011.",
   "src": "Establishment of flood damage function models: A case study in the Bago River Basin, Myanmar",
   "ipa": "əˈfɛktɪd ˌpɑpjəˈleɪʃən",
   "note": {
    "d": "Một cuộc khảo sát đã được tiến hành để xác định thiệt hại kinh tế đối với người dân và tài sản bị ảnh hưởng trong trận lũ lớn năm 2011.",
    "y": "«affected populations and properties» — người và tài sản bị ảnh hưởng, hai nhóm đối tượng của khảo sát thiệt hại."
   }
  },
  {
   "id": "crop-damage",
   "term": "crop damage",
   "pos": "n",
   "vi": "thiệt hại mùa màng",
   "en": "loss of crops caused by a hazard",
   "deck": "flood",
   "freq": 2,
   "ex": "We then assessed the flood hazard and rice crop damage in the study area by integrating a two-dimensional diffusive-wave rainfall-runoff-inundation model and developed FDFs for validation.",
   "src": "Development of flood damage functions for agricultural crops and their applicability in regions of Asia",
   "ipa": "krɑp ˈdæmədʒ",
   "note": {
    "d": "Sau đó chúng tôi đánh giá hiểm hoạ lũ và thiệt hại lúa trong khu vực nghiên cứu bằng cách tích hợp mô hình mưa - dòng chảy - ngập sóng khuếch tán hai chiều, rồi xây dựng các hàm thiệt hại lũ để kiểm định.",
    "y": "«rice crop damage» — thiệt hại mùa lúa, tính bằng diện tích hoặc sản lượng mất đi."
   }
  },
  {
   "id": "disaster-event",
   "term": "disaster event",
   "pos": "n",
   "vi": "sự kiện thiên tai",
   "en": "one identified occurrence of a disaster",
   "deck": "flood",
   "freq": 2,
   "ex": "Climate models do not predict a reduction of such disaster events in the future in Samoa; indeed, most predict an increase.",
   "src": "Assessing the vulnerability of infrastructure to climate change on the Islands of Samoa",
   "ipa": "dɪˈzæstər ɪˈvɛnt",
   "note": {
    "d": "Các mô hình khí hậu không dự báo rằng những sự kiện thiên tai như vậy ở Samoa sẽ giảm đi trong tương lai; ngược lại, phần lớn còn dự báo tăng lên.",
    "y": "«a reduction of such disaster events» — mỗi trận thiên tai là một sự kiện đếm được, nhờ đó nói được tăng hay giảm."
   }
  },
  {
   "id": "flash-flood",
   "term": "flash flood",
   "pos": "n",
   "vi": "lũ quét",
   "en": "a sudden violent flood after intense rain",
   "deck": "flood",
   "freq": 2,
   "ex": "The climate change signals of CPM simulations suggest an increase in flash floods, changes in hail storm characteristics, and reductions in the snowpack over mountains.",
   "src": "A review on regional convection‐permitting climate modeling: Demonstrations, prospects, and challenges",
   "ipa": "flæʃ flʌd",
   "note": {
    "d": "Tín hiệu biến đổi khí hậu từ mô phỏng của mô hình phân giải đối lưu cho thấy lũ quét sẽ tăng, đặc điểm mưa đá thay đổi, và lớp tuyết tích trên núi mỏng đi.",
    "y": "Lũ quét: nước dâng rất nhanh sau mưa lớn, thường ở lưu vực nhỏ và dốc, khó cảnh báo kịp."
   }
  },
  {
   "id": "flood-forecasting",
   "term": "flood forecasting",
   "pos": "n",
   "vi": "dự báo lũ",
   "en": "predicting flood levels before they happen",
   "deck": "flood",
   "freq": 2,
   "ex": "To develop a flood forecasting system, an inundation map of the Bago River Basin is required.",
   "src": "Developing Flood Inundation Map Using RRI and SOBEK Models: A Case Study of the Bago River Basin, Myanmar",
   "ipa": "flʌd ˈfɔrˌkæstɪŋ",
   "note": {
    "d": "Để xây dựng hệ thống dự báo lũ, cần có bản đồ ngập của lưu vực sông Bago.",
    "y": "«a flood forecasting system» — dự báo lũ sắp tới; muốn làm được thì trước hết phải có bản đồ ngập."
   }
  },
  {
   "id": "flood-peak",
   "term": "flood peak",
   "pos": "n",
   "vi": "đỉnh lũ",
   "en": "the maximum water level or discharge in a flood",
   "deck": "flood",
   "freq": 2,
   "ex": "All methods exhibited decreases in the flood peak discharge for 50-yr and 100-yr flood predictions, which may primarily be due to the MIROC5 GCM used.",
   "src": "Impact of Bias-Correction Methods in Assessing the Potential Flood Frequency Change in the Bago River",
   "ipa": "flʌd pik",
   "note": {
    "d": "Mọi phương pháp đều cho thấy đỉnh lũ giảm ở dự báo lũ chu kỳ 50 năm và 100 năm, điều này chủ yếu có thể là do mô hình khí hậu MIROC5 đã dùng.",
    "y": "«flood peak discharge» = lưu lượng đỉnh lũ, con số quan trọng nhất khi thiết kế công trình chống lũ."
   }
  },
  {
   "id": "flood-protection",
   "term": "flood protection",
   "pos": "n",
   "vi": "phòng chống lũ",
   "en": "works and rules that keep floodwater away from people",
   "deck": "flood",
   "freq": 2,
   "ex": "Flood protection in a changing society: a perspective from historical agriculture transformation during 1931 and 1954 floods in Yangtze River Basin, China.",
   "src": "Flood protection in a changing society: a perspective from historical agriculture transformation during 1931 and 1954 floods in Yangtze River Basin, China",
   "ipa": "flʌd prəˈtɛkʃən",
   "note": {
    "d": "Phòng chống lũ trong một xã hội đang đổi thay: góc nhìn từ quá trình chuyển đổi nông nghiệp trong hai trận lũ năm 1931 và 1954 ở lưu vực sông Dương Tử, Trung Quốc.",
    "y": "Trong tiêu đề: phòng chống lũ đặt trong bối cảnh xã hội thay đổi, chứ không chỉ là chuyện kỹ thuật."
   }
  },
  {
   "id": "inundation-depth",
   "term": "inundation depth",
   "pos": "n",
   "vi": "độ sâu ngập",
   "en": "how deep the floodwater is at a location",
   "deck": "flood",
   "freq": 2,
   "ex": "Even for minor floods, inundation depth is the most significant factor affecting relative loss, irrespective of the economic group.",
   "src": "A local-scale analysis to understand differences in socioeconomic factors affecting economic loss due to floods among different communities",
   "ipa": "ˌɪnənˈdeɪʃən dɛpθ",
   "note": {
    "d": "Ngay cả với những trận lũ nhỏ, độ sâu ngập vẫn là yếu tố ảnh hưởng lớn nhất đến mức thiệt hại tương đối, bất kể nhóm kinh tế nào.",
    "y": "Chủ ngữ của câu: độ sâu ngập được nêu là yếu tố quyết định mức thiệt hại, hơn cả nhóm kinh tế."
   }
  },
  {
   "id": "affected-area",
   "term": "affected area",
   "pos": "n",
   "vi": "khu vực bị ảnh hưởng",
   "en": "the land where a disaster caused harm",
   "deck": "flood",
   "freq": 1,
   "ex": "Although this survey was significant in its scope, the results should be considered within the limitations of the Internet-based response collection and focus only on the less-affected area of Japan.",
   "src": "Media Preference, Information Needs, and the Language Proficiency of Foreigners in Japan after the 2011 Great East Japan Earthquake",
   "ipa": "əˈfɛktɪd ˈɛriə",
   "note": {
    "d": "Dù khảo sát này có phạm vi đáng kể, kết quả vẫn nên được nhìn trong giới hạn của cách thu thập phản hồi qua Internet và chỉ tập trung vào vùng ít chịu ảnh hưởng của Nhật Bản.",
    "y": "«the less-affected area of Japan» — vùng ít bị ảnh hưởng; đây là hạn chế của khảo sát vì không hỏi được vùng nặng nhất."
   }
  },
  {
   "id": "casualties",
   "term": "casualties",
   "pos": "n",
   "vi": "thương vong",
   "en": "the people killed or injured by a disaster",
   "deck": "flood",
   "freq": 1,
   "ex": "In 1931, the Yangtze River has manifested its force again with one of the deadliest floods ever recorded in Chinese history, causing 422,499 casualties, damages to more than 25.2 million people and 58.7 billion m2 farmland.",
   "src": "The interaction between society changes and hydrological extremes: the case of Yangtze River Basin, before and after the 1931 flood",
   "ipa": "ˈkæʒəwəltiz",
   "note": {
    "d": "Năm 1931, sông Dương Tử lại một lần nữa cho thấy sức mạnh của nó với một trong những trận lũ chết chóc nhất lịch sử Trung Quốc, gây 422.499 thương vong, ảnh hưởng tới hơn 25,2 triệu người và 58,7 tỉ m² đất canh tác.",
    "y": "Dạng số nhiều, gần như luôn dùng ở dạng này khi thống kê thiệt hại về người."
   }
  },
  {
   "id": "direct-damage",
   "term": "direct damage",
   "pos": "n",
   "vi": "thiệt hại trực tiếp",
   "en": "harm caused by the water itself touching property",
   "deck": "flood",
   "freq": 1,
   "ex": "However, a specific methodology for estimating direct damage by floods on roads considering flood and road characteristics is still missing.",
   "src": "Establishment of flood damage function model for rural roads: A case study in the Teesta River basin, Bangladesh",
   "ipa": "dərˈɛkt ˈdæmədʒ",
   "note": {
    "d": "Tuy nhiên, vẫn còn thiếu một phương pháp luận riêng để ước tính thiệt hại trực tiếp do lũ gây ra cho đường sá, có xét tới đặc điểm của cả trận lũ lẫn con đường.",
    "y": "Thiệt hại trực tiếp là do nước phá hỏng; khác thiệt hại gián tiếp như gián đoạn giao thông, mất doanh thu."
   }
  },
  {
   "id": "evacuation-route",
   "term": "evacuation route",
   "pos": "n",
   "vi": "tuyến sơ tán",
   "en": "the planned path people take to reach safety",
   "deck": "flood",
   "freq": 1,
   "ex": "This guidance is used to facilitate evacuation route planning, post-disaster response and resource deployment, and critical infrastructure protection and securing, and it must be available within a time window in which decision makers can take appropriate action.",
   "src": "Development of an Impact-Oriented Quantitative Coastal Inundation forecasting and early warning system with social and economic assessment",
   "ipa": "ɪˌvækjəˈweɪʃən rut",
   "note": {
    "d": "Thông tin chỉ dẫn này được dùng để hỗ trợ lập tuyến sơ tán, ứng phó và điều động nguồn lực sau thiên tai, cùng việc bảo vệ hạ tầng thiết yếu; và nó phải có kịp trong khoảng thời gian mà người ra quyết định còn hành động được.",
    "y": "Tuyến đường đưa dân ra khỏi vùng nguy hiểm; muốn vạch được thì cần biết vùng nào sẽ ngập."
   }
  },
  {
   "id": "flood-risk-management",
   "term": "flood risk management",
   "pos": "n",
   "vi": "quản lý rủi ro lũ",
   "en": "the whole set of actions that reduce flood risk",
   "deck": "flood",
   "freq": 1,
   "ex": "In flood risk management, a shift can be observed toward more integrated approaches that increasingly address the role of private households in implementing flood damage mitigation measures.",
   "src": "A Review of Risk Perceptions and Other Factors that Influence Flood Mitigation Behavior",
   "ipa": "flʌd rɪsk ˈmænədʒmənt",
   "note": {
    "d": "Trong quản lý rủi ro lũ, có thể thấy một sự chuyển hướng sang các cách tiếp cận tích hợp hơn, ngày càng chú ý tới vai trò của từng hộ dân trong việc thực hiện biện pháp giảm nhẹ thiệt hại.",
    "y": "«In flood risk management, a shift can be observed» — cả ngành đang chuyển hướng, không phải một nghiên cứu đơn lẻ."
   }
  },
  {
   "id": "lead-time",
   "term": "lead time",
   "pos": "n",
   "vi": "thời gian báo trước",
   "en": "how long before impact a warning is issued",
   "deck": "flood",
   "freq": 1,
   "ex": "We used the Water and Energy Budget-based Distributed Hydrological Model with improved snow physics (WEB-DHM-S) for generating long-range forecasts with a lead time of up to 3 months for the case of Kurobe River Basin in Japan.",
   "src": "Long-range streamflow prediction using a distributed hydrological model in a snowfed watershed",
   "ipa": "lɛd taɪm",
   "note": {
    "d": "Chúng tôi dùng mô hình thuỷ văn phân bố dựa trên cân bằng nước và năng lượng có cải tiến vật lý tuyết (WEB-DHM-S) để lập dự báo dài hạn với thời gian báo trước tới 3 tháng cho lưu vực sông Kurobe ở Nhật Bản.",
    "y": "«a lead time of up to 3 months» — thời gian báo trước; càng dài thì càng có thời gian chuẩn bị nhưng càng kém chính xác."
   }
  },
  {
   "id": "levee",
   "term": "levee",
   "pos": "n",
   "vi": "đê",
   "en": "a raised bank built to stop a river overflowing",
   "deck": "flood",
   "freq": 1,
   "ex": "For example, the reinforcement of levees in 1950s was more effective in reducing inundation area of 8% compared to 1931, while the construction of detention basins accounted for 2%.",
   "src": "Flood protection in a changing society: a perspective from historical agriculture transformation during 1931 and 1954 floods in Yangtze River Basin, China",
   "ipa": "ˈlɛvi",
   "note": {
    "d": "Chẳng hạn, việc gia cố đê thập niên 1950 hiệu quả hơn khi giảm được 8% diện tích ngập so với năm 1931, trong khi việc xây các hồ điều tiết chỉ đóng góp 2%.",
    "y": "«the reinforcement of levees» — gia cố đê; câu so hiệu quả của đê với hồ điều tiết bằng số phần trăm cụ thể."
   }
  },
  {
   "id": "susceptibility-map",
   "term": "susceptibility map",
   "pos": "n",
   "vi": "bản đồ nguy cơ",
   "en": "a map showing where a hazard is likely to occur",
   "deck": "flood",
   "freq": 1,
   "ex": "These particular parameters were used to produce a landslide susceptibility map, divided into five classes.",
   "src": "Landslide Susceptibility Analysis Using GIS and Logistic Regression Model A Case Study In Malang, Indonesia",
   "ipa": "səˌsɛptəˈbɪləti mæp",
   "note": {
    "d": "Những tham số cụ thể này được dùng để lập bản đồ nguy cơ sạt lở, chia thành năm cấp.",
    "y": "«divided into five classes» — bản đồ nguy cơ thường chia cấp từ rất thấp tới rất cao để dễ dùng trong quy hoạch."
   }
  },
  {
   "id": "urban-flooding",
   "term": "urban flooding",
   "pos": "n",
   "vi": "ngập lụt đô thị",
   "en": "flooding in cities when drains cannot take the rain",
   "deck": "flood",
   "freq": 1,
   "ex": "Projected increases in the frequency and intensity of heavy rainfall, based on climate models, should contribute to increases in precipitation-generated local flooding (e.g. flash flooding and urban flooding).",
   "src": "Flood risk and climate change: global and regional perspectives",
   "ipa": "ˈɜrbən ˈflʌdɪŋ",
   "note": {
    "d": "Mức tăng dự tính về tần suất và cường độ mưa lớn, dựa trên các mô hình khí hậu, sẽ khiến ngập cục bộ do mưa gia tăng (chẳng hạn lũ quét và ngập lụt đô thị).",
    "y": "Ngập đô thị do mưa tại chỗ không thoát kịp, khác với lũ sông tràn vào thành phố."
   }
  },
  {
   "id": "embankment",
   "term": "embankment",
   "pos": "n",
   "vi": "bờ đắp, nền đắp",
   "en": "a wall of earth built to hold back water or carry a road",
   "deck": "flood",
   "freq": 0,
   "ex": "",
   "src": "",
   "ipa": "ɛmˈbæŋkmənt"
  },
  {
   "id": "overflow",
   "term": "overflow",
   "pos": "v",
   "vi": "tràn bờ",
   "en": "to flow over the edge or bank",
   "deck": "flood",
   "freq": 0,
   "ex": "",
   "src": "",
   "ipa": "ˈoʊvərˌfloʊ"
  },
  {
   "id": "forecast",
   "term": "forecast",
   "pos": "v",
   "vi": "dự báo",
   "en": "to predict a future condition from current data",
   "deck": "geo",
   "freq": 48,
   "ex": "Very few previous studies have examined this crucial and challenging weather forecasting problem from the machine learning perspective.",
   "src": "Convolutional LSTM Network: A Machine Learning Approach for Precipitation Nowcasting",
   "ipa": "ˈfɔrˌkæst",
   "note": {
    "d": "Rất ít nghiên cứu trước đây xem xét bài toán dự báo thời tiết then chốt và đầy thách thức này từ góc nhìn học máy.",
    "y": "Ở dạng V-ing forecasting làm định ngữ cho problem; forecast dùng cả làm danh từ lẫn động từ."
   }
  },
  {
   "id": "uncertainty",
   "term": "uncertainty",
   "pos": "n",
   "vi": "độ bất định",
   "en": "the range of doubt around an estimate",
   "deck": "geo",
   "freq": 45,
   "ex": "This provides a best estimate of the weather at any given place and time as well as an estimate of its confidence and uncertainty.",
   "src": "Towards a more reliable historical reanalysis: Improvements for version 3 of the Twentieth Century Reanalysis system",
   "ipa": "ənˈsɜrtənti",
   "note": {
    "d": "Cách này cho ta ước tính tốt nhất về thời tiết tại một địa điểm và thời điểm bất kỳ, kèm theo mức độ tin cậy và độ bất định của ước tính đó.",
    "y": "Đi cặp với confidence — mô hình không chỉ đưa ra giá trị mà còn nói mình chắc chắn tới đâu."
   }
  },
  {
   "id": "dataset",
   "term": "dataset",
   "pos": "n",
   "vi": "bộ dữ liệu",
   "en": "an organised collection of related data",
   "deck": "geo",
   "freq": 39,
   "ex": "Improving River Bathymetry and Topography Representation of a Low-Lying Flat River Basin by Integrating Multiple Sourced Datasets.",
   "src": "Improving River Bathymetry and Topography Representation of a Low-Lying Flat River Basin by Integrating Multiple Sourced Datasets",
   "ipa": "ˈdeɪtəˌsɛt",
   "note": {
    "d": "Cải thiện cách biểu diễn địa hình đáy sông và địa hình bề mặt của một lưu vực sông trũng thấp bằng cách tích hợp nhiều nguồn dữ liệu.",
    "y": "«multiple sourced datasets» = nhiều bộ dữ liệu từ các nguồn khác nhau, được tích hợp lại."
   }
  },
  {
   "id": "resolution",
   "term": "resolution",
   "pos": "n",
   "vi": "độ phân giải",
   "en": "the smallest detail a dataset can show",
   "deck": "geo",
   "freq": 38,
   "ex": "A continental-scale hydrology and water quality model for Europe: Calibration and uncertainty of a high-resolution large-scale SWAT model.",
   "src": "A continental-scale hydrology and water quality model for Europe: Calibration and uncertainty of a high-resolution large-scale SWAT model",
   "ipa": "ˌrɛzəˈluʃən",
   "note": {
    "d": "Một mô hình thuỷ văn và chất lượng nước quy mô châu lục cho châu Âu: hiệu chỉnh và độ bất định của mô hình SWAT diện rộng, phân giải cao.",
    "y": "«high-resolution large-scale» — hai đặc điểm đi cùng nhau: phạm vi rộng nhưng vẫn chi tiết."
   }
  },
  {
   "id": "simulation",
   "term": "simulation",
   "pos": "n",
   "vi": "sự mô phỏng",
   "en": "a model run that imitates a real system",
   "deck": "geo",
   "freq": 34,
   "ex": "The predictive skills of two sets of simulations were compared (i) climatology and (ii) ensemble stream flow prediction (ESP).",
   "src": "Long-range streamflow prediction using a distributed hydrological model in a snowfed watershed",
   "ipa": "ˌsɪmjəˈleɪʃən",
   "note": {
    "d": "Khả năng dự báo của hai bộ mô phỏng được đem so sánh: (i) khí hậu trung bình nhiều năm và (ii) dự báo dòng chảy theo tổ hợp (ESP).",
    "y": "«two sets of simulations» — hai bộ mô phỏng được đem so khả năng dự báo."
   }
  },
  {
   "id": "bias",
   "term": "bias",
   "pos": "n",
   "vi": "sai lệch hệ thống",
   "en": "a systematic error that pushes results in one direction",
   "deck": "geo",
   "freq": 31,
   "ex": "Other improvements include more accurate representations of storm intensity, smaller errors, and large‐scale reductions in model bias.",
   "src": "Towards a more reliable historical reanalysis: Improvements for version 3 of the Twentieth Century Reanalysis system",
   "ipa": "ˈbaɪəs",
   "note": {
    "d": "Các cải tiến khác gồm mô tả cường độ bão chính xác hơn, sai số nhỏ hơn, và giảm mạnh sai lệch hệ thống của mô hình trên diện rộng.",
    "y": "«model bias» là sai lệch hệ thống, luôn lệch về một phía — khác error là sai số nói chung."
   }
  },
  {
   "id": "accuracy",
   "term": "accuracy",
   "pos": "n",
   "vi": "độ chính xác",
   "en": "how close a result is to the true value",
   "deck": "geo",
   "freq": 28,
   "ex": "This accuracy assessment yields the best result of 78.26% mIOU for a small window size CNN, which uses spectral information only.",
   "src": "Evaluation of Different Machine Learning Methods and Deep-Learning Convolutional Neural Networks for Landslide Detection",
   "ipa": "ˈækjərəsi",
   "note": {
    "d": "Đánh giá độ chính xác này cho kết quả tốt nhất là 78,26% mIOU với mạng CNN dùng cửa sổ nhỏ, chỉ sử dụng thông tin phổ.",
    "y": "«accuracy assessment» — bước bắt buộc sau khi phân loại ảnh, để biết kết quả đáng tin tới đâu."
   }
  },
  {
   "id": "mapping",
   "term": "mapping",
   "pos": "n",
   "vi": "việc lập bản đồ",
   "en": "the making of maps from data",
   "deck": "geo",
   "freq": 27,
   "ex": "Landslide susceptibility mapping is one of the most important counter measures in landslide risk reduction, as this paper will show.",
   "src": "Landslide Susceptibility Analysis Using GIS and Logistic Regression Model A Case Study In Malang, Indonesia",
   "ipa": "ˈmæpɪŋ",
   "note": {
    "d": "Lập bản đồ nguy cơ sạt lở là một trong những biện pháp đối phó quan trọng nhất để giảm nhẹ rủi ro sạt lở, như bài báo này sẽ chỉ ra.",
    "y": "Danh từ chỉ việc lập bản đồ, dạng V-ing của map."
   }
  },
  {
   "id": "variable",
   "term": "variable",
   "pos": "n",
   "vi": "biến",
   "en": "a quantity that can take different values",
   "deck": "geo",
   "freq": 27,
   "ex": "Using economic and demographic variables, we developed a conceptual model for predicting fire in human-dominated landscapes.",
   "src": "A human-driven decline in global burned area",
   "ipa": "ˈvɛriəbəl",
   "note": {
    "d": "Dùng các biến kinh tế và nhân khẩu, chúng tôi xây dựng một mô hình khái niệm để dự báo cháy ở những vùng cảnh quan do con người chi phối.",
    "y": "«economic and demographic variables» — các biến đầu vào của mô hình, mỗi biến là một đại lượng đo được."
   }
  },
  {
   "id": "parameter",
   "term": "parameter",
   "pos": "n",
   "vi": "tham số",
   "en": "a value in a model that is set or tuned",
   "deck": "geo",
   "freq": 23,
   "ex": "Seven spatial parameters – elevation, slope, aspect, flow accumulation, land use/land cover, geology and soil – were used in the analysis.",
   "src": "Landslide Susceptibility Analysis Using GIS and Logistic Regression Model A Case Study In Malang, Indonesia",
   "ipa": "pərˈæmətər",
   "note": {
    "d": "Bảy tham số không gian — cao độ, độ dốc, hướng dốc, tích luỹ dòng chảy, sử dụng đất/lớp phủ, địa chất và thổ nhưỡng — đã được dùng trong phân tích.",
    "y": "«Seven spatial parameters» — bảy lớp dữ liệu không gian, mỗi lớp là một tham số đầu vào của phân tích."
   }
  },
  {
   "id": "slope",
   "term": "slope",
   "pos": "n",
   "vi": "độ dốc",
   "en": "how steeply the ground rises or falls",
   "deck": "geo",
   "freq": 22,
   "ex": "That climate changes affect the stability of natural and engineered slopes and have consequences on landslides, is also undisputable.",
   "src": "Landslides in a changing climate",
   "ipa": "sloʊp",
   "note": {
    "d": "Việc biến đổi khí hậu ảnh hưởng tới ổn định của mái dốc tự nhiên lẫn mái dốc nhân tạo và kéo theo sạt lở cũng là điều không thể chối cãi.",
    "y": "Ở đây slope là mái dốc (một khối đất đá), không phải con số độ dốc; natural và engineered là hai loại mái dốc."
   }
  },
  {
   "id": "database",
   "term": "database",
   "pos": "n",
   "vi": "cơ sở dữ liệu",
   "en": "an organised store of data that can be queried",
   "deck": "geo",
   "freq": 21,
   "ex": "Recently, global landslide databases have shown the extent to which landslides impact on society and identified areas most at risk.",
   "src": "Global fatal landslide occurrence from 2004 to 2016",
   "ipa": "ˈdeɪtəˌbeɪs",
   "note": {
    "d": "Gần đây, các cơ sở dữ liệu sạt lở toàn cầu đã cho thấy sạt lở tác động tới xã hội tới mức nào và xác định được những vùng rủi ro cao nhất.",
    "y": "«global landslide databases» — cơ sở dữ liệu tổng hợp các vụ sạt lở, làm nền cho phân tích quy mô toàn cầu."
   }
  },
  {
   "id": "output",
   "term": "output",
   "pos": "n",
   "vi": "đầu ra, kết quả",
   "en": "what a model or process produces",
   "deck": "geo",
   "freq": 21,
   "ex": "We find that affected suppliers impose substantial output losses on their customers, especially when they produce specific inputs.",
   "src": "Input Specificity and the Propagation of Idiosyncratic Shocks in Production Networks *",
   "ipa": "ˈaʊtˌpʊt",
   "note": {
    "d": "Chúng tôi thấy rằng nhà cung ứng bị ảnh hưởng gây tổn thất sản lượng lớn cho khách hàng của họ, nhất là khi họ sản xuất những đầu vào chuyên biệt.",
    "y": "Ở đây là sản lượng của doanh nghiệp, không phải kết quả mô hình."
   }
  },
  {
   "id": "simulate",
   "term": "simulate",
   "pos": "v",
   "vi": "mô phỏng",
   "en": "to reproduce a real process with a model",
   "deck": "geo",
   "freq": 20,
   "ex": "Methods are based on transfer functions generated to map the distribution of the simulated historical data to that of the observations.",
   "src": "A trend-preserving bias correction – the ISI-MIP approach",
   "ipa": "ˈsɪmjələt",
   "note": {
    "d": "Các phương pháp dựa trên hàm chuyển được thiết lập để ánh xạ phân bố của số liệu mô phỏng quá khứ sang phân bố của số liệu quan trắc.",
    "y": "«the simulated historical data» — phân từ quá khứ làm định ngữ: số liệu quá khứ do mô hình sinh ra, đối lập với observations."
   }
  },
  {
   "id": "metric",
   "term": "metric",
   "pos": "n",
   "vi": "thước đo",
   "en": "a defined quantity used to judge performance",
   "deck": "geo",
   "freq": 18,
   "ex": "A traditional metric used in hydrology to summarize model performance is the Nash–Sutcliffe efficiency (NSE).",
   "src": "Technical note: Inherent benchmark or not? Comparing Nash–Sutcliffe and Kling–Gupta efficiency scores",
   "ipa": "ˈmɛtrɪk",
   "note": {
    "d": "Một thước đo truyền thống dùng trong thuỷ văn để tóm tắt hiệu năng mô hình là chỉ số hiệu quả Nash-Sutcliffe (NSE).",
    "y": "«A traditional metric used in hydrology» — thước đo quen dùng để chấm điểm mô hình."
   }
  },
  {
   "id": "error",
   "term": "error",
   "pos": "n",
   "vi": "sai số",
   "en": "the difference between a computed and a true value",
   "deck": "geo",
   "freq": 17,
   "ex": "Other improvements include more accurate representations of storm intensity, smaller errors, and large‐scale reductions in model bias.",
   "src": "Towards a more reliable historical reanalysis: Improvements for version 3 of the Twentieth Century Reanalysis system",
   "ipa": "ˈɛrər",
   "note": {
    "d": "Các cải tiến khác gồm mô tả cường độ bão chính xác hơn, sai số nhỏ hơn, và giảm mạnh sai lệch hệ thống của mô hình trên diện rộng.",
    "y": "Đặt cạnh bias trong cùng danh sách cải tiến: sai số nhỏ hơn và sai lệch hệ thống giảm."
   }
  },
  {
   "id": "indicator",
   "term": "indicator",
   "pos": "n",
   "vi": "chỉ số, chỉ báo",
   "en": "a measurable sign of a condition or trend",
   "deck": "geo",
   "freq": 15,
   "ex": "We here review a variety of indicators that have been developed to capture different characteristics of water scarcity.",
   "src": "Water scarcity assessments in the past, present, and future",
   "ipa": "ˈɪndəˌkeɪtər",
   "note": {
    "d": "Ở đây chúng tôi điểm lại nhiều chỉ số khác nhau đã được xây dựng nhằm nắm bắt các khía cạnh khác nhau của tình trạng khan hiếm nước.",
    "y": "«a variety of indicators» — mỗi chỉ số chỉ nắm được một mặt của khan hiếm nước, nên phải điểm lại nhiều cái."
   }
  },
  {
   "id": "calibrate",
   "term": "calibrate",
   "pos": "v",
   "vi": "hiệu chỉnh",
   "en": "to adjust a model or instrument against known values",
   "deck": "geo",
   "freq": 14,
   "ex": "The model was calibrated with observed discharge data for a 2011 flooding event and validated for flooding events in 2014 and 2015.",
   "src": "Consideration of the rainfall-runoff-inundation (RRI) model for flood mapping in a deltaic area of Myanmar",
   "ipa": "ˈkæləˌbreɪt",
   "note": {
    "d": "Mô hình được hiệu chỉnh bằng số liệu lưu lượng thực đo của trận ngập năm 2011 và được kiểm định với các trận ngập năm 2014 và 2015.",
    "y": "Đi liền với validate: calibrate là chỉnh tham số cho khớp một trận lũ, validate là thử lại trên trận khác."
   }
  },
  {
   "id": "calibration",
   "term": "calibration",
   "pos": "n",
   "vi": "hiệu chỉnh mô hình",
   "en": "tuning model parameters so output matches observations",
   "deck": "geo",
   "freq": 13,
   "ex": "A continental-scale hydrology and water quality model for Europe: Calibration and uncertainty of a high-resolution large-scale SWAT model.",
   "src": "A continental-scale hydrology and water quality model for Europe: Calibration and uncertainty of a high-resolution large-scale SWAT model",
   "ipa": "ˌkæləˈbreɪʃən",
   "note": {
    "d": "Một mô hình thuỷ văn và chất lượng nước quy mô châu lục cho châu Âu: hiệu chỉnh và độ bất định của mô hình SWAT diện rộng, phân giải cao.",
    "y": "Đặt cạnh uncertainty: hiệu chỉnh tham số cho khớp số liệu thực đo, rồi đánh giá độ bất định còn lại."
   }
  },
  {
   "id": "topography",
   "term": "topography",
   "pos": "n",
   "vi": "địa hình học",
   "en": "the arrangement of natural and artificial features of an area",
   "deck": "geo",
   "freq": 13,
   "ex": "Improving River Bathymetry and Topography Representation of a Low-Lying Flat River Basin by Integrating Multiple Sourced Datasets.",
   "src": "Improving River Bathymetry and Topography Representation of a Low-Lying Flat River Basin by Integrating Multiple Sourced Datasets",
   "ipa": "təˈpɑɡrəfi",
   "note": {
    "d": "Cải thiện cách biểu diễn địa hình đáy sông và địa hình bề mặt của một lưu vực sông trũng thấp bằng cách tích hợp nhiều nguồn dữ liệu.",
    "y": "Đi cặp với bathymetry: bathymetry là địa hình đáy nước, topography là địa hình bề mặt."
   }
  },
  {
   "id": "algorithm",
   "term": "algorithm",
   "pos": "n",
   "vi": "thuật toán",
   "en": "a defined sequence of steps for solving a problem",
   "deck": "geo",
   "freq": 12,
   "ex": "First, a bias correction algorithm, quantile delta mapping (QDM), that explicitly preserves relative changes in precipitation quantiles is presented.",
   "src": "Bias Correction of GCM Precipitation by Quantile Mapping: How Well Do Methods Preserve Changes in Quantiles and Extremes?",
   "ipa": "ˈælɡərˌɪðəm",
   "note": {
    "d": "Trước hết, bài trình bày thuật toán hiệu chỉnh sai lệch mang tên ánh xạ delta theo phân vị (QDM), giữ nguyên được mức thay đổi tương đối của các phân vị mưa.",
    "y": "«a bias correction algorithm, quantile delta mapping (QDM)» — dấu phẩy giới thiệu tên riêng của thuật toán."
   }
  },
  {
   "id": "downscale",
   "term": "downscale",
   "pos": "v",
   "vi": "chi tiết hoá (hạ quy mô)",
   "en": "to turn coarse model output into finer local detail",
   "deck": "geo",
   "freq": 12,
   "ex": "Downscaling was performed on future GCMs’ temperature and precipitation data, and plausible extreme events were generated.",
   "src": "The Impact of Climate Change on Reservoir Inflows Using Multi Climate-Model under RCPs’ Including Extreme Events—A Case of Mangla Dam, Pakistan",
   "ipa": "ˈdaʊnˌskeɪl",
   "note": {
    "d": "Việc hạ quy mô được thực hiện trên số liệu nhiệt độ và giáng thủy tương lai của các mô hình khí hậu toàn cầu, từ đó sinh ra các sự kiện cực đoan hợp lý.",
    "y": "Dạng động từ; trong câu này xuất hiện ở dạng danh từ downscaling làm chủ ngữ."
   }
  },
  {
   "id": "terrain",
   "term": "terrain",
   "pos": "n",
   "vi": "địa hình",
   "en": "the shape and features of a piece of land",
   "deck": "geo",
   "freq": 12,
   "ex": "Then, contributions of catchment properties to N-leaching were investigated by spatial analysis using fine-scale terrain data.",
   "src": "Using GIS for assessing stream water chemistry in a forested watershed",
   "ipa": "tərˈeɪn",
   "note": {
    "d": "Sau đó, đóng góp của các đặc trưng lưu vực vào lượng đạm rửa trôi được khảo sát bằng phân tích không gian trên dữ liệu địa hình chi tiết.",
    "y": "«fine-scale terrain data» = dữ liệu địa hình chi tiết; fine-scale nói về độ mịn của lưới dữ liệu."
   }
  },
  {
   "id": "validate",
   "term": "validate",
   "pos": "v",
   "vi": "kiểm định, xác nhận",
   "en": "to check that something is correct or works as claimed",
   "deck": "geo",
   "freq": 12,
   "ex": "The model was calibrated with observed discharge data for a 2011 flooding event and validated for flooding events in 2014 and 2015.",
   "src": "Consideration of the rainfall-runoff-inundation (RRI) model for flood mapping in a deltaic area of Myanmar",
   "ipa": "ˈvælədeɪt",
   "note": {
    "d": "Mô hình được hiệu chỉnh bằng số liệu lưu lượng thực đo của trận ngập năm 2011 và được kiểm định với các trận ngập năm 2014 và 2015.",
    "y": "Kiểm định trên số liệu KHÔNG dùng lúc hiệu chỉnh (2014, 2015) — đó mới là phép thử thật sự."
   }
  },
  {
   "id": "correlation",
   "term": "correlation",
   "pos": "n",
   "vi": "sự tương quan",
   "en": "a statistical relationship between two variables",
   "deck": "geo",
   "freq": 11,
   "ex": "Mapping landslide displacements using Structure from Motion (SfM) and image correlation of multi-temporal UAV photography.",
   "src": "Mapping landslide displacements using Structure from Motion (SfM) and image correlation of multi-temporal UAV photography",
   "ipa": "ˌkɔrəˈleɪʃən",
   "note": {
    "d": "Lập bản đồ dịch chuyển do sạt lở bằng kỹ thuật Structure from Motion và phép tương quan ảnh từ nhiều đợt bay chụp UAV.",
    "y": "Ở đây là phép tương quan ảnh: so hai tấm ảnh chụp khác thời điểm để đo đất đã dịch chuyển bao nhiêu."
   }
  },
  {
   "id": "machine-learning",
   "term": "machine learning",
   "pos": "n",
   "vi": "học máy",
   "en": "methods that learn patterns from data instead of fixed rules",
   "deck": "geo",
   "freq": 11,
   "ex": "Very few previous studies have examined this crucial and challenging weather forecasting problem from the machine learning perspective.",
   "src": "Convolutional LSTM Network: A Machine Learning Approach for Precipitation Nowcasting",
   "ipa": "məˈʃin ˈlɜrnɪŋ",
   "note": {
    "d": "Rất ít nghiên cứu trước đây xem xét bài toán dự báo thời tiết then chốt và đầy thách thức này từ góc nhìn học máy.",
    "y": "«from the machine learning perspective» = từ góc nhìn học máy — hướng tiếp cận mới của bài."
   }
  },
  {
   "id": "geospatial",
   "term": "geospatial",
   "pos": "adj",
   "vi": "địa không gian",
   "en": "relating to data that has a location on Earth",
   "deck": "geo",
   "freq": 9,
   "ex": "Preliminary Insights into Economic Well-Being from a Geospatial Perspective: Empirical Evidence from 6 Counties in China.",
   "src": "Preliminary Insights into Economic Well-Being from a Geospatial Perspective: Empirical Evidence from 6 Counties in China",
   "ipa": "ˌdʒioʊˈspeɪʃəl",
   "note": {
    "d": "Những hiểu biết sơ bộ về mức sống nhìn từ góc độ địa không gian: bằng chứng thực nghiệm từ 6 huyện ở Trung Quốc.",
    "y": "«from a Geospatial Perspective» — nhìn vấn đề kinh tế qua dữ liệu gắn với vị trí trên bản đồ."
   }
  },
  {
   "id": "logistic-regression",
   "term": "logistic regression",
   "pos": "n",
   "vi": "hồi quy logistic",
   "en": "a statistical model that predicts a yes/no outcome",
   "deck": "geo",
   "freq": 9,
   "ex": "The article “Landslide susceptibility mapping of the Sera River Basin using logistic regression model,” written by Nussaïbah B.",
   "src": "Correction to: Landslide susceptibility mapping of the Sera River Basin using logistic regression model",
   "ipa": "ləˈdʒɪstɪk rəˈɡrɛʃən",
   "note": {
    "d": "Bài báo «Lập bản đồ nguy cơ sạt lở lưu vực sông Sera bằng mô hình hồi quy logistic», viết bởi Nussaïbah B.",
    "y": "Mô hình dự đoán xác suất có/không, rất hợp với bài toán một ô đất có sạt lở hay không."
   }
  },
  {
   "id": "regression-model",
   "term": "regression model",
   "pos": "n",
   "vi": "mô hình hồi quy",
   "en": "a model fitting a response to explanatory variables",
   "deck": "geo",
   "freq": 9,
   "ex": "The article “Landslide susceptibility mapping of the Sera River Basin using logistic regression model,” written by Nussaïbah B.",
   "src": "Correction to: Landslide susceptibility mapping of the Sera River Basin using logistic regression model",
   "ipa": "rəˈɡrɛʃən ˈmɑdəl",
   "note": {
    "d": "Bài báo «Lập bản đồ nguy cơ sạt lở lưu vực sông Sera bằng mô hình hồi quy logistic», viết bởi Nussaïbah B.",
    "y": "Ở đây chỉ chính mô hình hồi quy logistic dùng để lập bản đồ nguy cơ."
   }
  },
  {
   "id": "model-performance",
   "term": "model performance",
   "pos": "n",
   "vi": "hiệu năng mô hình",
   "en": "how well a model reproduces observed values",
   "deck": "geo",
   "freq": 8,
   "ex": "A traditional metric used in hydrology to summarize model performance is the Nash–Sutcliffe efficiency (NSE).",
   "src": "Technical note: Inherent benchmark or not? Comparing Nash–Sutcliffe and Kling–Gupta efficiency scores",
   "ipa": "ˈmɑdəl pərˈfɔrməns",
   "note": {
    "d": "Một thước đo truyền thống dùng trong thuỷ văn để tóm tắt hiệu năng mô hình là chỉ số hiệu quả Nash-Sutcliffe (NSE).",
    "y": "Cái mà NSE tóm tắt lại thành một con số duy nhất."
   }
  },
  {
   "id": "spatial-resolution",
   "term": "spatial resolution",
   "pos": "n",
   "vi": "độ phân giải không gian",
   "en": "the ground size represented by one pixel or grid cell",
   "deck": "geo",
   "freq": 8,
   "ex": "This study quantifies and maps the water footprint (WF) of humanity at a high spatial resolution.",
   "src": "The water footprint of humanity",
   "ipa": "ˈspeɪʃəl ˌrɛzəˈluʃən",
   "note": {
    "d": "Nghiên cứu này định lượng và lập bản đồ dấu chân nước của nhân loại ở độ phân giải không gian cao.",
    "y": "«at a high spatial resolution» — ô lưới nhỏ, nhìn được chi tiết tới từng vùng chứ không chỉ từng nước."
   }
  },
  {
   "id": "aggregate",
   "term": "aggregate",
   "pos": "v",
   "vi": "gộp, tổng hợp",
   "en": "to combine detailed values into a coarser total",
   "deck": "geo",
   "freq": 7,
   "ex": "This paper uses historical fluctuations in temperature within countries to identify its effects on aggregate economic outcomes.",
   "src": "Temperature Shocks and Economic Growth: Evidence from the Last Half Century",
   "ipa": "ˈæɡrəɡət",
   "note": {
    "d": "Bài báo dùng biến động nhiệt độ trong quá khứ ở từng quốc gia để xác định ảnh hưởng của nhiệt độ lên các chỉ tiêu kinh tế tổng hợp.",
    "y": "Ở đây là tính từ đứng trước outcomes, nghĩa đã gộp chung — không phải động từ."
   }
  },
  {
   "id": "estimation-model",
   "term": "estimation model",
   "pos": "n",
   "vi": "mô hình ước tính",
   "en": "a model built to estimate an unmeasured quantity",
   "deck": "geo",
   "freq": 7,
   "ex": "This paper introduces an integrated model that combines the Rainfall Runoff Inundation (RRI) and spatially distributed flood damage estimation models.",
   "src": "Development of Flood Damage Estimation Model for Agriculture – Case Study in the Bago Floodplain, Myanmar",
   "ipa": "ˌɛstəˈmeɪʃən ˈmɑdəl",
   "note": {
    "d": "Bài báo giới thiệu một mô hình tích hợp, kết hợp mô hình mưa - dòng chảy - ngập (RRI) với mô hình ước tính thiệt hại lũ phân bố theo không gian.",
    "y": "«flood damage estimation models» — mô hình ước tính thiệt hại, ghép sau mô hình mưa - dòng chảy - ngập."
   }
  },
  {
   "id": "neural-network",
   "term": "neural network",
   "pos": "n",
   "vi": "mạng nơ-ron",
   "en": "a machine-learning model of connected layers of units",
   "deck": "geo",
   "freq": 7,
   "ex": "Evaluation of Different Machine Learning Methods and Deep-Learning Convolutional Neural Networks for Landslide Detection.",
   "src": "Evaluation of Different Machine Learning Methods and Deep-Learning Convolutional Neural Networks for Landslide Detection",
   "ipa": "ˈnʊrəl ˈnɛˌtwɜrk",
   "note": {
    "d": "Đánh giá các phương pháp học máy khác nhau và mạng nơ-ron tích chập học sâu trong việc phát hiện sạt lở.",
    "y": "«Deep-Learning Convolutional Neural Networks» — mạng nơ-ron tích chập, kiểu mạng chuyên xử lý ảnh."
   }
  },
  {
   "id": "regression-analysis",
   "term": "regression analysis",
   "pos": "n",
   "vi": "phân tích hồi quy",
   "en": "the statistical study of such a relationship",
   "deck": "geo",
   "freq": 7,
   "ex": "Regression analysis was used to analyze the correlation between the physical vulnerability of buildings and socio-economic parameters, which was a novel approach.",
   "src": "Assessment of physical vulnerability of buildings and socio-economic vulnerability of residents to rainfall induced cut slope failures: A case study in central highlands, Sri Lanka",
   "ipa": "rəˈɡrɛʃən əˈnæləsəs",
   "note": {
    "d": "Phân tích hồi quy được dùng để tìm tương quan giữa mức dễ tổn thương vật lý của công trình và các tham số kinh tế - xã hội, và đây là một cách tiếp cận mới.",
    "y": "Công cụ thống kê tìm quan hệ giữa hai nhóm biến; cái mới của bài là nối yếu tố vật lý với yếu tố xã hội."
   }
  },
  {
   "id": "satellite-imagery",
   "term": "satellite imagery",
   "pos": "n",
   "vi": "ảnh vệ tinh",
   "en": "pictures of the Earth taken from satellites",
   "deck": "geo",
   "freq": 7,
   "ex": "Estimation of Income Levels in Individual Buildings Using Satellite Imagery and Household Interview Survey Data.",
   "src": "Estimation of Income Levels in Individual Buildings Using Satellite Imagery and Household Interview Survey Data",
   "ipa": "ˈsætəˌlaɪt ˈɪmədʒri",
   "note": {
    "d": "Ước tính mức thu nhập của từng ngôi nhà bằng ảnh vệ tinh và dữ liệu khảo sát phỏng vấn hộ gia đình.",
    "y": "Ảnh vệ tinh cho phép nhìn toàn bộ khu vực, thứ mà khảo sát phỏng vấn không thể phủ hết."
   }
  },
  {
   "id": "digital-elevation-model",
   "term": "digital elevation model",
   "pos": "n",
   "vi": "mô hình số độ cao",
   "en": "a raster dataset giving the ground height at each cell",
   "deck": "geo",
   "freq": 6,
   "ex": "Topography represented in the form of Digital Elevation Models (DEMs) has profound applications in hydrological modeling.",
   "src": "Improving River Bathymetry and Topography Representation of a Low-Lying Flat River Basin by Integrating Multiple Sourced Datasets",
   "ipa": "ˈdɪdʒətəl ˌɛləˈveɪʃən ˈmɑdəl",
   "note": {
    "d": "Địa hình biểu diễn dưới dạng mô hình số độ cao (DEM) có ứng dụng sâu rộng trong mô hình hoá thuỷ văn.",
    "y": "DEM là lưới cao độ mặt đất; gần như mọi mô hình thuỷ văn đều bắt đầu từ nó."
   }
  },
  {
   "id": "geographic-information-system",
   "term": "geographic information system",
   "pos": "n",
   "vi": "hệ thống thông tin địa lý (GIS)",
   "en": "software for storing, mapping and analysing spatial data",
   "deck": "geo",
   "freq": 6,
   "ex": "The relationships to soil N processes and catchment topography were also evaluated using a geographic information system with fine-scale map data.",
   "src": "The influence of topography on the stream N concentration in the Tanzawa Mountains, Southern Kanto District, Japan",
   "ipa": "ˌdʒiəˈɡræfɪk ˌɪnfərˈmeɪʃən ˈsɪstəm",
   "note": {
    "d": "Quan hệ với các quá trình đạm trong đất và với địa hình lưu vực cũng được đánh giá bằng hệ thống thông tin địa lý trên dữ liệu bản đồ tỉ lệ lớn.",
    "y": "GIS — công cụ chồng lớp bản đồ để tìm quan hệ giữa các yếu tố phân bố theo không gian."
   }
  },
  {
   "id": "site-selection",
   "term": "site selection",
   "pos": "n",
   "vi": "lựa chọn vị trí",
   "en": "choosing the best location for a facility from criteria",
   "deck": "geo",
   "freq": 6,
   "ex": "This paper explores the consideration of topographical factors with and without hydrological factors as approaches for optimized site selection.",
   "src": "A systematic decision support tool for robust hydropower site selection in poorly gauged basins",
   "ipa": "saɪt səˈlɛkʃən",
   "note": {
    "d": "Bài báo xem xét việc cân nhắc các yếu tố địa hình, có kèm và không kèm yếu tố thuỷ văn, như những hướng tiếp cận để chọn vị trí tối ưu.",
    "y": "«optimized site selection» — chọn vị trí tối ưu, chẳng hạn cho công trình hoặc trạm quan trắc."
   }
  },
  {
   "id": "data-integration",
   "term": "data integration",
   "pos": "n",
   "vi": "tích hợp dữ liệu",
   "en": "combining datasets from different sources into one",
   "deck": "geo",
   "freq": 5,
   "ex": "Data Integration and Analysis System (DIAS) Contributing to Climate Change Analysis and Disaster Risk Reduction.",
   "src": "Data Integration and Analysis System (DIAS) Contributing to Climate Change Analysis and Disaster Risk Reduction",
   "ipa": "ˈdeɪtə ˌɪntəˈɡreɪʃən",
   "note": {
    "d": "Hệ thống Tích hợp và Phân tích Dữ liệu (DIAS) đóng góp cho phân tích biến đổi khí hậu và giảm nhẹ rủi ro thiên tai.",
    "y": "Trong tên hệ thống DIAS: gom dữ liệu nhiều nguồn về một chỗ để phân tích chung."
   }
  },
  {
   "id": "flow-accumulation",
   "term": "flow accumulation",
   "pos": "n",
   "vi": "tích luỹ dòng chảy",
   "en": "a GIS grid counting how many cells drain into each cell",
   "deck": "geo",
   "freq": 5,
   "ex": "Seven spatial parameters – elevation, slope, aspect, flow accumulation, land use/land cover, geology and soil – were used in the analysis.",
   "src": "Landslide Susceptibility Analysis Using GIS and Logistic Regression Model A Case Study In Malang, Indonesia",
   "ipa": "floʊ əˌkjumjəˈleɪʃən",
   "note": {
    "d": "Bảy tham số không gian — cao độ, độ dốc, hướng dốc, tích luỹ dòng chảy, sử dụng đất/lớp phủ, địa chất và thổ nhưỡng — đã được dùng trong phân tích.",
    "y": "Tham số tính từ mô hình số độ cao: mỗi điểm hứng nước từ bao nhiêu ô phía trên."
   }
  },
  {
   "id": "nowcasting",
   "term": "nowcasting",
   "pos": "n",
   "vi": "dự báo cực ngắn hạn",
   "en": "forecasting the next few hours from current observations",
   "deck": "geo",
   "freq": 5,
   "ex": "The goal of precipitation nowcasting is to predict the future rainfall intensity in a local region over a relatively short period of time.",
   "src": "Convolutional LSTM Network: A Machine Learning Approach for Precipitation Nowcasting",
   "ipa": "ˈnaʊˌkæstɪŋ",
   "note": {
    "d": "Mục tiêu của dự báo mưa cực ngắn hạn là dự đoán cường độ mưa sắp tới tại một khu vực hẹp trong khoảng thời gian tương đối ngắn.",
    "y": "«precipitation nowcasting» — dự báo cho vài giờ tới, dùng ảnh radar thay vì mô hình khí quyển đầy đủ."
   }
  },
  {
   "id": "remote-sensing",
   "term": "remote sensing",
   "pos": "n",
   "vi": "viễn thám",
   "en": "observing the Earth from satellites or aircraft",
   "deck": "geo",
   "freq": 5,
   "ex": "Remote Sensing for Typhoon Flood Economic Loss Estimation: Current State and Digital Twin Prospects.",
   "src": "Remote Sensing for Typhoon Flood Economic Loss Estimation: Current State and Digital Twin Prospects",
   "ipa": "rɪˈmoʊt ˈsɛnsɪŋ",
   "note": {
    "d": "Viễn thám phục vụ ước tính thiệt hại kinh tế do lũ bão: hiện trạng và triển vọng của bản sao số.",
    "y": "Thu thập thông tin từ xa bằng vệ tinh hoặc máy bay, không cần tới tận nơi đo."
   }
  },
  {
   "id": "spatiotemporal",
   "term": "spatiotemporal",
   "pos": "adj",
   "vi": "không - thời gian",
   "en": "varying in both space and time",
   "deck": "geo",
   "freq": 5,
   "ex": "This paper presents spatiotemporal analysis of a global dataset of fatal non-seismic landslides, covering the period from January 2004 to December 2016.",
   "src": "Global fatal landslide occurrence from 2004 to 2016",
   "ipa": "ˌspeɪʃioʊˈtɛmpərəl",
   "note": {
    "d": "Bài báo trình bày phân tích không - thời gian trên bộ dữ liệu toàn cầu về các vụ sạt lở gây chết người không do động đất, trong giai đoạn từ tháng 1/2004 đến tháng 12/2016.",
    "y": "«spatiotemporal analysis» — phân tích cùng lúc theo không gian và thời gian: sạt lở xảy ra ở đâu và vào lúc nào."
   }
  },
  {
   "id": "time-series",
   "term": "time series",
   "pos": "n",
   "vi": "chuỗi thời gian",
   "en": "a sequence of values recorded at successive times",
   "deck": "geo",
   "freq": 5,
   "ex": "NSE and KGE values cannot be directly compared, because their relationship is non-unique and depends in part on the coefficient of variation of the observed time series.",
   "src": "Technical note: Inherent benchmark or not? Comparing Nash–Sutcliffe and Kling–Gupta efficiency scores",
   "ipa": "taɪm ˈsɪriz",
   "note": {
    "d": "Không thể so trực tiếp giá trị NSE với KGE, bởi quan hệ giữa chúng không phải một - một và còn phụ thuộc một phần vào hệ số biến thiên của chuỗi số liệu thực đo.",
    "y": "«the observed time series» — chuỗi số liệu thực đo theo thời gian, nền để tính mọi chỉ số đánh giá mô hình."
   }
  },
  {
   "id": "validation",
   "term": "validation",
   "pos": "n",
   "vi": "kiểm định (mô hình)",
   "en": "testing a model against data not used to build it",
   "deck": "geo",
   "freq": 5,
   "ex": "The developed FDFs was also applied in five selected river basins in five other Asian countries for validation of the FDFs.",
   "src": "Development of flood damage functions for agricultural crops and their applicability in regions of Asia",
   "ipa": "ˌvæləˈdeɪʃən",
   "note": {
    "d": "Các hàm thiệt hại lũ đã xây dựng còn được áp dụng cho năm lưu vực chọn lọc ở năm nước châu Á khác để kiểm định.",
    "y": "«for validation of the FDFs» — đem hàm đã dựng thử ở nơi khác để xem có còn đúng không."
   }
  },
  {
   "id": "data-source",
   "term": "data source",
   "pos": "n",
   "vi": "nguồn dữ liệu",
   "en": "where a dataset comes from",
   "deck": "geo",
   "freq": 4,
   "ex": "High‐resolution raster hydrography maps are a fundamental data source for many geoscience applications.",
   "src": "MERIT Hydro: A High‐Resolution Global Hydrography Map Based on Latest Topography Dataset",
   "ipa": "ˈdeɪtə sɔrs",
   "note": {
    "d": "Bản đồ thuỷ văn dạng lưới ô độ phân giải cao là nguồn dữ liệu nền tảng cho rất nhiều ứng dụng khoa học trái đất.",
    "y": "«a fundamental data source» — nguồn dữ liệu nền tảng, thứ nhiều nghiên cứu khác đều phải dựa vào."
   }
  },
  {
   "id": "elevation-data",
   "term": "elevation data",
   "pos": "n",
   "vi": "dữ liệu độ cao",
   "en": "measurements of ground height above sea level",
   "deck": "geo",
   "freq": 4,
   "ex": "New elevation data triple estimates of global vulnerability to sea-level rise and coastal flooding.",
   "src": "New elevation data triple estimates of global vulnerability to sea-level rise and coastal flooding",
   "ipa": "ˌɛləˈveɪʃən ˈdeɪtə",
   "note": {
    "d": "Dữ liệu độ cao mới làm mức dễ tổn thương toàn cầu trước nước biển dâng và ngập ven biển tăng gấp ba lần so với ước tính cũ.",
    "y": "Chủ ngữ của câu: chính dữ liệu độ cao mới đã làm con số dễ tổn thương tăng gấp ba."
   }
  },
  {
   "id": "land-surface",
   "term": "land surface",
   "pos": "n",
   "vi": "bề mặt đất",
   "en": "the top layer of the ground where land meets air",
   "deck": "geo",
   "freq": 4,
   "ex": "It includes in particular the land surface scheme ISBA (Interactions between Soil, Biosphere, and Atmosphere).",
   "src": "The detailed snowpack scheme Crocus and its implementation in SURFEX v7.2",
   "ipa": "lænd ˈsɜrfəs",
   "note": {
    "d": "Đặc biệt, nó bao gồm sơ đồ bề mặt đất ISBA (Tương tác giữa Đất, Sinh quyển và Khí quyển).",
    "y": "«the land surface scheme ISBA» — sơ đồ mô tả trao đổi nước và nhiệt giữa mặt đất với khí quyển."
   }
  },
  {
   "id": "spatial-distribution",
   "term": "spatial distribution",
   "pos": "n",
   "vi": "phân bố không gian",
   "en": "how something is spread across an area",
   "deck": "geo",
   "freq": 4,
   "ex": "Spatial distribution results show that the people who suffer most from floods are those who live in the worst conditions.",
   "src": "A local level relationship between floods and poverty: A case in Myanmar",
   "ipa": "ˈspeɪʃəl ˌdɪstrəˈbjuʃən",
   "note": {
    "d": "Kết quả phân bố không gian cho thấy những người chịu thiệt hại nặng nhất vì lũ chính là những người sống trong điều kiện tồi tệ nhất.",
    "y": "«Spatial distribution results» — kết quả xét theo vị trí, nhờ đó mới thấy người thiệt hại nặng nhất ở đâu."
   }
  },
  {
   "id": "spatial-pattern",
   "term": "spatial pattern",
   "pos": "n",
   "vi": "quy luật phân bố theo không gian",
   "en": "a regular arrangement of values across space",
   "deck": "geo",
   "freq": 4,
   "ex": "Our study uniquely illustrates spatial patterns in the relationship between climate variability and crop yield variability, highlighting where variations in temperature, precipitation or their interaction explain yield variability.",
   "src": "Climate variation explains a third of global crop yield variability",
   "ipa": "ˈspeɪʃəl ˈpætərn",
   "note": {
    "d": "Nghiên cứu của chúng tôi lần đầu chỉ ra quy luật phân bố không gian trong quan hệ giữa dao động khí hậu và dao động năng suất cây trồng, cho thấy ở đâu thì biến động nhiệt độ, mưa hay tương tác của chúng giải thích được sự dao động năng suất.",
    "y": "«spatial patterns in the relationship between ...» — quan hệ đó mạnh yếu khác nhau tuỳ vùng, chứ không đồng nhất."
   }
  },
  {
   "id": "susceptibility-mapping",
   "term": "susceptibility mapping",
   "pos": "n",
   "vi": "lập bản đồ nguy cơ",
   "en": "producing maps of where a hazard is likely",
   "deck": "geo",
   "freq": 4,
   "ex": "Landslide susceptibility mapping is one of the most important counter measures in landslide risk reduction, as this paper will show.",
   "src": "Landslide Susceptibility Analysis Using GIS and Logistic Regression Model A Case Study In Malang, Indonesia",
   "ipa": "səˌsɛptəˈbɪləti ˈmæpɪŋ",
   "note": {
    "d": "Lập bản đồ nguy cơ sạt lở là một trong những biện pháp đối phó quan trọng nhất để giảm nhẹ rủi ro sạt lở, như bài báo này sẽ chỉ ra.",
    "y": "Chủ ngữ của câu, được xếp vào hàng biện pháp đối phó quan trọng nhất."
   }
  },
  {
   "id": "classification",
   "term": "classification",
   "pos": "n",
   "vi": "phân loại",
   "en": "sorting items or pixels into defined classes",
   "deck": "geo",
   "freq": 3,
   "ex": "We use these rooftop images as training data, develop a deep learning classification model, and estimate whether a building is poor or non-poor.",
   "src": "A Machine Learning Approach to Map the Poor and Non-Poor Buildings in Developing Countries",
   "ipa": "ˌklæsəfəˈkeɪʃən",
   "note": {
    "d": "Chúng tôi dùng những tấm ảnh mái nhà này làm dữ liệu huấn luyện, xây dựng một mô hình phân loại học sâu và ước tính xem một ngôi nhà thuộc diện nghèo hay không nghèo.",
    "y": "«a deep learning classification model» — mô hình xếp mỗi ngôi nhà vào một trong hai nhóm: nghèo hoặc không nghèo."
   }
  },
  {
   "id": "statistical-model",
   "term": "statistical model",
   "pos": "n",
   "vi": "mô hình thống kê",
   "en": "a model built from data patterns rather than physics",
   "deck": "geo",
   "freq": 3,
   "ex": "Here we develop a geo-statistical model to estimate the volume of global lakes with a surface area of at least 10 ha based on the surrounding terrain information.",
   "src": "Estimating the volume and age of water stored in global lakes using a geo-statistical approach",
   "ipa": "stəˈtɪstɪkəl ˈmɑdəl",
   "note": {
    "d": "Ở đây chúng tôi xây dựng một mô hình địa - thống kê để ước tính thể tích các hồ trên thế giới có diện tích mặt nước từ 10 ha trở lên, dựa trên thông tin địa hình xung quanh.",
    "y": "«a geo-statistical model» — mô hình thống kê có xét vị trí không gian, dùng địa hình quanh hồ để suy ra thể tích hồ."
   }
  },
  {
   "id": "temporal-resolution",
   "term": "temporal resolution",
   "pos": "n",
   "vi": "độ phân giải thời gian",
   "en": "how often the data is recorded",
   "deck": "geo",
   "freq": 3,
   "ex": "We also highlight the potential for scientific contributions in understanding the local weather and hydrological characteristics through the establishment of the high-temporal resolution observation network.",
   "src": "Development of a Hydrological Telemetry System in Bago River",
   "ipa": "ˈtɛmpərəl ˌrɛzəˈluʃən",
   "note": {
    "d": "Chúng tôi cũng nêu bật tiềm năng đóng góp khoa học trong việc hiểu rõ thời tiết và đặc trưng thuỷ văn địa phương, thông qua việc thiết lập mạng lưới quan trắc có độ phân giải thời gian cao.",
    "y": "«high-temporal resolution observation network» — mạng trạm đo dày về thời gian, ví dụ đo mỗi phút thay vì mỗi giờ."
   }
  },
  {
   "id": "uncertainty-analysis",
   "term": "uncertainty analysis",
   "pos": "n",
   "vi": "phân tích bất định",
   "en": "quantifying how unsure a result is",
   "deck": "geo",
   "freq": 3,
   "ex": "Parameter sensitivity analysis helps focus the calibration and uncertainty analysis and is used to provide statistics for goodness-of-fit.",
   "src": "SWAT: Model Use, Calibration, and Validation",
   "ipa": "ənˈsɜrtənti əˈnæləsəs",
   "note": {
    "d": "Phân tích độ nhạy của tham số giúp khoanh vùng trọng tâm cho việc hiệu chỉnh và phân tích bất định, đồng thời cung cấp các chỉ số thống kê về mức độ khớp của mô hình.",
    "y": "Đi liền calibration: hiệu chỉnh xong vẫn phải nói rõ kết quả còn bất định tới đâu."
   }
  },
  {
   "id": "bias-correction-method",
   "term": "bias correction method",
   "pos": "n",
   "vi": "phương pháp hiệu chỉnh sai lệch",
   "en": "a technique that removes systematic error from model output",
   "deck": "geo",
   "freq": 2,
   "ex": "To ensure consistency with the global (land + ocean) temperature information the bias correction method has to preserve the warming signal.",
   "src": "A trend-preserving bias correction – the ISI-MIP approach",
   "ipa": "ˈbaɪəs kərˈɛkʃən ˈmɛθəd",
   "note": {
    "d": "Để bảo đảm nhất quán với thông tin nhiệt độ toàn cầu (cả đất liền lẫn đại dương), phương pháp hiệu chỉnh sai lệch buộc phải giữ nguyên tín hiệu nóng lên.",
    "y": "«has to preserve the warming signal» — chỉnh sai lệch nhưng không được xoá mất xu thế nóng lên thật."
   }
  },
  {
   "id": "cluster",
   "term": "cluster",
   "pos": "n",
   "vi": "cụm",
   "en": "a group of points that are similar or close together",
   "deck": "geo",
   "freq": 2,
   "ex": "Based on research results desirable and tailored strategies for food security improvement in individual clusters were developed.",
   "src": "The Role of Agriculture in Ensuring Food Security in Developing Countries: Considerations in the Context of the Problem of Sustainable Food Production",
   "ipa": "ˈklʌstər",
   "note": {
    "d": "Dựa trên kết quả nghiên cứu, các chiến lược phù hợp và được thiết kế riêng cho từng cụm đã được xây dựng để cải thiện an ninh lương thực.",
    "y": "«individual clusters» — các cụm hộ hoặc cụm vùng có đặc điểm giống nhau, được phân nhóm từ dữ liệu."
   }
  },
  {
   "id": "deep-learning",
   "term": "deep learning",
   "pos": "n",
   "vi": "học sâu",
   "en": "machine learning with many-layered neural networks",
   "deck": "geo",
   "freq": 2,
   "ex": "We use these rooftop images as training data, develop a deep learning classification model, and estimate whether a building is poor or non-poor.",
   "src": "A Machine Learning Approach to Map the Poor and Non-Poor Buildings in Developing Countries",
   "ipa": "dip ˈlɜrnɪŋ",
   "note": {
    "d": "Chúng tôi dùng những tấm ảnh mái nhà này làm dữ liệu huấn luyện, xây dựng một mô hình phân loại học sâu và ước tính xem một ngôi nhà thuộc diện nghèo hay không nghèo.",
    "y": "Nhánh học máy dùng mạng nhiều lớp; ở đây học trực tiếp từ ảnh mái nhà."
   }
  },
  {
   "id": "geospatial-data",
   "term": "geospatial data",
   "pos": "n",
   "vi": "dữ liệu địa không gian",
   "en": "any data tied to a position on earth",
   "deck": "geo",
   "freq": 2,
   "ex": "MERIT Hydro improves on existing global hydrography data sets in terms of spatial coverage (between N90 and S60) and representation of small streams, mainly due to increased availability of high‐quality baseline geospatial data sets.",
   "src": "MERIT Hydro: A High‐Resolution Global Hydrography Map Based on Latest Topography Dataset",
   "ipa": "ˌdʒioʊˈspeɪʃəl ˈdeɪtə",
   "note": {
    "d": "MERIT Hydro vượt các bộ dữ liệu thuỷ văn toàn cầu hiện có về phạm vi phủ (từ 90°B tới 60°N) và về khả năng thể hiện các dòng chảy nhỏ, chủ yếu nhờ ngày càng có nhiều dữ liệu địa không gian nền chất lượng cao.",
    "y": "«high-quality baseline geospatial data sets» — dữ liệu nền gắn với toạ độ, càng tốt thì bản đồ thuỷ văn càng chính xác."
   }
  },
  {
   "id": "initial-condition",
   "term": "initial condition",
   "pos": "n",
   "vi": "điều kiện ban đầu",
   "en": "the state of a system when a simulation starts",
   "deck": "geo",
   "freq": 2,
   "ex": "In the case of ESP, the initial conditions of WEB-DHM-S are updated using real-time datasets from Radar-AMeDAS, AMeDAS and JRA55.",
   "src": "Long-range streamflow prediction using a distributed hydrological model in a snowfed watershed",
   "ipa": "ˌɪˈnɪʃəl kənˈdɪʃən",
   "note": {
    "d": "Với phương án ESP, điều kiện ban đầu của mô hình WEB-DHM-S được cập nhật bằng dữ liệu thời gian thực từ Radar-AMeDAS, AMeDAS và JRA55.",
    "y": "Trạng thái ban đầu của mô hình (độ ẩm đất, tuyết, mực nước); dự báo ngắn hạn phụ thuộc rất nhiều vào nó."
   }
  },
  {
   "id": "input-data",
   "term": "input data",
   "pos": "n",
   "vi": "dữ liệu đầu vào",
   "en": "the data fed into a model",
   "deck": "geo",
   "freq": 2,
   "ex": "The output is a 10 m resolution Enhanced DEM (EnDEM) which is able to preserve the merits of all the input data, i.e., upper mountainous region, lower flat deltaic basin, and the river bathymetry.",
   "src": "Improving River Bathymetry and Topography Representation of a Low-Lying Flat River Basin by Integrating Multiple Sourced Datasets",
   "ipa": "ˈɪnˌpʊt ˈdeɪtə",
   "note": {
    "d": "Sản phẩm đầu ra là mô hình số độ cao cải tiến (EnDEM) độ phân giải 10 m, giữ được ưu điểm của mọi nguồn dữ liệu đầu vào: vùng núi phía trên, vùng đồng bằng châu thổ phía dưới và địa hình đáy sông.",
    "y": "«preserve the merits of all the input data» — giữ được ưu điểm của mọi nguồn đầu vào, mỗi nguồn mạnh ở một địa hình."
   }
  },
  {
   "id": "input-parameter",
   "term": "input parameter",
   "pos": "n",
   "vi": "tham số đầu vào",
   "en": "a value set before a model is run",
   "deck": "geo",
   "freq": 2,
   "ex": "SWAT (Soil and Water Assessment Tool) is a comprehensive, semi-distributed river basin model that requires a large number of input parameters, which complicates model parameterization and calibration.",
   "src": "SWAT: Model Use, Calibration, and Validation",
   "ipa": "ˈɪnˌpʊt pərˈæmətər",
   "note": {
    "d": "SWAT là một mô hình lưu vực bán phân bố toàn diện, đòi hỏi rất nhiều tham số đầu vào, khiến việc gán tham số và hiệu chỉnh mô hình trở nên phức tạp.",
    "y": "«requires a large number of input parameters» — càng nhiều tham số càng khó hiệu chỉnh, đó là điểm yếu của SWAT."
   }
  },
  {
   "id": "interpolation",
   "term": "interpolation",
   "pos": "n",
   "vi": "nội suy",
   "en": "estimating values between known measurement points",
   "deck": "geo",
   "freq": 2,
   "ex": "This version provides an improved estimation of interpolation uncertainty through the calculation of a 100‐member ensemble of realizations of each daily field.",
   "src": "An Ensemble Version of the E‐OBS Temperature and Precipitation Data Sets",
   "ipa": "ˌɪˈtɜrpəˌleɪʃən",
   "note": {
    "d": "Phiên bản này ước tính độ bất định của phép nội suy tốt hơn, nhờ tính ra một tổ hợp 100 phương án hiện thực cho mỗi trường số liệu ngày.",
    "y": "Nội suy: từ số liệu tại các trạm rời rạc, tính ra giá trị cho mọi điểm trên lưới."
   }
  },
  {
   "id": "model-output",
   "term": "model output",
   "pos": "n",
   "vi": "kết quả mô hình",
   "en": "the values a model computes",
   "deck": "geo",
   "freq": 2,
   "ex": "The increased frequency of events is consistent with increases in a genesis potential index based on monthly mean global model output.",
   "src": "Downscaling CMIP5 climate models shows increased tropical cyclone activity over the 21st century",
   "ipa": "ˈmɑdəl ˈaʊtˌpʊt",
   "note": {
    "d": "Tần suất sự kiện tăng lên là phù hợp với mức tăng của chỉ số tiềm năng hình thành bão, tính từ kết quả trung bình tháng của mô hình toàn cầu.",
    "y": "«monthly mean global model output» — kết quả mô hình toàn cầu lấy trung bình tháng, dùng để tính chỉ số."
   }
  },
  {
   "id": "spatial-analysis",
   "term": "spatial analysis",
   "pos": "n",
   "vi": "phân tích không gian",
   "en": "studying patterns that depend on location",
   "deck": "geo",
   "freq": 2,
   "ex": "Then, contributions of catchment properties to N-leaching were investigated by spatial analysis using fine-scale terrain data.",
   "src": "Using GIS for assessing stream water chemistry in a forested watershed",
   "ipa": "ˈspeɪʃəl əˈnæləsəs",
   "note": {
    "d": "Sau đó, đóng góp của các đặc trưng lưu vực vào lượng đạm rửa trôi được khảo sát bằng phân tích không gian trên dữ liệu địa hình chi tiết.",
    "y": "Công cụ dùng để tìm quan hệ giữa đặc trưng lưu vực và lượng đạm rửa trôi."
   }
  },
  {
   "id": "training-data",
   "term": "training data",
   "pos": "n",
   "vi": "dữ liệu huấn luyện",
   "en": "the examples used to fit a learning model",
   "deck": "geo",
   "freq": 2,
   "ex": "We use these rooftop images as training data, develop a deep learning classification model, and estimate whether a building is poor or non-poor.",
   "src": "A Machine Learning Approach to Map the Poor and Non-Poor Buildings in Developing Countries",
   "ipa": "ˈtreɪnɪŋ ˈdeɪtə",
   "note": {
    "d": "Chúng tôi dùng những tấm ảnh mái nhà này làm dữ liệu huấn luyện, xây dựng một mô hình phân loại học sâu và ước tính xem một ngôi nhà thuộc diện nghèo hay không nghèo.",
    "y": "«use these rooftop images as training data» — dữ liệu để mô hình học; chất lượng dữ liệu này quyết định chất lượng mô hình."
   }
  },
  {
   "id": "accuracy-assessment",
   "term": "accuracy assessment",
   "pos": "n",
   "vi": "đánh giá độ chính xác",
   "en": "checking results against reference data",
   "deck": "geo",
   "freq": 1,
   "ex": "This accuracy assessment yields the best result of 78.26% mIOU for a small window size CNN, which uses spectral information only.",
   "src": "Evaluation of Different Machine Learning Methods and Deep-Learning Convolutional Neural Networks for Landslide Detection",
   "ipa": "ˈækjərəsi əˈsɛsmənt",
   "note": {
    "d": "Đánh giá độ chính xác này cho kết quả tốt nhất là 78,26% mIOU với mạng CNN dùng cửa sổ nhỏ, chỉ sử dụng thông tin phổ.",
    "y": "Chủ ngữ của yields: chính phép đánh giá đưa ra con số 78,26% mIOU."
   }
  },
  {
   "id": "distributed-model",
   "term": "distributed model",
   "pos": "n",
   "vi": "mô hình phân bố",
   "en": "a model that computes separately for each grid cell",
   "deck": "geo",
   "freq": 1,
   "ex": "In this article we discuss issues with data availability, calibration of large-scale distributed models, and outline procedures for model calibration and uncertainty analysis.",
   "src": "A continental-scale hydrology and water quality model for Europe: Calibration and uncertainty of a high-resolution large-scale SWAT model",
   "ipa": "dɪˈstrɪbjətəd ˈmɑdəl",
   "note": {
    "d": "Trong bài này, chúng tôi bàn về các vấn đề dữ liệu sẵn có, việc hiệu chỉnh mô hình phân bố quy mô lớn, và phác ra quy trình hiệu chỉnh mô hình cùng phân tích bất định.",
    "y": "«large-scale distributed models» — mô hình chia lưu vực thành nhiều ô và tính riêng từng ô, nên tham số rất nhiều."
   }
  },
  {
   "id": "extrapolate",
   "term": "extrapolate",
   "pos": "v",
   "vi": "ngoại suy",
   "en": "to extend an estimate beyond the observed range",
   "deck": "geo",
   "freq": 1,
   "ex": "We examined the simulated discharge, point snow depth, and snow cover, finding that the snow processes were highly sensitive to the individual station used with VTP for extrapolating air temperature to higher elevations, with corrected snowfall estimates differing by as much as 18%.",
   "src": "Improving Snow‐Process Modeling by Evaluating Reanalysis Vertical Temperature Profiles Using a Distributed Hydrological Model",
   "ipa": "ɛkˈstræpəˌleɪt",
   "note": {
    "d": "Chúng tôi xem xét lưu lượng mô phỏng, độ dày tuyết tại điểm đo và lớp phủ tuyết, và thấy các quá trình tuyết rất nhạy với việc chọn trạm nào để ngoại suy nhiệt độ không khí lên cao độ lớn hơn, khiến ước tính lượng tuyết rơi đã hiệu chỉnh chênh nhau tới 18%.",
    "y": "«for extrapolating air temperature to higher elevations» — ngoại suy ra ngoài khoảng có số liệu, luôn rủi ro hơn nội suy."
   }
  },
  {
   "id": "grid-cell",
   "term": "grid cell",
   "pos": "n",
   "vi": "ô lưới",
   "en": "one square unit of a raster dataset",
   "deck": "geo",
   "freq": 1,
   "ex": "The GIS model is used to allocate land demand to the most suitable grid cells, according to the different biophysical characteristics of the cells.",
   "src": "Integrating biophysical and socio-economic factors for land-use and land-cover change projection in agricultural economic regions",
   "ipa": "ɡrɪd sɛl",
   "note": {
    "d": "Mô hình GIS được dùng để phân bổ nhu cầu đất vào những ô lưới phù hợp nhất, tuỳ theo đặc điểm sinh - địa - lý khác nhau của từng ô.",
    "y": "«the most suitable grid cells» — nhu cầu đất được phân về từng ô lưới tuỳ mức phù hợp của ô đó."
   }
  },
  {
   "id": "grid-resolution",
   "term": "grid resolution",
   "pos": "n",
   "vi": "độ phân giải lưới",
   "en": "the size of each cell in a model grid",
   "deck": "geo",
   "freq": 1,
   "ex": "It is based on the estimation of flood frequency relationships at a grid resolution of 0.5 × 0.5°, using a global hydrological model with climate scenarios derived from 21 climate models, together with projections of future population.",
   "src": "The impacts of climate change on river flood risk at the global scale",
   "ipa": "ɡrɪd ˌrɛzəˈluʃən",
   "note": {
    "d": "Cách làm dựa trên việc ước tính quan hệ tần suất lũ ở độ phân giải lưới 0,5 × 0,5 độ, dùng một mô hình thuỷ văn toàn cầu với các kịch bản khí hậu rút từ 21 mô hình khí hậu, kết hợp cùng dự tính dân số tương lai.",
    "y": "«at a grid resolution of 0.5 × 0.5°» — mỗi ô khoảng 55 km ở xích đạo, đủ cho phân tích toàn cầu nhưng thô với một lưu vực."
   }
  },
  {
   "id": "model-input",
   "term": "model input",
   "pos": "n",
   "vi": "đầu vào mô hình",
   "en": "the data or parameters a model needs to run",
   "deck": "geo",
   "freq": 1,
   "ex": "When calibrating a physically based model like SWAT, it is important to remember that all model input parameters must be kept within a realistic uncertainty range and that no automatic procedure can substitute for actual physical knowledge of the watershed.",
   "src": "SWAT: Model Use, Calibration, and Validation",
   "ipa": "ˈmɑdəl ˈɪnˌpʊt",
   "note": {
    "d": "Khi hiệu chỉnh một mô hình dựa trên cơ sở vật lý như SWAT, cần nhớ rằng mọi tham số đầu vào phải nằm trong khoảng bất định hợp lý, và không quy trình tự động nào thay thế được hiểu biết thực tế về chính lưu vực đó.",
    "y": "«all model input parameters must be kept within a realistic uncertainty range» — không được chỉnh tham số bừa cho khớp số liệu."
   }
  },
  {
   "id": "model-structure",
   "term": "model structure",
   "pos": "n",
   "vi": "cấu trúc mô hình",
   "en": "how a model's components are arranged",
   "deck": "geo",
   "freq": 1,
   "ex": "Data model structures, tool functions for basin analysis, and relationships between hydrologic / hydraulic simulations and GIS applications are explained.",
   "src": "Outline of the water resources GIS application, Arc Hydro, and case studies in the United States",
   "ipa": "ˈmɑdəl ˈstrʌktʃər",
   "note": {
    "d": "Cấu trúc mô hình dữ liệu, các chức năng công cụ để phân tích lưu vực và quan hệ giữa mô phỏng thuỷ văn - thuỷ lực với ứng dụng GIS đều được giải thích.",
    "y": "«Data model structures» — cách tổ chức dữ liệu bên trong mô hình, quyết định mô hình làm được gì."
   }
  },
  {
   "id": "overlay",
   "term": "overlay",
   "pos": "v",
   "vi": "chồng lớp",
   "en": "to place map layers on top of each other for analysis",
   "deck": "geo",
   "freq": 1,
   "ex": "We also found that the most common statistical methods for landslide susceptibility modelling include logistic regression, neural network analysis, data-overlay, index-based and weight of evidence analyses, with an increasing preference towards machine learning methods in the recent years.",
   "src": "A review of statistically-based landslide susceptibility models",
   "ipa": "ˈoʊvərˌleɪ",
   "note": {
    "d": "Chúng tôi cũng thấy những phương pháp thống kê phổ biến nhất để mô hình hoá nguy cơ sạt lở gồm hồi quy logistic, phân tích mạng nơ-ron, chồng lớp dữ liệu, phương pháp theo chỉ số và phân tích trọng số bằng chứng, với xu hướng ngày càng ưa dùng các phương pháp học máy trong những năm gần đây.",
    "y": "«data-overlay» — chồng các lớp bản đồ lên nhau để tìm vùng có nhiều yếu tố nguy cơ cùng lúc."
   }
  },
  {
   "id": "raster",
   "term": "raster",
   "pos": "n",
   "vi": "dữ liệu dạng lưới ô (raster)",
   "en": "spatial data stored as a grid of cells",
   "deck": "geo",
   "freq": 1,
   "ex": "High‐resolution raster hydrography maps are a fundamental data source for many geoscience applications.",
   "src": "MERIT Hydro: A High‐Resolution Global Hydrography Map Based on Latest Topography Dataset",
   "ipa": "ˈræstər",
   "note": {
    "d": "Bản đồ thuỷ văn dạng lưới ô độ phân giải cao là nguồn dữ liệu nền tảng cho rất nhiều ứng dụng khoa học trái đất.",
    "y": "Dữ liệu chia thành lưới ô vuông, mỗi ô một giá trị; đối lập với vector là điểm, đường, vùng."
   }
  },
  {
   "id": "remote-sensing-data",
   "term": "remote sensing data",
   "pos": "n",
   "vi": "dữ liệu viễn thám",
   "en": "measurements taken from satellites or aircraft",
   "deck": "geo",
   "freq": 1,
   "ex": "Next, we discuss the advantages and the limitations of the new remote sensing data and technology for the production of geomorphological, event, seasonal, and multi-temporal inventory maps.",
   "src": "Landslide inventory maps: New tools for an old problem",
   "ipa": "rɪˈmoʊt ˈsɛnsɪŋ ˈdeɪtə",
   "note": {
    "d": "Tiếp đó, chúng tôi bàn về ưu điểm và hạn chế của dữ liệu và công nghệ viễn thám mới trong việc lập các loại bản đồ kiểm kê: theo địa mạo, theo sự kiện, theo mùa và theo nhiều thời điểm.",
    "y": "Đặt cạnh technology: bài bàn cả dữ liệu lẫn công nghệ, và nêu cả ưu lẫn nhược điểm."
   }
  },
  {
   "id": "root-mean-square-error",
   "term": "root mean square error",
   "pos": "n",
   "vi": "sai số quân phương (RMSE)",
   "en": "a common measure of average prediction error",
   "deck": "geo",
   "freq": 1,
   "ex": "Nevertheless, ERA5-Land reduces the global averaged root mean square error of the skin temperature, taking as reference MODIS data, mainly due to the contribution of coastal points where spatial resolution is important.",
   "src": "ERA5-Land: a state-of-the-art global reanalysis dataset for land applications",
   "ipa": "rut min skwɛr ˈɛrər",
   "note": {
    "d": "Dù vậy, ERA5-Land vẫn giảm được sai số quân phương trung bình toàn cầu của nhiệt độ bề mặt khi lấy số liệu MODIS làm chuẩn, chủ yếu nhờ đóng góp của các điểm ven biển, nơi độ phân giải không gian có vai trò quan trọng.",
    "y": "RMSE — sai số quân phương, phạt nặng những lần lệch lớn; càng nhỏ thì mô hình càng sát thực tế."
   }
  },
  {
   "id": "sensitivity-analysis",
   "term": "sensitivity analysis",
   "pos": "n",
   "vi": "phân tích độ nhạy",
   "en": "testing how much results change when inputs change",
   "deck": "geo",
   "freq": 1,
   "ex": "Parameter sensitivity analysis helps focus the calibration and uncertainty analysis and is used to provide statistics for goodness-of-fit.",
   "src": "SWAT: Model Use, Calibration, and Validation",
   "ipa": "ˌsɛnsɪˈtɪvɪti əˈnæləsəs",
   "note": {
    "d": "Phân tích độ nhạy của tham số giúp khoanh vùng trọng tâm cho việc hiệu chỉnh và phân tích bất định, đồng thời cung cấp các chỉ số thống kê về mức độ khớp của mô hình.",
    "y": "Xem tham số nào ảnh hưởng mạnh tới kết quả, nhờ đó biết cần hiệu chỉnh tham số nào trước."
   }
  },
  {
   "id": "spatial-data",
   "term": "spatial data",
   "pos": "n",
   "vi": "dữ liệu không gian",
   "en": "data that carries a location",
   "deck": "geo",
   "freq": 1,
   "ex": "By integrating these original survey data with objective indicators from statistical yearbooks and geographic features from multisource spatial data, key drivers were identified using Pearson correlation and random forest models.",
   "src": "Preliminary Insights into Economic Well-Being from a Geospatial Perspective: Empirical Evidence from 6 Counties in China",
   "ipa": "ˈspeɪʃəl ˈdeɪtə",
   "note": {
    "d": "Bằng cách tích hợp dữ liệu khảo sát gốc này với các chỉ tiêu khách quan từ niên giám thống kê và đặc trưng địa lý từ dữ liệu không gian đa nguồn, những tác nhân then chốt đã được xác định bằng tương quan Pearson và mô hình rừng ngẫu nhiên.",
    "y": "«multisource spatial data» — dữ liệu không gian từ nhiều nguồn, ghép cùng số liệu khảo sát và thống kê."
   }
  },
  {
   "id": "threshold",
   "term": "threshold",
   "pos": "n",
   "vi": "ngưỡng",
   "en": "the level at which something starts to happen or count",
   "deck": "geo",
   "freq": 0,
   "ex": "",
   "src": "",
   "ipa": "ˈθrɛˌʃoʊld"
  },
  {
   "id": "basin",
   "term": "basin",
   "pos": "n",
   "vi": "lưu vực",
   "en": "the whole area of land drained by a river and its tributaries",
   "deck": "hydro",
   "freq": 109,
   "ex": "Improving River Bathymetry and Topography Representation of a Low-Lying Flat River Basin by Integrating Multiple Sourced Datasets.",
   "src": "Improving River Bathymetry and Topography Representation of a Low-Lying Flat River Basin by Integrating Multiple Sourced Datasets",
   "ipa": "ˈbeɪsən",
   "note": {
    "d": "Cải thiện cách biểu diễn địa hình đáy sông và địa hình bề mặt của một lưu vực sông trũng thấp bằng cách tích hợp nhiều nguồn dữ liệu.",
    "y": "«a low-lying flat river basin» — cả cụm mô tả lưu vực trũng và bằng phẳng, nơi khó đo địa hình."
   }
  },
  {
   "id": "precipitation",
   "term": "precipitation",
   "pos": "n",
   "vi": "giáng thủy (mưa, tuyết)",
   "en": "water falling from the sky as rain, snow or hail",
   "deck": "hydro",
   "freq": 93,
   "ex": "Two complementary statistical techniques were adopted to evaluate the possible nonstationary behavior of these precipitation data.",
   "src": "Global Increasing Trends in Annual Maximum Daily Precipitation",
   "ipa": "prɪˌsɪpɪˈteɪʃən",
   "note": {
    "d": "Hai kỹ thuật thống kê bổ trợ nhau đã được dùng để đánh giá khả năng chuỗi số liệu giáng thủy này không còn ổn định theo thời gian.",
    "y": "«these precipitation data» — data ở dạng số nhiều, chỉ chuỗi số liệu mưa dùng để kiểm tra tính ổn định."
   }
  },
  {
   "id": "rainfall",
   "term": "rainfall",
   "pos": "n",
   "vi": "lượng mưa",
   "en": "the amount of rain that falls in a place over a period",
   "deck": "hydro",
   "freq": 76,
   "ex": "Rainfall-Runoff Modelling: The Primer, Second Edition is the follow-up of this popular and authoritative text, first published in 2001.",
   "src": "Rainfall‐Runoff Modelling",
   "ipa": "ˈreɪnˌfɔl",
   "note": {
    "d": "«Mô hình hoá mưa - dòng chảy: Nhập môn, tái bản lần hai» là phần tiếp nối của cuốn sách nổi tiếng và có uy tín được xuất bản lần đầu năm 2001.",
    "y": "Trong tên sách «Rainfall-Runoff Modelling» — mô hình biến lượng mưa đầu vào thành dòng chảy đầu ra."
   }
  },
  {
   "id": "hydrological",
   "term": "hydrological",
   "pos": "adj",
   "vi": "thuộc thủy văn",
   "en": "relating to the movement and distribution of water",
   "deck": "hydro",
   "freq": 67,
   "ex": "We compare ensembles of water supply and demand projections from 10 global hydrological models and six global gridded crop models.",
   "src": "Constraints and potentials of future irrigation water availability on agricultural production under climate change",
   "ipa": "ˌhaɪdrəˈlɑdʒɪkəl",
   "note": {
    "d": "Chúng tôi so sánh các tổ hợp dự tính về cung và cầu nước từ 10 mô hình thuỷ văn toàn cầu và sáu mô hình cây trồng dạng lưới toàn cầu.",
    "y": "«global hydrological models» — tính từ của hydrology, chỉ mô hình mô phỏng vòng tuần hoàn nước."
   }
  },
  {
   "id": "river-basin",
   "term": "river basin",
   "pos": "n",
   "vi": "lưu vực sông",
   "en": "the land area from which a river collects its water",
   "deck": "hydro",
   "freq": 67,
   "ex": "Improving River Bathymetry and Topography Representation of a Low-Lying Flat River Basin by Integrating Multiple Sourced Datasets.",
   "src": "Improving River Bathymetry and Topography Representation of a Low-Lying Flat River Basin by Integrating Multiple Sourced Datasets",
   "ipa": "ˈrɪvər ˈbeɪsən",
   "note": {
    "d": "Cải thiện cách biểu diễn địa hình đáy sông và địa hình bề mặt của một lưu vực sông trũng thấp bằng cách tích hợp nhiều nguồn dữ liệu.",
    "y": "Đối tượng được cải thiện cách biểu diễn trong mô hình; low-lying flat là hai tính từ mô tả nó."
   }
  },
  {
   "id": "drought",
   "term": "drought",
   "pos": "n",
   "vi": "hạn hán",
   "en": "a long period with much less water than normal",
   "deck": "hydro",
   "freq": 63,
   "ex": "Trends were most significant for southern and mountain ecoregions, coinciding with trends toward increased drought severity.",
   "src": "Large wildfire trends in the western United States, 1984–2011",
   "ipa": "draʊt",
   "note": {
    "d": "Xu thế rõ rệt nhất ở các vùng sinh thái miền nam và miền núi, trùng với xu thế hạn hán ngày càng khắc nghiệt.",
    "y": "«increased drought severity» = mức khắc nghiệt của hạn hán tăng lên; severity chỉ độ nặng chứ không phải tần suất."
   }
  },
  {
   "id": "water-scarcity",
   "term": "water scarcity",
   "pos": "n",
   "vi": "khan hiếm nước",
   "en": "a shortage of water relative to demand",
   "deck": "hydro",
   "freq": 42,
   "ex": "The number of large cities exposed to water scarcity is projected to increase from 193 to 193-284, including 10-20 megacities.",
   "src": "Future global urban water scarcity and potential solutions",
   "ipa": "ˈwɔtər ˈskɛrsɪti",
   "note": {
    "d": "Số thành phố lớn phải đối mặt với khan hiếm nước được dự tính tăng từ 193 lên 193-284, trong đó có 10-20 siêu đô thị.",
    "y": "Đối tượng phơi nhiễm; câu đo mức độ bằng số thành phố lớn và số siêu đô thị."
   }
  },
  {
   "id": "water-resources",
   "term": "water resources",
   "pos": "n",
   "vi": "tài nguyên nước",
   "en": "the water supplies available for human and ecological use",
   "deck": "hydro",
   "freq": 31,
   "ex": "Expected future population changes will, in many countries as well as globally, increase the pressure on available water resources.",
   "src": "Multimodel assessment of water scarcity under climate change",
   "ipa": "ˈwɔtər ˈrisɔrsɪz",
   "note": {
    "d": "Thay đổi dân số trong tương lai sẽ làm tăng áp lực lên nguồn tài nguyên nước sẵn có, ở nhiều quốc gia cũng như trên toàn cầu.",
    "y": "«pressure on available water resources» — áp lực lên tài nguyên nước sẵn có, do dân số thay đổi."
   }
  },
  {
   "id": "discharge",
   "term": "discharge",
   "pos": "n",
   "vi": "lưu lượng dòng chảy",
   "en": "the volume of water flowing past a point per unit of time",
   "deck": "hydro",
   "freq": 28,
   "ex": "The model was calibrated with observed discharge data for a 2011 flooding event and validated for flooding events in 2014 and 2015.",
   "src": "Consideration of the rainfall-runoff-inundation (RRI) model for flood mapping in a deltaic area of Myanmar",
   "ipa": "dɪsˈtʃɑrdʒ",
   "note": {
    "d": "Mô hình được hiệu chỉnh bằng số liệu lưu lượng thực đo của trận ngập năm 2011 và được kiểm định với các trận ngập năm 2014 và 2015.",
    "y": "Ở đây là lưu lượng nước qua mặt cắt sông, đơn vị m³/s; không phải nghĩa «xả thải»."
   }
  },
  {
   "id": "hydrological-model",
   "term": "hydrological model",
   "pos": "n",
   "vi": "mô hình thủy văn",
   "en": "a computer model that simulates how water moves through a basin",
   "deck": "hydro",
   "freq": 28,
   "ex": "We compare ensembles of water supply and demand projections from 10 global hydrological models and six global gridded crop models.",
   "src": "Constraints and potentials of future irrigation water availability on agricultural production under climate change",
   "ipa": "ˌhaɪdrəˈlɑdʒɪkəl ˈmɑdəl",
   "note": {
    "d": "Chúng tôi so sánh các tổ hợp dự tính về cung và cầu nước từ 10 mô hình thuỷ văn toàn cầu và sáu mô hình cây trồng dạng lưới toàn cầu.",
    "y": "Được đếm rõ: 10 mô hình, đặt song song với sáu mô hình cây trồng."
   }
  },
  {
   "id": "hydropower",
   "term": "hydropower",
   "pos": "n",
   "vi": "thủy điện",
   "en": "electricity generated from flowing water",
   "deck": "hydro",
   "freq": 25,
   "ex": "Hydropower development may result in water conflicts among the riparian nations, which, however, can be resolved by benefit sharing.",
   "src": "A cooperative framework for optimizing transboundary hydropower development",
   "ipa": "ˈhaɪdroʊˌpaʊr",
   "note": {
    "d": "Phát triển thuỷ điện có thể dẫn tới xung đột nguồn nước giữa các quốc gia ven sông, nhưng xung đột đó có thể hoá giải bằng chia sẻ lợi ích.",
    "y": "«Hydropower development» đứng làm chủ ngữ: chính việc phát triển thuỷ điện có thể gây xung đột nước."
   }
  },
  {
   "id": "runoff",
   "term": "runoff",
   "pos": "n",
   "vi": "dòng chảy mặt",
   "en": "rainfall that flows over the ground instead of soaking in",
   "deck": "hydro",
   "freq": 23,
   "ex": "Rainfall-Runoff Modelling: The Primer, Second Edition is the follow-up of this popular and authoritative text, first published in 2001.",
   "src": "Rainfall‐Runoff Modelling",
   "ipa": "ˈrʌˌnɔf",
   "note": {
    "d": "«Mô hình hoá mưa - dòng chảy: Nhập môn, tái bản lần hai» là phần tiếp nối của cuốn sách nổi tiếng và có uy tín được xuất bản lần đầu năm 2001.",
    "y": "Vế sau của cặp rainfall-runoff: phần nước mưa chảy tràn trên mặt đất thay vì thấm xuống."
   }
  },
  {
   "id": "watershed",
   "term": "watershed",
   "pos": "n",
   "vi": "lưu vực hứng nước; đường phân thủy",
   "en": "an area of land that drains to a single outlet point",
   "deck": "hydro",
   "freq": 21,
   "ex": "Assessment of potential impacts of climate and land use changes on stream flow: a case study of the Nam Xong watershed in Lao PDR.",
   "src": "Assessment of potential impacts of climate and land use changes on stream flow: a case study of the Nam Xong watershed in Lao PDR",
   "ipa": "ˈwɔtərˌʃɛd",
   "note": {
    "d": "Đánh giá tác động tiềm tàng của biến đổi khí hậu và biến đổi sử dụng đất lên dòng chảy sông: nghiên cứu điển hình lưu vực Nam Xong, CHDCND Lào.",
    "y": "Ở đây là toàn bộ lưu vực hứng nước của sông Nam Xong, không phải nghĩa «đường phân thuỷ»."
   }
  },
  {
   "id": "dam",
   "term": "dam",
   "pos": "n",
   "vi": "đập",
   "en": "a barrier built across a river to store or divert water",
   "deck": "hydro",
   "freq": 18,
   "ex": "Assessment of Climate Change Impact on Reservoir Inflows Using Multi Climate-Models under RCPs—The Case of Mangla Dam in Pakistan.",
   "src": "Assessment of Climate Change Impact on Reservoir Inflows Using Multi Climate-Models under RCPs—The Case of Mangla Dam in Pakistan",
   "ipa": "dæm",
   "note": {
    "d": "Đánh giá tác động của biến đổi khí hậu lên lưu lượng nước về hồ chứa bằng nhiều mô hình khí hậu theo các kịch bản RCP — trường hợp đập Mangla ở Pakistan.",
    "y": "«Mangla Dam» — tên riêng của con đập, đóng vai trò trường hợp nghiên cứu (the case of)."
   }
  },
  {
   "id": "streamflow",
   "term": "streamflow",
   "pos": "n",
   "vi": "dòng chảy sông suối",
   "en": "the flow of water in a stream channel",
   "deck": "hydro",
   "freq": 18,
   "ex": "An integrated approach to evaluate potential impact of precipitation and land-use change on streamflow in Srepok River Basin.",
   "src": "An integrated approach to evaluate potential impact of precipitation and land-use change on streamflow in Srepok River Basin",
   "ipa": "ˈstrimˌfloʊ",
   "note": {
    "d": "Một cách tiếp cận tích hợp để đánh giá tác động tiềm tàng của giáng thủy và biến đổi sử dụng đất lên dòng chảy ở lưu vực sông Srepok.",
    "y": "Đại lượng đầu ra chịu tác động; viết liền một từ, khác stream flow tách rời cũng cùng nghĩa."
   }
  },
  {
   "id": "water-availability",
   "term": "water availability",
   "pos": "n",
   "vi": "lượng nước sẵn có",
   "en": "how much water can actually be used in a place and time",
   "deck": "hydro",
   "freq": 17,
   "ex": "Both seasonal and annual mean precipitation and evaporation influence patterns of water availability impacting society and ecosystems.",
   "src": "Climate change will affect global water availability through compounding changes in seasonal precipitation and evaporation",
   "ipa": "ˈwɔtər əˌveɪləˈbɪləti",
   "note": {
    "d": "Cả lượng mưa và bốc hơi trung bình mùa lẫn trung bình năm đều chi phối cách phân bố lượng nước sẵn có, qua đó tác động tới xã hội và hệ sinh thái.",
    "y": "«patterns of water availability» = cách lượng nước sẵn có phân bố theo không gian và thời gian."
   }
  },
  {
   "id": "groundwater",
   "term": "groundwater",
   "pos": "n",
   "vi": "nước ngầm",
   "en": "water held underground in soil and rock",
   "deck": "hydro",
   "freq": 16,
   "ex": "Aquifer overexploitation could significantly impact crop production in the United States because 60% of irrigation relies on groundwater.",
   "src": "Groundwater depletion and sustainability of irrigation in the US High Plains and Central Valley",
   "ipa": "ˈɡraʊnˌdwɑtər",
   "note": {
    "d": "Khai thác quá mức tầng ngậm nước có thể ảnh hưởng lớn tới sản xuất nông nghiệp ở Mỹ, vì 60% lượng nước tưới lấy từ nước ngầm.",
    "y": "«60% of irrigation relies on groundwater» — vế giải thích vì sao khai thác quá mức lại nguy hiểm với mùa màng."
   }
  },
  {
   "id": "water-quality",
   "term": "water quality",
   "pos": "n",
   "vi": "chất lượng nước",
   "en": "how suitable water is for use, measured by its content",
   "deck": "hydro",
   "freq": 16,
   "ex": "A continental-scale hydrology and water quality model for Europe: Calibration and uncertainty of a high-resolution large-scale SWAT model.",
   "src": "A continental-scale hydrology and water quality model for Europe: Calibration and uncertainty of a high-resolution large-scale SWAT model",
   "ipa": "ˈwɔtər ˈkwɑləti",
   "note": {
    "d": "Một mô hình thuỷ văn và chất lượng nước quy mô châu lục cho châu Âu: hiệu chỉnh và độ bất định của mô hình SWAT diện rộng, phân giải cao.",
    "y": "Mô hình làm hai việc: mô phỏng thuỷ văn và chất lượng nước, ở quy mô cả châu Âu."
   }
  },
  {
   "id": "soil-erosion",
   "term": "soil erosion",
   "pos": "n",
   "vi": "xói mòn đất",
   "en": "the wearing away of soil by water or wind",
   "deck": "hydro",
   "freq": 15,
   "ex": "Different phase of soil conservation measures demonstrated the development of policies and techniques on soil erosion control.",
   "src": "SOIL EROSION, CONSERVATION, AND ECO‐ENVIRONMENT CHANGES IN THE LOESS PLATEAU OF CHINA",
   "ipa": "sɔɪl ɪˈroʊʒən",
   "note": {
    "d": "Các giai đoạn khác nhau của biện pháp bảo vệ đất cho thấy chính sách và kỹ thuật kiểm soát xói mòn đất đã tiến triển ra sao.",
    "y": "Đối tượng cần kiểm soát; chính sách và kỹ thuật là hai mặt của cùng một nỗ lực đó."
   }
  },
  {
   "id": "reservoir",
   "term": "reservoir",
   "pos": "n",
   "vi": "hồ chứa",
   "en": "an artificial lake used to store water",
   "deck": "hydro",
   "freq": 13,
   "ex": "Assessment of Climate Change Impact on Reservoir Inflows Using Multi Climate-Models under RCPs—The Case of Mangla Dam in Pakistan.",
   "src": "Assessment of Climate Change Impact on Reservoir Inflows Using Multi Climate-Models under RCPs—The Case of Mangla Dam in Pakistan",
   "ipa": "ˈrɛzəvˌwɑr",
   "note": {
    "d": "Đánh giá tác động của biến đổi khí hậu lên lưu lượng nước về hồ chứa bằng nhiều mô hình khí hậu theo các kịch bản RCP — trường hợp đập Mangla ở Pakistan.",
    "y": "«reservoir inflows» — reservoir làm định ngữ: nước chảy vào hồ chứa, không phải nước trong hồ."
   }
  },
  {
   "id": "irrigation",
   "term": "irrigation",
   "pos": "n",
   "vi": "tưới tiêu",
   "en": "supplying water to crops artificially",
   "deck": "hydro",
   "freq": 12,
   "ex": "Aquifer overexploitation could significantly impact crop production in the United States because 60% of irrigation relies on groundwater.",
   "src": "Groundwater depletion and sustainability of irrigation in the US High Plains and Central Valley",
   "ipa": "ˌɪrəˈɡeɪʃən",
   "note": {
    "d": "Khai thác quá mức tầng ngậm nước có thể ảnh hưởng lớn tới sản xuất nông nghiệp ở Mỹ, vì 60% lượng nước tưới lấy từ nước ngầm.",
    "y": "Nước tưới cho cây trồng; câu cho biết phần lớn lượng nước này lấy từ dưới đất chứ không phải từ sông."
   }
  },
  {
   "id": "catchment",
   "term": "catchment",
   "pos": "n",
   "vi": "lưu vực hứng nước",
   "en": "the area where rainfall is collected and drains to a river",
   "deck": "hydro",
   "freq": 10,
   "ex": "Then, contributions of catchment properties to N-leaching were investigated by spatial analysis using fine-scale terrain data.",
   "src": "Using GIS for assessing stream water chemistry in a forested watershed",
   "ipa": "ˈkætʃmənt",
   "note": {
    "d": "Sau đó, đóng góp của các đặc trưng lưu vực vào lượng đạm rửa trôi được khảo sát bằng phân tích không gian trên dữ liệu địa hình chi tiết.",
    "y": "«catchment properties» = các đặc trưng của lưu vực như độ dốc, thổ nhưỡng, sử dụng đất."
   }
  },
  {
   "id": "freshwater",
   "term": "freshwater",
   "pos": "n",
   "vi": "nước ngọt",
   "en": "water with very low salt content",
   "deck": "hydro",
   "freq": 10,
   "ex": "There are many regions where our freshwater resources are inadequate to meet domestic, economic development and environmental needs.",
   "src": "Water management: Current and future challenges and research directions",
   "ipa": "ˈfrɛʃˌwɔtər",
   "note": {
    "d": "Có nhiều vùng mà nguồn nước ngọt không đủ để đáp ứng cùng lúc nhu cầu sinh hoạt, phát triển kinh tế và nhu cầu môi trường.",
    "y": "«our freshwater resources are inadequate» — nước ngọt, phân biệt với nước mặn và nước lợ."
   }
  },
  {
   "id": "estuary",
   "term": "estuary",
   "pos": "n",
   "vi": "cửa sông",
   "en": "the wide mouth of a river where it meets the sea",
   "deck": "hydro",
   "freq": 9,
   "ex": "Morphological changes under the different controls often hinder the comprehension of the evolutionary processes of estuaries.",
   "src": "Large-Scale Channel Migration in the Sittang River Estuary",
   "ipa": "ˈɛstʃuˌɛri",
   "note": {
    "d": "Những thay đổi hình thái dưới các yếu tố chi phối khác nhau thường khiến ta khó hiểu được quá trình tiến hoá của vùng cửa sông.",
    "y": "«the evolutionary processes of estuaries» — cửa sông là nơi sông gặp biển, hình thái biến đổi liên tục."
   }
  },
  {
   "id": "surface-water",
   "term": "surface water",
   "pos": "n",
   "vi": "nước mặt",
   "en": "water in rivers, lakes and reservoirs, not underground",
   "deck": "hydro",
   "freq": 8,
   "ex": "It reports on consumptive use of rainwater (green WF) and ground and surface water (blue WF) and volumes of water polluted (gray WF).",
   "src": "The water footprint of humanity",
   "ipa": "ˈsɜrfəs ˈwɔtər",
   "note": {
    "d": "Báo cáo nêu lượng tiêu thụ nước mưa (dấu chân nước xanh lục), nước ngầm và nước mặt (xanh lam), cùng khối lượng nước bị ô nhiễm (xám).",
    "y": "«ground and surface water (blue WF)» — nước ngầm và nước mặt gộp lại thành dấu chân nước xanh lam."
   }
  },
  {
   "id": "hydrological-drought",
   "term": "hydrological drought",
   "pos": "n",
   "vi": "hạn thủy văn",
   "en": "a drought defined by low river flow and low storage",
   "deck": "hydro",
   "freq": 7,
   "ex": "This review also briefly touches upon the link of hydrological drought characteristics with impacts and the issues related to drought management.",
   "src": "Hydrological drought explained",
   "ipa": "ˌhaɪdrəˈlɑdʒɪkəl draʊt",
   "note": {
    "d": "Bài tổng quan này cũng điểm qua mối liên hệ giữa đặc trưng của hạn thuỷ văn với tác động của nó, cùng những vấn đề liên quan đến quản lý hạn.",
    "y": "Hạn thuỷ văn là thiếu nước ở sông hồ và nước ngầm, khác hạn khí tượng (thiếu mưa) và hạn nông nghiệp (thiếu ẩm cho cây)."
   }
  },
  {
   "id": "hydrology",
   "term": "hydrology",
   "pos": "n",
   "vi": "thuỷ văn học",
   "en": "the science of water movement on and under the land",
   "deck": "hydro",
   "freq": 7,
   "ex": "A continental-scale hydrology and water quality model for Europe: Calibration and uncertainty of a high-resolution large-scale SWAT model.",
   "src": "A continental-scale hydrology and water quality model for Europe: Calibration and uncertainty of a high-resolution large-scale SWAT model",
   "ipa": "haɪˈdrɑlədʒi",
   "note": {
    "d": "Một mô hình thuỷ văn và chất lượng nước quy mô châu lục cho châu Âu: hiệu chỉnh và độ bất định của mô hình SWAT diện rộng, phân giải cao.",
    "y": "Dạng danh từ, chỉ ngành thuỷ văn; hydrological mới là tính từ."
   }
  },
  {
   "id": "monsoon",
   "term": "monsoon",
   "pos": "n",
   "vi": "gió mùa",
   "en": "a seasonal wind bringing heavy rain to South and East Asia",
   "deck": "hydro",
   "freq": 7,
   "ex": "The Bago River Basin is a floodprone area in Myanmar, where, during the last decade, many severe floods occurred during the monsoon season, usually in July and August.",
   "src": "Application and Flood Discharge Analysis with Hydrological Model (WEB-DHM) in Bago River Basin",
   "ipa": "mɑnˈsun",
   "note": {
    "d": "Lưu vực sông Bago là vùng dễ ngập ở Myanmar, nơi trong thập kỷ qua đã xảy ra nhiều trận lũ nghiêm trọng vào mùa gió mùa, thường là tháng 7 và tháng 8.",
    "y": "«during the monsoon season» — mùa gió mùa; câu nói rõ luôn là tháng 7 và tháng 8."
   }
  },
  {
   "id": "sub-basin",
   "term": "sub-basin",
   "pos": "n",
   "vi": "tiểu lưu vực",
   "en": "a smaller drainage unit inside a river basin",
   "deck": "hydro",
   "freq": 7,
   "ex": "An optimization framework is proposed for a transboundary sub-basin following a cooperative game theoretical approach.",
   "src": "A cooperative framework for optimizing transboundary hydropower development",
   "ipa": "ˈsʌbˈbeɪsən",
   "note": {
    "d": "Một khung tối ưu hoá được đề xuất cho tiểu lưu vực xuyên biên giới, theo hướng tiếp cận lý thuyết trò chơi hợp tác.",
    "y": "«a transboundary sub-basin» — tiểu lưu vực nằm vắt qua biên giới, nên phải tối ưu theo hướng hợp tác."
   }
  },
  {
   "id": "water-consumption",
   "term": "water consumption",
   "pos": "n",
   "vi": "lượng nước tiêu thụ",
   "en": "water that is used up and not returned to the source",
   "deck": "hydro",
   "freq": 7,
   "ex": "Despite some spread in model projections, irrigation water consumption is generally projected to increase with higher global mean temperatures.",
   "src": "Global water resources affected by human interventions and climate change",
   "ipa": "ˈwɔtər kənˈsʌmpʃən",
   "note": {
    "d": "Dù các mô hình dự tính còn phân tán, lượng nước tưới tiêu thụ nhìn chung vẫn được dự tính sẽ tăng khi nhiệt độ trung bình toàn cầu tăng cao hơn.",
    "y": "«irrigation water consumption» = lượng nước tưới bị tiêu thụ thật sự, khác với lượng nước lấy đi."
   }
  },
  {
   "id": "water-demand",
   "term": "water demand",
   "pos": "n",
   "vi": "nhu cầu nước",
   "en": "the amount of water users need in a period",
   "deck": "hydro",
   "freq": 7,
   "ex": "Urbanization and climate change are together exacerbating water scarcity-where water demand exceeds availability-for the world's cities.",
   "src": "Future global urban water scarcity and potential solutions",
   "ipa": "ˈwɔtər dɪˈmænd",
   "note": {
    "d": "Đô thị hoá và biến đổi khí hậu đang cùng nhau làm trầm trọng thêm tình trạng khan hiếm nước — khi nhu cầu vượt quá lượng nước có được — tại các thành phố trên thế giới.",
    "y": "«where water demand exceeds availability» — định nghĩa ngắn gọn của khan hiếm nước ngay trong câu."
   }
  },
  {
   "id": "water-flow",
   "term": "water flow",
   "pos": "n",
   "vi": "dòng chảy",
   "en": "the movement of water through a channel or system",
   "deck": "hydro",
   "freq": 7,
   "ex": "This paper attempts to review the progress in observations and theoretical reasoning about preferential soil water flows over the intervening period.",
   "src": "Macropores and water flow in soils revisited",
   "ipa": "ˈwɔtər floʊ",
   "note": {
    "d": "Bài báo cố gắng điểm lại tiến bộ về quan trắc và lập luận lý thuyết đối với dòng nước ưu tiên trong đất suốt quãng thời gian xen giữa đó.",
    "y": "«preferential soil water flows» — dòng nước chảy ưu tiên theo khe nứt trong đất thay vì thấm đều."
   }
  },
  {
   "id": "dam-operation",
   "term": "dam operation",
   "pos": "n",
   "vi": "vận hành đập",
   "en": "the way water is released from or stored in a dam",
   "deck": "hydro",
   "freq": 6,
   "ex": "However, the impact of dam operation on flood hazards and associated damage was not considered well in previous assessments of flood risk.",
   "src": "Quantitative assessment of flood risk with evaluation of the effectiveness of dam operation for flood control: A case of the Bago River Basin of Myanmar",
   "ipa": "dæm ˌɑpərˈeɪʃən",
   "note": {
    "d": "Tuy nhiên, ảnh hưởng của việc vận hành đập tới hiểm hoạ lũ và thiệt hại kèm theo lại chưa được xét kỹ trong các đánh giá rủi ro lũ trước đây.",
    "y": "Việc đóng mở cửa xả; câu chỉ ra đây là khoảng trống mà các đánh giá rủi ro lũ trước đây bỏ sót."
   }
  },
  {
   "id": "downstream",
   "term": "downstream",
   "pos": "adv",
   "vi": "hạ lưu",
   "en": "toward the mouth of a river",
   "deck": "hydro",
   "freq": 6,
   "ex": "However, the dry flow in April was found to reduce for the future climate and the reduction might be greater in Sekong and downstream of Srepok.",
   "src": "Assessment of Future Rainfall Change and Its Impact on Water Resources in the Mekong River 3S Sub-Basins",
   "ipa": "ˈdaʊnˈstrim",
   "note": {
    "d": "Tuy nhiên, dòng chảy kiệt tháng 4 được thấy sẽ giảm trong khí hậu tương lai, và mức giảm có thể lớn hơn ở Sekong cùng vùng hạ lưu Srepok.",
    "y": "«downstream of Srepok» — vùng hạ lưu; đối lập với upstream, cả hai đều dùng như trạng từ lẫn tính từ."
   }
  },
  {
   "id": "nutrient",
   "term": "nutrient",
   "pos": "n",
   "vi": "chất dinh dưỡng",
   "en": "a substance such as nitrogen that feeds plants but can pollute water",
   "deck": "hydro",
   "freq": 6,
   "ex": "Species diversity is a major determinant of ecosystem productivity, stability, invasibility, and nutrient dynamics.",
   "src": "Biodiversity and Ecosystem Functioning",
   "ipa": "ˈnutriənt",
   "note": {
    "d": "Đa dạng loài là yếu tố quyết định chính đối với năng suất, tính ổn định, khả năng bị xâm lấn và động thái dinh dưỡng của hệ sinh thái.",
    "y": "«nutrient dynamics» — động thái dinh dưỡng, tức cách chất dinh dưỡng luân chuyển trong hệ sinh thái."
   }
  },
  {
   "id": "rainfall-intensity",
   "term": "rainfall intensity",
   "pos": "n",
   "vi": "cường độ mưa",
   "en": "how much rain falls per unit of time",
   "deck": "hydro",
   "freq": 6,
   "ex": "The goal of precipitation nowcasting is to predict the future rainfall intensity in a local region over a relatively short period of time.",
   "src": "Convolutional LSTM Network: A Machine Learning Approach for Precipitation Nowcasting",
   "ipa": "ˈreɪnˌfɔl ɪnˈtɛnsəti",
   "note": {
    "d": "Mục tiêu của dự báo mưa cực ngắn hạn là dự đoán cường độ mưa sắp tới tại một khu vực hẹp trong khoảng thời gian tương đối ngắn.",
    "y": "Cường độ mưa (mm/giờ), thứ quyết định có gây ngập chớp nhoáng hay không."
   }
  },
  {
   "id": "soil-moisture",
   "term": "soil moisture",
   "pos": "n",
   "vi": "độ ẩm đất",
   "en": "the water held in the soil layer",
   "deck": "hydro",
   "freq": 6,
   "ex": "There has been also a long-term warming trend in the Eastern Mediterranean, adding to the drawdown of soil moisture.",
   "src": "Climate change in the Fertile Crescent and implications of the recent Syrian drought",
   "ipa": "sɔɪl ˈmɔɪstʃər",
   "note": {
    "d": "Cũng đã xuất hiện một xu thế nóng lên dài hạn ở Đông Địa Trung Hải, khiến độ ẩm đất càng bị rút cạn thêm.",
    "y": "«the drawdown of soil moisture» — độ ẩm đất bị rút cạn, hệ quả trực tiếp của nóng lên."
   }
  },
  {
   "id": "water-management",
   "term": "water management",
   "pos": "n",
   "vi": "quản lý nước",
   "en": "planning how water is stored, shared and used",
   "deck": "hydro",
   "freq": 6,
   "ex": "Our results indicate that water management in the middle part of the Nam Xong watershed should be carefully considered.",
   "src": "Assessment of potential impacts of climate and land use changes on stream flow: a case study of the Nam Xong watershed in Lao PDR",
   "ipa": "ˈwɔtər ˈmænədʒmənt",
   "note": {
    "d": "Kết quả của chúng tôi cho thấy việc quản lý nước ở phần giữa lưu vực Nam Xong cần được cân nhắc kỹ lưỡng.",
    "y": "«water management in the middle part of the watershed» — quản lý nước ở đoạn giữa lưu vực, nơi kết quả cho thấy có vấn đề."
   }
  },
  {
   "id": "blue-water",
   "term": "blue water",
   "pos": "n",
   "vi": "nước xanh lam (nước mặt và nước ngầm)",
   "en": "water in rivers, lakes and aquifers",
   "deck": "hydro",
   "freq": 5,
   "ex": "We assess blue water scarcity globally at a high spatial resolution on a monthly basis.",
   "src": "Four billion people facing severe water scarcity",
   "ipa": "blu ˈwɔtər",
   "note": {
    "d": "Chúng tôi đánh giá tình trạng khan hiếm nước xanh lam trên toàn cầu ở độ phân giải không gian cao và theo từng tháng.",
    "y": "Nước xanh lam là nước mặt và nước ngầm dùng được, phân biệt với nước xanh lục là nước mưa trong đất."
   }
  },
  {
   "id": "drinking-water",
   "term": "drinking water",
   "pos": "n",
   "vi": "nước sinh hoạt, nước uống",
   "en": "water that is safe for people to drink",
   "deck": "hydro",
   "freq": 5,
   "ex": "Noncompliance, defined as drinking water that was not boiled, was 5% after the routine incident and 29.3% after the floods.",
   "src": "International Journal Of Environmental Research And Public Health",
   "ipa": "ˈdrɪŋkɪŋ ˈwɔtər",
   "note": {
    "d": "Tỉ lệ không tuân thủ — định nghĩa là uống nước chưa đun sôi — là 5% sau sự cố thông thường và 29,3% sau các trận lũ.",
    "y": "Nước để uống; câu đo tỉ lệ người vẫn uống nước chưa đun sau lũ, một chỉ báo nguy cơ dịch bệnh."
   }
  },
  {
   "id": "recharge",
   "term": "recharge",
   "pos": "n",
   "vi": "bổ cập nước ngầm",
   "en": "water soaking down to refill an aquifer",
   "deck": "hydro",
   "freq": 5,
   "ex": "The Central Valley is a more dynamic, engineered system, with north/south diversions of surface water since the 1950s contributing to ~7× higher recharge.",
   "src": "Groundwater depletion and sustainability of irrigation in the US High Plains and Central Valley",
   "ipa": "riˈtʃɑrdʒ",
   "note": {
    "d": "Thung lũng Trung tâm là một hệ thống động và nhân tạo hơn, với việc chuyển nước mặt bắc - nam từ thập niên 1950 khiến lượng bổ cập nước ngầm cao gấp khoảng 7 lần.",
    "y": "Lượng nước thấm xuống bổ sung cho tầng ngậm nước; ở đây tăng 7 lần nhờ chuyển nước nhân tạo."
   }
  },
  {
   "id": "river-network",
   "term": "river network",
   "pos": "n",
   "vi": "mạng lưới sông",
   "en": "the connected pattern of channels in a basin",
   "deck": "hydro",
   "freq": 5,
   "ex": "Relative error in the drainage area was <0.05 for 90% of Global Runoff Data Center (GRDC) gauges, confirming the accuracy of the delineated global river networks.",
   "src": "MERIT Hydro: A High‐Resolution Global Hydrography Map Based on Latest Topography Dataset",
   "ipa": "ˈrɪvər ˈnɛˌtwɜrk",
   "note": {
    "d": "Sai số tương đối của diện tích lưu vực nhỏ hơn 0,05 ở 90% số trạm thuộc Trung tâm Dữ liệu Dòng chảy Toàn cầu (GRDC), khẳng định độ chính xác của mạng lưới sông toàn cầu đã vạch ra.",
    "y": "«the delineated global river networks» — mạng lưới sông vạch tự động từ DEM, được kiểm chứng bằng số liệu trạm thật."
   }
  },
  {
   "id": "water-balance",
   "term": "water balance",
   "pos": "n",
   "vi": "cân bằng nước",
   "en": "the accounting of water coming in, going out and being stored",
   "deck": "hydro",
   "freq": 5,
   "ex": "TerraClimate, a high-resolution global dataset of monthly climate and climatic water balance from 1958–2015.",
   "src": "TerraClimate, a high-resolution global dataset of monthly climate and climatic water balance from 1958–2015",
   "ipa": "ˈwɔtər ˈbæləns",
   "note": {
    "d": "TerraClimate — bộ dữ liệu toàn cầu độ phân giải cao về khí hậu tháng và cân bằng nước khí hậu, giai đoạn 1958-2015.",
    "y": "Cân bằng nước: so lượng nước vào (mưa) với lượng ra (bốc hơi, dòng chảy) để biết còn dư hay thiếu."
   }
  },
  {
   "id": "water-resource-management",
   "term": "water resource management",
   "pos": "n",
   "vi": "quản lý tài nguyên nước",
   "en": "coordinated planning of water use across a basin",
   "deck": "hydro",
   "freq": 5,
   "ex": "Data Communication for Efficient Water Resource Management Among Multiple Stakeholders – A Case Study in the Bago River Basin, Myanmar –.",
   "src": "Data Communication for Efficient Water Resource Management Among Multiple Stakeholders – A Case Study in the Bago River Basin, Myanmar –",
   "ipa": "ˈwɔtər ˈrisɔrs ˈmænədʒmənt",
   "note": {
    "d": "Truyền thông dữ liệu phục vụ quản lý tài nguyên nước hiệu quả giữa nhiều bên liên quan — nghiên cứu điển hình tại lưu vực sông Bago, Myanmar.",
    "y": "Mục đích của việc truyền thông dữ liệu; efficient cho biết tiêu chí đánh giá là hiệu quả."
   }
  },
  {
   "id": "water-supply",
   "term": "water supply",
   "pos": "n",
   "vi": "nguồn cấp nước",
   "en": "the water made available to households, farms or industry",
   "deck": "hydro",
   "freq": 5,
   "ex": "We compare ensembles of water supply and demand projections from 10 global hydrological models and six global gridded crop models.",
   "src": "Constraints and potentials of future irrigation water availability on agricultural production under climate change",
   "ipa": "ˈwɔtər səˈplaɪ",
   "note": {
    "d": "Chúng tôi so sánh các tổ hợp dự tính về cung và cầu nước từ 10 mô hình thuỷ văn toàn cầu và sáu mô hình cây trồng dạng lưới toàn cầu.",
    "y": "«water supply and demand projections» — supply đi cặp với demand: dự tính cả nguồn cấp lẫn nhu cầu nước."
   }
  },
  {
   "id": "aquifer",
   "term": "aquifer",
   "pos": "n",
   "vi": "tầng ngậm nước",
   "en": "underground rock layer that holds groundwater",
   "deck": "hydro",
   "freq": 4,
   "ex": "Aquifer overexploitation could significantly impact crop production in the United States because 60% of irrigation relies on groundwater.",
   "src": "Groundwater depletion and sustainability of irrigation in the US High Plains and Central Valley",
   "ipa": "ˈækwəfər",
   "note": {
    "d": "Khai thác quá mức tầng ngậm nước có thể ảnh hưởng lớn tới sản xuất nông nghiệp ở Mỹ, vì 60% lượng nước tưới lấy từ nước ngầm.",
    "y": "«Aquifer overexploitation» — tầng đất đá chứa nước ngầm; overexploitation là bơm nhanh hơn tốc độ nước bổ sung lại."
   }
  },
  {
   "id": "channel-migration",
   "term": "channel migration",
   "pos": "n",
   "vi": "sự dịch chuyển lòng sông",
   "en": "the sideways movement of a river channel over time",
   "deck": "hydro",
   "freq": 4,
   "ex": "We identify an autocyclic process in a sedimentary system driving large-scale channel migration in decadal to multidecadal cycles.",
   "src": "Large-Scale Channel Migration in the Sittang River Estuary",
   "ipa": "ˈtʃænəl maɪˈɡreɪʃən",
   "note": {
    "d": "Chúng tôi xác định được một quá trình tự tuần hoàn trong hệ trầm tích, gây ra dịch chuyển lòng sông quy mô lớn theo chu kỳ hàng chục năm.",
    "y": "Hệ quả của quá trình tự tuần hoàn; large-scale cho biết quy mô dịch chuyển rất lớn."
   }
  },
  {
   "id": "drainage",
   "term": "drainage",
   "pos": "n",
   "vi": "sự thoát nước",
   "en": "the removal of excess water from land or a channel",
   "deck": "hydro",
   "freq": 4,
   "ex": "The results showed that the natural drainage network plays a significant role in determining landslide occurrence and distribution.",
   "src": "Landslide susceptibility mapping of the Sera River Basin using logistic regression model",
   "ipa": "ˈdreɪnədʒ",
   "note": {
    "d": "Kết quả cho thấy mạng lưới thoát nước tự nhiên đóng vai trò quan trọng trong việc quyết định nơi xảy ra và cách phân bố của sạt lở đất.",
    "y": "«natural drainage network» = mạng lưới thoát nước tự nhiên, tức hệ khe suối sẵn có trên sườn dốc."
   }
  },
  {
   "id": "free-flowing",
   "term": "free-flowing",
   "pos": "adj",
   "vi": "chảy tự do (không bị chặn)",
   "en": "flowing without being blocked by dams or barriers",
   "deck": "hydro",
   "freq": 4,
   "ex": "Free-flowing rivers (FFRs) support diverse, complex and dynamic ecosystems globally, providing important societal and economic services.",
   "src": "Mapping the world’s free-flowing rivers",
   "ipa": "ˈfriˈfloʊɪŋ",
   "note": {
    "d": "Những dòng sông chảy tự do nuôi dưỡng các hệ sinh thái đa dạng, phức tạp và luôn biến động trên khắp thế giới, đồng thời mang lại nhiều dịch vụ quan trọng cho xã hội và kinh tế.",
    "y": "«Free-flowing rivers» — sông chưa bị đập hay công trình chặn dòng, nên phù sa và cá vẫn đi lại được."
   }
  },
  {
   "id": "hydraulic-model",
   "term": "hydraulic model",
   "pos": "n",
   "vi": "mô hình thuỷ lực",
   "en": "model that computes water depth and velocity in a channel",
   "deck": "hydro",
   "freq": 4,
   "ex": "The flood inundation map of the Bago river basin was developed by coupling a hydrological and hydraulic model with geographical information systems.",
   "src": "Flood Hazard Assessment of Bago River Basin, Myanmar",
   "ipa": "haɪˈdrɔlɪk ˈmɑdəl",
   "note": {
    "d": "Bản đồ ngập lũ lưu vực sông Bago được xây dựng bằng cách ghép mô hình thuỷ văn và mô hình thuỷ lực với hệ thống thông tin địa lý.",
    "y": "Ghép sau mô hình thuỷ văn: thuỷ văn cho biết bao nhiêu nước, thuỷ lực cho biết nước chảy và dâng thế nào."
   }
  },
  {
   "id": "reservoir-inflow",
   "term": "reservoir inflow",
   "pos": "n",
   "vi": "lưu lượng nước về hồ",
   "en": "the water entering a reservoir from upstream",
   "deck": "hydro",
   "freq": 4,
   "ex": "Assessment of Climate Change Impact on Reservoir Inflows Using Multi Climate-Models under RCPs—The Case of Mangla Dam in Pakistan.",
   "src": "Assessment of Climate Change Impact on Reservoir Inflows Using Multi Climate-Models under RCPs—The Case of Mangla Dam in Pakistan",
   "ipa": "ˈrɛzəvˌwɑr ˈɪnˌfloʊ",
   "note": {
    "d": "Đánh giá tác động của biến đổi khí hậu lên lưu lượng nước về hồ chứa bằng nhiều mô hình khí hậu theo các kịch bản RCP — trường hợp đập Mangla ở Pakistan.",
    "y": "Đại lượng được đánh giá tác động; ở dạng số nhiều vì tính cho nhiều mô hình và nhiều kịch bản."
   }
  },
  {
   "id": "sediment",
   "term": "sediment",
   "pos": "n",
   "vi": "trầm tích, bùn cát",
   "en": "solid material carried and deposited by water",
   "deck": "hydro",
   "freq": 4,
   "ex": "The estuary morphology is largely determined by net sediment transport by two-way tidal flows, but the hydrodynamics also depends on the morphology of the tidal channels.",
   "src": "Large-Scale Channel Migration in the Sittang River Estuary",
   "ipa": "ˈsɛdəmənt",
   "note": {
    "d": "Hình thái cửa sông phần lớn do lượng bùn cát vận chuyển thực của dòng triều hai chiều quyết định, nhưng ngược lại thuỷ động lực cũng phụ thuộc vào hình thái của các lạch triều.",
    "y": "«net sediment transport» — lượng bùn cát vận chuyển thực, tức phần chênh giữa dòng vào và dòng ra."
   }
  },
  {
   "id": "water-cycle",
   "term": "water cycle",
   "pos": "n",
   "vi": "vòng tuần hoàn nước",
   "en": "the circulation of water through evaporation, rain and runoff",
   "deck": "hydro",
   "freq": 4,
   "ex": "Here, analyses of climate change and direct human impacts on the terrestrial water cycle are presented and compared using a multimodel approach.",
   "src": "Global water resources affected by human interventions and climate change",
   "ipa": "ˈwɔtər ˈsaɪkəl",
   "note": {
    "d": "Ở đây, các phân tích về biến đổi khí hậu và tác động trực tiếp của con người lên vòng tuần hoàn nước lục địa được trình bày và so sánh bằng cách tiếp cận đa mô hình.",
    "y": "«the terrestrial water cycle» — vòng tuần hoàn nước phần trên lục địa, chịu tác động của cả khí hậu lẫn con người."
   }
  },
  {
   "id": "water-footprint",
   "term": "water footprint",
   "pos": "n",
   "vi": "dấu chân nước",
   "en": "the total water used to produce a good or service",
   "deck": "hydro",
   "freq": 4,
   "ex": "This study quantifies and maps the water footprint (WF) of humanity at a high spatial resolution.",
   "src": "The water footprint of humanity",
   "ipa": "ˈwɔtər ˈfʊtˌprɪnt",
   "note": {
    "d": "Nghiên cứu này định lượng và lập bản đồ dấu chân nước của nhân loại ở độ phân giải không gian cao.",
    "y": "Dấu chân nước: tổng lượng nước cần để làm ra hàng hoá và dịch vụ mà một người tiêu dùng."
   }
  },
  {
   "id": "water-level",
   "term": "water level",
   "pos": "n",
   "vi": "mực nước",
   "en": "the height of the water surface at a point",
   "deck": "hydro",
   "freq": 4,
   "ex": "In many parts of Europe groundwater quantity, and in particular quality, have come under sever degradation and water levels have decreased resulting in negative environmental impacts.",
   "src": "A continental-scale hydrology and water quality model for Europe: Calibration and uncertainty of a high-resolution large-scale SWAT model",
   "ipa": "ˈwɔtər ˈlɛvəl",
   "note": {
    "d": "Ở nhiều nơi tại châu Âu, trữ lượng nước ngầm và nhất là chất lượng nước ngầm đã suy thoái nghiêm trọng, mực nước hạ xuống và kéo theo những tác động xấu tới môi trường.",
    "y": "«water levels have decreased» — mực nước ngầm hạ xuống, hệ quả của khai thác quá mức."
   }
  },
  {
   "id": "water-withdrawal",
   "term": "water withdrawal",
   "pos": "n",
   "vi": "lượng nước khai thác",
   "en": "water taken from a river or aquifer for human use",
   "deck": "hydro",
   "freq": 4,
   "ex": "Generated data from the WII shows very low percentage of water withdrawals in several districts with respect to available resources.",
   "src": "Utilization of a GIS-Based Water Infrastructure Inventory for Water Resources Assessment at Local Level: A Case Study in Mountainous Area of Vietnam",
   "ipa": "ˈwɔtər wɪðˈdrɔəl",
   "note": {
    "d": "Dữ liệu do WII tạo ra cho thấy tỉ lệ nước khai thác ở một số huyện là rất thấp so với lượng tài nguyên sẵn có.",
    "y": "Lượng nước lấy khỏi sông, hồ hay tầng ngầm để dùng; tỉ lệ thấp nghĩa là còn dư địa khai thác."
   }
  },
  {
   "id": "evapotranspiration",
   "term": "evapotranspiration",
   "pos": "n",
   "vi": "bốc thoát hơi nước",
   "en": "water lost to the air from soil evaporation and plant transpiration",
   "deck": "hydro",
   "freq": 3,
   "ex": "We validated spatiotemporal aspects of TerraClimate using annual temperature, precipitation, and calculated reference evapotranspiration from station data, as well as annual runoff from streamflow gauges.",
   "src": "TerraClimate, a high-resolution global dataset of monthly climate and climatic water balance from 1958–2015",
   "ipa": "ɪˌvæpoʊˌtrænspɪˈreɪʃən",
   "note": {
    "d": "Chúng tôi kiểm chứng các khía cạnh không - thời gian của TerraClimate bằng nhiệt độ và lượng mưa năm, bốc thoát hơi nước tham chiếu tính từ số liệu trạm, cùng dòng chảy năm từ các trạm đo lưu lượng.",
    "y": "Ghép của evaporation (bốc hơi từ đất, mặt nước) và transpiration (thoát hơi qua lá cây)."
   }
  },
  {
   "id": "snowmelt",
   "term": "snowmelt",
   "pos": "n",
   "vi": "nước tan từ tuyết",
   "en": "water released when snow melts, often causing spring floods",
   "deck": "hydro",
   "freq": 3,
   "ex": "The changes in flows are generally negative for summer and autumn due to early snowmelt from an increase in temperature.",
   "src": "The Impact of Climate Change on Reservoir Inflows Using Multi Climate-Model under RCPs’ Including Extreme Events—A Case of Mangla Dam, Pakistan",
   "ipa": "ˈsnoʊˌmɛlt",
   "note": {
    "d": "Mức thay đổi dòng chảy nhìn chung là âm vào mùa hè và mùa thu, do tuyết tan sớm hơn khi nhiệt độ tăng.",
    "y": "«early snowmelt from an increase in temperature» — tuyết tan sớm khiến dòng chảy dồn về mùa xuân, để lại mùa hè thiếu nước."
   }
  },
  {
   "id": "ungauged",
   "term": "ungauged",
   "pos": "adj",
   "vi": "không có trạm quan trắc",
   "en": "having no measuring station, so no observed data",
   "deck": "hydro",
   "freq": 3,
   "ex": "However, the rainfall observation network is still limited in number and extent, so satellite rainfall products have been shown to supplement observations over the ungauged areas.",
   "src": "Preliminary Assessment of GPM Satellite Rainfall over Myanmar",
   "ipa": "ənˈɡeɪdʒd",
   "note": {
    "d": "Tuy nhiên, mạng lưới trạm đo mưa vẫn còn ít về số lượng lẫn phạm vi, nên sản phẩm mưa vệ tinh đã cho thấy có thể bổ khuyết cho quan trắc ở những vùng không có trạm.",
    "y": "«the ungauged areas» — vùng không có trạm đo; tiền tố un- gắn với gauge là đo bằng thiết bị."
   }
  },
  {
   "id": "virtual-water",
   "term": "virtual water",
   "pos": "n",
   "vi": "nước ảo",
   "en": "the water embedded in a traded product",
   "deck": "hydro",
   "freq": 3,
   "ex": "International virtual water flows are estimated based on trade in agricultural and industrial commodities.",
   "src": "The water footprint of humanity",
   "ipa": "ˈvɜrtʃuəl ˈwɔtər",
   "note": {
    "d": "Dòng nước ảo giữa các quốc gia được ước tính dựa trên hoạt động thương mại hàng nông sản và hàng công nghiệp.",
    "y": "Nước ảo là lượng nước ẩn trong hàng hoá; nhập khẩu lúa gạo cũng là nhập khẩu nước một cách gián tiếp."
   }
  },
  {
   "id": "water-infrastructure",
   "term": "water infrastructure",
   "pos": "n",
   "vi": "hạ tầng cấp thoát nước",
   "en": "dams, pipes and canals that move and store water",
   "deck": "hydro",
   "freq": 3,
   "ex": "Utilization of a GIS-Based Water Infrastructure Inventory for Water Resources Assessment at Local Level: A Case Study in Mountainous Area of Vietnam.",
   "src": "Utilization of a GIS-Based Water Infrastructure Inventory for Water Resources Assessment at Local Level: A Case Study in Mountainous Area of Vietnam",
   "ipa": "ˈwɔtər ˌɪnfrəˈstrʌktʃər",
   "note": {
    "d": "Sử dụng bộ kiểm kê hạ tầng cấp nước trên nền GIS để đánh giá tài nguyên nước ở cấp địa phương: nghiên cứu điển hình tại vùng núi Việt Nam.",
    "y": "«a GIS-Based Water Infrastructure Inventory» — kiểm kê công trình cấp nước, đặt đúng vị trí trên bản đồ."
   }
  },
  {
   "id": "dry-season",
   "term": "dry season",
   "pos": "n",
   "vi": "mùa khô",
   "en": "the months of the year with little rainfall",
   "deck": "hydro",
   "freq": 2,
   "ex": "A hydrological model was applied to estimate daily stream flow, 222 m3/s in the wet season and 32 m3/s in the dry season, for the entire Nam Xong watershed.",
   "src": "Assessment of potential impacts of climate and land use changes on stream flow: a case study of the Nam Xong watershed in Lao PDR",
   "ipa": "draɪ ˈsizən",
   "note": {
    "d": "Một mô hình thuỷ văn đã được áp dụng để ước tính lưu lượng ngày cho toàn lưu vực Nam Xong: 222 m³/s vào mùa mưa và 32 m³/s vào mùa khô.",
    "y": "Đặt cạnh wet season với hai con số chênh nhau gần 7 lần, cho thấy chế độ dòng chảy rất phân mùa."
   }
  },
  {
   "id": "low-flow",
   "term": "low flow",
   "pos": "n",
   "vi": "dòng chảy kiệt",
   "en": "the smallest discharge in a river, typical of dry periods",
   "deck": "hydro",
   "freq": 2,
   "ex": "The projected future rainfall was then applied to the calibrated hydrological model to determine potential changes in streamflow in the next 30 years, especially in critical low flow conditions.",
   "src": "Assessment of Future Rainfall Change and Its Impact on Water Resources in the Mekong River 3S Sub-Basins",
   "ipa": "loʊ floʊ",
   "note": {
    "d": "Lượng mưa tương lai dự tính sau đó được đưa vào mô hình thuỷ văn đã hiệu chỉnh để xác định thay đổi có thể xảy ra của dòng chảy trong 30 năm tới, đặc biệt trong điều kiện dòng chảy kiệt nguy cấp.",
    "y": "«critical low flow conditions» — dòng chảy kiệt nguy cấp, lúc sông cạn nhất và cạnh tranh nước gay gắt nhất."
   }
  },
  {
   "id": "river-discharge",
   "term": "river discharge",
   "pos": "n",
   "vi": "lưu lượng sông",
   "en": "the volume of water passing a river cross-section per second",
   "deck": "hydro",
   "freq": 2,
   "ex": "The simulation shows that the Bago River discharge will increase for all three future periods under both scenarios.",
   "src": "Projecting the Impact of Climate Change on Temperature, Precipitation, and Discharge in the Bago River Basin",
   "ipa": "ˈrɪvər dɪsˈtʃɑrdʒ",
   "note": {
    "d": "Mô phỏng cho thấy lưu lượng sông Bago sẽ tăng trong cả ba thời kỳ tương lai, ở cả hai kịch bản.",
    "y": "«the Bago River discharge will increase» — lưu lượng sông, kết quả chính mà mô phỏng đưa ra."
   }
  },
  {
   "id": "tributary",
   "term": "tributary",
   "pos": "n",
   "vi": "phụ lưu, nhánh sông",
   "en": "a smaller river that flows into a larger one",
   "deck": "hydro",
   "freq": 2,
   "ex": "The study area is the Srepok River basin, a tributary sub-basin of the Mekong River.",
   "src": "An integrated approach to evaluate potential impact of precipitation and land-use change on streamflow in Srepok River Basin",
   "ipa": "ˈtrɪbjəˌtɛri",
   "note": {
    "d": "Khu vực nghiên cứu là lưu vực sông Srepok, một tiểu lưu vực nhánh của sông Mê Kông.",
    "y": "«a tributary sub-basin of the Mekong River» — Srepok là nhánh đổ vào sông Mê Kông, không phải dòng chính."
   }
  },
  {
   "id": "upstream",
   "term": "upstream",
   "pos": "adv",
   "vi": "thượng lưu",
   "en": "toward the source of a river",
   "deck": "hydro",
   "freq": 2,
   "ex": "Upstream of the 2011 grounding line positions, we find no major bed obstacle that would prevent the glaciers from further retreat and draw down the entire basin.",
   "src": "Widespread, rapid grounding line retreat of Pine Island, Thwaites, Smith, and Kohler glaciers, West Antarctica, from 1992 to 2011",
   "ipa": "ˈʌpˈstrim",
   "note": {
    "d": "Về phía thượng lưu so với vị trí đường tiếp đất năm 2011, chúng tôi không tìm thấy chướng ngại đáy nào đủ lớn để ngăn các sông băng lùi tiếp và rút cạn cả lưu vực.",
    "y": "«Upstream of the 2011 grounding line positions» — về phía thượng lưu so với một mốc; đối lập với downstream."
   }
  },
  {
   "id": "water-storage",
   "term": "water storage",
   "pos": "n",
   "vi": "trữ lượng nước",
   "en": "water held in reservoirs, soil or aquifers",
   "deck": "hydro",
   "freq": 2,
   "ex": "Humans directly change the dynamics of the water cycle through dams constructed for water storage, and through water withdrawals for industrial, agricultural, or domestic purposes.",
   "src": "Global water resources affected by human interventions and climate change",
   "ipa": "ˈwɔtər ˈstɔrədʒ",
   "note": {
    "d": "Con người trực tiếp làm thay đổi vòng tuần hoàn nước qua những con đập xây để trữ nước và qua việc khai thác nước cho công nghiệp, nông nghiệp hay sinh hoạt.",
    "y": "«dams constructed for water storage» — trữ nước là một trong hai cách con người can thiệp vào vòng tuần hoàn nước."
   }
  },
  {
   "id": "water-use",
   "term": "water use",
   "pos": "n",
   "vi": "mức sử dụng nước",
   "en": "the volume of water consumed by an activity",
   "deck": "hydro",
   "freq": 2,
   "ex": "Population, water availability and water use are the key elements of these indicators.",
   "src": "Water scarcity assessments in the past, present, and future",
   "ipa": "ˈwɔtər jus",
   "note": {
    "d": "Dân số, lượng nước sẵn có và mức sử dụng nước là ba thành phần chính của các chỉ số này.",
    "y": "Đứng cùng population và water availability: có nước, có người, và có mức dùng thì mới tính được khan hiếm."
   }
  },
  {
   "id": "wet-season",
   "term": "wet season",
   "pos": "n",
   "vi": "mùa mưa",
   "en": "the months of the year with heavy rainfall",
   "deck": "hydro",
   "freq": 2,
   "ex": "A hydrological model was applied to estimate daily stream flow, 222 m3/s in the wet season and 32 m3/s in the dry season, for the entire Nam Xong watershed.",
   "src": "Assessment of potential impacts of climate and land use changes on stream flow: a case study of the Nam Xong watershed in Lao PDR",
   "ipa": "wɛt ˈsizən",
   "note": {
    "d": "Một mô hình thuỷ văn đã được áp dụng để ước tính lưu lượng ngày cho toàn lưu vực Nam Xong: 222 m³/s vào mùa mưa và 32 m³/s vào mùa khô.",
    "y": "Mùa mưa 222 m³/s so với mùa khô 32 m³/s — chính khoảng chênh này gây cả lũ lẫn hạn."
   }
  },
  {
   "id": "arid",
   "term": "arid",
   "pos": "adj",
   "vi": "khô hạn",
   "en": "receiving very little rain",
   "deck": "hydro",
   "freq": 1,
   "ex": "Discrepancies in flow accumulation area were found mostly in arid river basins containing depressions that are occasionally connected at high water levels and thus resulting in uncertain watershed boundaries.",
   "src": "MERIT Hydro: A High‐Resolution Global Hydrography Map Based on Latest Topography Dataset",
   "ipa": "ˈærəd",
   "note": {
    "d": "Sai lệch về diện tích tích luỹ dòng chảy chủ yếu xuất hiện ở các lưu vực khô hạn có những chỗ trũng chỉ thông nhau khi mực nước lên cao, do đó ranh giới lưu vực trở nên không chắc chắn.",
    "y": "«arid river basins» — lưu vực khô hạn, nơi ranh giới lưu vực khó xác định vì các chỗ trũng lúc thông lúc không."
   }
  },
  {
   "id": "baseflow",
   "term": "baseflow",
   "pos": "n",
   "vi": "dòng chảy nền",
   "en": "the part of streamflow fed by groundwater between rains",
   "deck": "hydro",
   "freq": 1,
   "ex": "The user interaction or manual component of the SWAT-CUP calibration forces the user to obtain a better understanding of the overall hydrologic processes (e.g., baseflow ratios, ET, sediment sources and sinks, crop yields, and nutrient balances) and of parameter sensitivity.",
   "src": "SWAT: Model Use, Calibration, and Validation",
   "ipa": "ˈbeɪsˌfloʊ",
   "note": {
    "d": "Phần tương tác thủ công của quy trình hiệu chỉnh SWAT-CUP buộc người dùng phải hiểu rõ hơn toàn bộ các quá trình thuỷ văn (như tỉ lệ dòng chảy nền, bốc thoát hơi, nguồn và nơi lắng đọng bùn cát, năng suất cây trồng, cân bằng dinh dưỡng) cũng như độ nhạy của tham số.",
    "y": "Dòng chảy nền do nước ngầm nuôi, giữ cho sông không cạn giữa hai trận mưa."
   }
  },
  {
   "id": "environmental-flow",
   "term": "environmental flow",
   "pos": "n",
   "vi": "dòng chảy môi trường",
   "en": "water left in a river to keep its ecosystem alive",
   "deck": "hydro",
   "freq": 1,
   "ex": "However, challenges remain on appropriate incorporation of green water (soil moisture), water quality, environmental flow requirements, globalization and virtual water trade in water scarcity assessment.",
   "src": "Water scarcity assessments in the past, present, and future",
   "ipa": "ɪnˌvaɪrənˈmɛntəl floʊ",
   "note": {
    "d": "Tuy nhiên, vẫn còn thách thức trong việc đưa nước xanh lục (độ ẩm đất), chất lượng nước, yêu cầu dòng chảy môi trường, toàn cầu hoá và thương mại nước ảo vào đánh giá khan hiếm nước một cách hợp lý.",
    "y": "«environmental flow requirements» — lượng nước phải để lại cho sông để hệ sinh thái sống được, không được lấy hết."
   }
  },
  {
   "id": "green-water",
   "term": "green water",
   "pos": "n",
   "vi": "nước xanh lục (nước mưa trong đất)",
   "en": "rainwater stored in soil and used by plants",
   "deck": "hydro",
   "freq": 1,
   "ex": "However, challenges remain on appropriate incorporation of green water (soil moisture), water quality, environmental flow requirements, globalization and virtual water trade in water scarcity assessment.",
   "src": "Water scarcity assessments in the past, present, and future",
   "ipa": "ɡrin ˈwɔtər",
   "note": {
    "d": "Tuy nhiên, vẫn còn thách thức trong việc đưa nước xanh lục (độ ẩm đất), chất lượng nước, yêu cầu dòng chảy môi trường, toàn cầu hoá và thương mại nước ảo vào đánh giá khan hiếm nước một cách hợp lý.",
    "y": "Chú thích ngay trong câu: nước xanh lục chính là độ ẩm trong đất, nguồn nuôi cây trồng nhờ nước trời."
   }
  },
  {
   "id": "peak-flow",
   "term": "peak flow",
   "pos": "n",
   "vi": "lưu lượng đỉnh",
   "en": "the highest discharge reached during a flood",
   "deck": "hydro",
   "freq": 1,
   "ex": "As a whole, the Mangla basin will face more floods and less droughts in the future due to the projected increase in high and low flows, decrease in median flows and greater temporal and magnitudinal variations in peak flows.",
   "src": "Assessment of Climate Change Impact on Reservoir Inflows Using Multi Climate-Models under RCPs—The Case of Mangla Dam in Pakistan",
   "ipa": "pik floʊ",
   "note": {
    "d": "Nhìn tổng thể, lưu vực Mangla sẽ đối mặt với nhiều lũ hơn và ít hạn hơn trong tương lai, do dòng chảy lớn và dòng chảy nhỏ đều được dự tính tăng, dòng chảy trung vị giảm, còn lưu lượng đỉnh thì dao động mạnh hơn cả về thời điểm lẫn độ lớn.",
    "y": "«greater temporal and magnitudinal variations in peak flows» — đỉnh lũ vừa lệch về thời điểm vừa dao động về độ lớn."
   }
  },
  {
   "id": "water-body",
   "term": "water body",
   "pos": "n",
   "vi": "thuỷ vực",
   "en": "any area of water such as a lake, river or reservoir",
   "deck": "hydro",
   "freq": 1,
   "ex": "Here we introduce MERIT Hydro, a new global flow direction map at 3‐arc sec resolution (~90 m at the equator) derived from the latest elevation data (MERIT DEM) and water body data sets (G1WBM, Global Surface Water Occurrence, and OpenStreetMap).",
   "src": "MERIT Hydro: A High‐Resolution Global Hydrography Map Based on Latest Topography Dataset",
   "ipa": "ˈwɔtər ˈbɑdi",
   "note": {
    "d": "Ở đây chúng tôi giới thiệu MERIT Hydro, bản đồ hướng dòng chảy toàn cầu mới ở độ phân giải 3 giây cung (khoảng 90 m tại xích đạo), dựng từ dữ liệu độ cao mới nhất (MERIT DEM) và các bộ dữ liệu thuỷ vực (G1WBM, Global Surface Water Occurrence và OpenStreetMap).",
    "y": "«water body data sets» — dữ liệu về sông, hồ, ao; dùng cùng dữ liệu độ cao để vạch hướng dòng chảy."
   }
  },
  {
   "id": "water-shortage",
   "term": "water shortage",
   "pos": "n",
   "vi": "thiếu nước",
   "en": "a situation where supply cannot meet demand",
   "deck": "hydro",
   "freq": 1,
   "ex": "The extremely warm and dry conditions have led to acute water shortages, groundwater overdraft, critically low streamflow, and enhanced wildfire risk.",
   "src": "Anthropogenic warming has increased drought risk in California",
   "ipa": "ˈwɔtər ˈʃɔrtədʒ",
   "note": {
    "d": "Điều kiện nóng và khô cực độ đã dẫn tới thiếu nước nghiêm trọng, khai thác quá mức nước ngầm, dòng chảy sông xuống thấp tới ngưỡng nguy cấp và nguy cơ cháy rừng tăng cao.",
    "y": "«acute water shortages» — thiếu nước cấp tính, đứng đầu chuỗi hậu quả của điều kiện nóng và khô cực độ."
   }
  },
  {
   "id": "infiltration",
   "term": "infiltration",
   "pos": "n",
   "vi": "sự thấm nước vào đất",
   "en": "the process of water soaking into the soil",
   "deck": "hydro",
   "freq": 0,
   "ex": "",
   "src": "",
   "ipa": "ˌɪnfɪlˈtreɪʃən"
  }
 ],
 "meta": {
  "corpus": 261,
  "author": "Akiyuki Kawasaki - Dept. of Civil Engineering, The University of Tokyo",
  "source": "OpenAlex"
 }
};
